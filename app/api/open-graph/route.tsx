import { fontSans } from '@/lib/fonts';
import { ImageResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export const size = {
  width: 1920,
  height: 1080,
};

export const alt = 'Social Media Image';

export const contentType = 'image/png';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');

  const interFont = fetch(
    new URL('./../../../public/fonts/Inter-Regular.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(https://pascal-poredda.de/og-bg.jpg)',
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: postTitle?.length ?? 0 > 30 ? 72 : 90,
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
            fontFamily: 'Inter',
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interFont,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
