---
title: 'The current state of the Notion API'
excerpt: 'Notions official API still needs more work, features and bug fixes. But hey it is still in beta status right?'
topic: 'Technology'
tags: 'Blog, React, Notion, API'
publishedDate: '2021-08-14T08:00:00Z'
author: 'Pascal Poredda'
socialShareImage:
    url: 'https://pascal-poredda.de/images/social/main-og-image.png'
    altText: ''
    height: 720
    width: 1280
---

## My struggles with the Notion API

These days you have several options when it comes to creating a blog. I wanted to go either with markdown or with creating and writing my blog posts within Notion.
Recently the Notion API went public, yes there is an unofficial private API that could be used as well, but I like to rely on the "official" stuff.

I spent a Sunday afternoon implementing the basic stuff like authentication with the Notion API, fetching my database pages, and the blocks on those pages.

This taught me a few things:
1. The API is not yet ready
2. There aren't many officially supported blocks
3. What's considered a "block"

Let's dive a little deeper into those points.

## The API is not (yet) ready
I stumbled upon a few pesky bugs in a short amount of time. Even the most basic stuff like fetching blocks from a page. Although they yet don't have many blocks supported, those that are meant to be supported contain bugs for example the ListBlocks like a numbered list don't contain their children although they should. There is an [open bug issue on Github](https://github.com/makenotion/notion-sdk-js/issues/147) that was created around a month ago and is still not fixed.

*I don't want to rant nor do I want to blame anyone.*

Their API is still in beta status. That's probably why the Notion team might not consider putting too much effort into progressing the API, but still, it is frustrating.

## There aren't many supported blocks (yet)
As I have already mentioned, they are not many blocks yet supported by their official API. Compared to the unofficial API where there are nearly all blocks "supported".

At the time of writing this, only headings, rich texts, lists, toggle blocks, and todos are supported. Images for example are not yet supported. There is a workaround [that was posted on dev.to](https://dev.to/twankrui/render-images-with-the-official-notion-api-3gnh) which does work but is pretty hacky

As time moves on, their API will move on as well. More blocks will be supported and I will stop complaining.

I would be pretty happy if they officially support image and code blocks. I hope that is not too much to ask for?

## What is considered a block?

I suppose the Notion team has the mantra that everything is a block or everything is a page? Or both? When it comes to their application numbered or bulleted lists are displayed as one block or group and I thought that one list would be one block.

But that's not the case! Every list item is a block and does contain its children (if it has any) and the formatting belonging to that item.
I imagined it as a plain HTML `ul` with several `li` children, but I was wrong.
As I was building a custom renderer for the blog posts from a Notion API response, I figured out that I could group all the blocks that belonged together. All I had to do was look one block ahead and see if the next block type was the same as his predecessor, if that was the case I could group them.

That worked so far, but then I came across the problem described above if the list was deeply nested. That forced me to make several requests for deeply nested lists and made me traverse the block tree on my own.

Although that worked, it wasn't very fast nor did it feel "right".

If anyone is interested in my approach you can either find the code here it is:

```ts
const notion = new Client({
    auth: process.env.NOTION_TOKEN
  });

  const deepFetchAllChildren = async (blocks: Block[]): Promise<Array<Block[] | Block>> => {

    const fetchChildrenMap = blocks.filter(block => block.has_children).map(block => {
      return {
        promise: notion.blocks.children.list({ block_id: block.id, page_size: 100 }),
        parent_block: block
      };
    });

    const results = await Promise.all<BlocksChildrenListResponse>(fetchChildrenMap.map(value => value.promise));

    for (let i = 0; i < results.length; i++) {
      const childBlocks = results[i].results;
      await deepFetchAllChildren(childBlocks);
      if (fetchChildrenMap[i]) {
        const parent: any = fetchChildrenMap[i].parent_block;
        parent[parent.type].children = childBlocks;
      }
    }
    return blocks;
  };

  const return404 = () => {
    res.statusCode = 404;
    return {
      props: {
        page: null,
        blocks: []
      }
    };
  };

  if (!params || !params["postSlug"] || Array.isArray(params["postSlug"])) {
    return return404();
  }

  const postSlug = params["postSlug"] as string;

  const response = await notion.databases.query({
    database_id: "...",
    page_size: 10,
    filter: {
      property: "Slug",
      text: {
        equals: postSlug
      }
    },
    sorts: [{ timestamp: "last_edited_time", direction: "ascending" }]
  });

  if (response.results.length === 0) {
    return return404();
  }

  const page = response.results[0];

  if (response.results.length > 1) {
    logger.info(`There was more than one page found for slug "${postSlug}", apparently Notion databse contains wrongly configured items. We are taking the first result.`);
  }

  let blockResponse = await notion.blocks.children.list({ block_id: page.id, page_size: 100 });
  let blocks = [
    ...await deepFetchAllChildren(blockResponse.results)
  ];

  while (blockResponse.has_more && blockResponse.next_cursor) {
    blockResponse = await notion.blocks.children.list({
      block_id: page.id,
      page_size: 50,
      start_cursor: blockResponse.next_cursor
    });

    const results = blockResponse.results;
    blocks = blocks.concat(await deepFetchAllChildren(results));
  }

  return {
    props: {
      page,
      blocks
    }
  };
```

Several improvements can be implemented in the code above:
Don't use `async` `await` everywhere
Rather gather and group promises and use `Promise.all()`
but, for a simple proof of concept that was good enough.

## Where am I going with this

After putting quite a few hours into a working draft I set it aside as their official API is not yet really ready for my purposes. Though I think that once they fix more bugs and support more blocks, it will evolve into a pretty awesome CMS for many blogs.

There are already quite a few unofficial systems that use the unofficial Notion API like [NotionX](https://github.com/NotionX/react-notion-x). But as I mentioned earlier, I like to use the "official" stuff.

For the future, I started working on an open-source library called [React Notion Blocks](https://github.com/pascalporedda/react-notion-blocks) which will use the official Notion API client to request and render your blocks in an unstyled manner so that you can simply apply the styling via CSS.


