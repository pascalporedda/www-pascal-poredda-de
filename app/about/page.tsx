import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { TypographyH1 } from '@/components/ui/typogrpahy/h1';
import { TypographyH2 } from '@/components/ui/typogrpahy/h2';
import { TypographyLead } from '@/components/ui/typogrpahy/lead';
import { TypographyP } from '@/components/ui/typogrpahy/p';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className='space-y-12'>
      <section className='bg-foreground text-background'>
        <div className='container flex flex-row space-x-8 py-8'>
          <div className='max-w-lg'>
            <TypographyH1 className='mb-8'>
              I&apos;m Pascal Poredda. I live in Cologne, but travel all around
              Europe in my van.
            </TypographyH1>
            <TypographyLead>
              I am a Freelance Software Developer, kickstarted my journey in
              2016.
            </TypographyLead>
            <p>
              Former PHP enthusiast, I delved into the world of NodeJS +
              TypeScript land and eventually found my heart in the Rust land
              (for now). My passion lies in continuous learning, crafting
              software that works reliably and moving fast (I also type fast).
            </p>
          </div>
          <div className='w-full'>
            <Image
              alt='A picture of Pascal Poredda flying a drone in Siurana, Spain.'
              src={'/me-flying-a-drone.jpg'}
              width={500}
              height={500}
              className='overflow-hidden ml-auto rounded-xl aspect-square rotate-3'
            />
          </div>
        </div>
      </section>

      <section className=''>
        <div className='container flex flex-row space-x-8 py-8'>
          <div className='w-full'>
            <Image
              alt='A screenshot of the Neofetch CLI output in my terminal.'
              src={'/neofetch-screenshot.png'}
              width={600}
              height={300}
              className='overflow-hidden mr-auto rounded-xl aspect-video -rotate-3'
            />
          </div>
          <div>
            <TypographyH1>
              Software I use, gadgets I love, and other things I recommend.
            </TypographyH1>
            <TypographyP className='mb-8'>
              I get asked a lot about the things I use to build software, stay
              productive, or buy to fool myself into thinking I’m being
              productive when I’m really just procrastinating.
              <br />
              Here’s a short list of all of my favorite stuff.
            </TypographyP>
            <ul className='list-disc list-inside'>
              <li>
                <b>IDE</b>: NeoVim in Alacritty
              </li>
              <li>
                <b>Font</b>: IBM Blex Mono Nerd Font
              </li>
              <li>
                <b>Keyboard</b>: ZSA Moonlander with black switches
              </li>
              <li>
                <b>Workhorse</b>: Macbook Pro 16&apos;, 32GB Ram, M2 Max
              </li>
              <li>
                <b>Tech-Stack backend</b>: Rust, Axum, SQLX, Postgres
              </li>
              <li>
                <b>Tech-Stack frontend</b>: NextJS, React or simple HTML + HTMX
              </li>
              <li>
                <b>Hosting</b>: Vercel, DigitalOcean
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <section className='max-w-2xl'> */}
      {/*   <TypographyH1 className='mb-8'>Lifestyle</TypographyH1> */}
      {/*   <p> */}
      {/*     My homebase is in Cologne, Germany, where I&apos;m rooted in the */}
      {/*     climbing and dance communities. */}
      {/*   </p> */}
      {/*   <p> */}
      {/*     I&apos;m not your typical developer — I&apos;m also a dirtbag climber */}
      {/*     exploring Europe in my beloved camper van, which I&apos;ve lovingly */}
      {/*     dubbed OfficePlanB. */}
      {/*   </p> */}
      {/*   <p> */}
      {/*     Brazillian Zouk and rock climbing are my passions, and I thrive on */}
      {/*     delving into the intricacies of social dynamics. */}
      {/*   </p> */}
      {/* </section> */}
    </div>
  );
}
