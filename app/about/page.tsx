import { redirect } from 'next/navigation';

export default function AboutPage() {
  return redirect('/');
  // return (
  //   <div className='space-y-12'>
  //     <section className='bg-foreground text-background'>
  //       <div className='container flex flex-row space-x-8 py-8'>
  //         <div className='max-w-lg'>
  //           <TypographyH1 className='mb-8'>
  //             My name is Pascal. I used to live in Cologne, Germany. Now I
  //             travel through Europe in my van.
  //           </TypographyH1>
  //           <TypographyLead>
  //             I am a freelance software developer. I started coding in my
  //             teenage years.
  //           </TypographyLead>
  //           <p>
  //             Former PHP enthusiast, Then NodeJS and TypeScript. Now living the
  //             Rustacean life.
  //           </p>
  //         </div>
  //         <div className='w-full'>
  //           <Image
  //             alt='A picture of Pascal Poredda flying a drone in Siurana, Spain.'
  //             src={'/me-flying-a-drone.jpg'}
  //             width={500}
  //             height={500}
  //             className='overflow-hidden ml-auto rounded-xl aspect-square rotate-3'
  //           />
  //         </div>
  //       </div>
  //     </section>
  //
  //     <section className=''>
  //       <div className='container flex flex-row space-x-8 py-8'>
  //         <div className='w-full'>
  //           <Image
  //             alt='A screenshot of the Neofetch CLI output in my terminal.'
  //             src={'/neofetch-screenshot.png'}
  //             width={600}
  //             height={300}
  //             className='overflow-hidden mr-auto rounded-xl aspect-video -rotate-3'
  //           />
  //         </div>
  //         <div>
  //           <TypographyH1>
  //             Software I use, gadgets I love, and other things I recommend.
  //           </TypographyH1>
  //           <TypographyP className='mb-8'>
  //             I get asked a lot about the things I use to build software, stay
  //             productive, or buy to fool myself into thinking I’m being
  //             productive when I’m really just procrastinating.
  //             <br />
  //             Here’s a short list of all of my favorite stuff.
  //           </TypographyP>
  //           <ul className='list-disc list-inside'>
  //             <li>
  //               <b>IDE</b>: NeoVim in Alacritty
  //             </li>
  //             <li>
  //               <b>Font</b>: IBM Blex Mono Nerd Font
  //             </li>
  //             <li>
  //               <b>Keyboard</b>: ZSA Moonlander with black switches
  //             </li>
  //             <li>
  //               <b>Workhorse</b>: Macbook Pro 16&apos;, 32GB Ram, M2 Max
  //             </li>
  //             <li>
  //               <b>Tech-Stack backend</b>: Rust, Axum, SQLX, Postgres
  //             </li>
  //             <li>
  //               <b>Tech-Stack frontend</b>: NextJS, React or simple HTML + HTMX
  //             </li>
  //             <li>
  //               <b>Hosting</b>: Vercel, DigitalOcean
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </section>
  //     {/* <section className='max-w-2xl'> */}
  //     {/*   <TypographyH1 className='mb-8'>Lifestyle</TypographyH1> */}
  //     {/*   <p> */}
  //     {/*     My homebase is in Cologne, Germany, where I&apos;m rooted in the */}
  //     {/*     climbing and dance communities. */}
  //     {/*   </p> */}
  //     {/*   <p> */}
  //     {/*     I&apos;m not your typical developer — I&apos;m also a dirtbag climber */}
  //     {/*     exploring Europe in my beloved camper van, which I&apos;ve lovingly */}
  //     {/*     dubbed OfficePlanB. */}
  //     {/*   </p> */}
  //     {/*   <p> */}
  //     {/*     Brazillian Zouk and rock climbing are my passions, and I thrive on */}
  //     {/*     delving into the intricacies of social dynamics. */}
  //     {/*   </p> */}
  //     {/* </section> */}
  //   </div>
  // );
}
