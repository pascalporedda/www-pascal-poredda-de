import { TypographyH1 } from '@/components/ui/typogrpahy/h1';
import { TypographyH2 } from '@/components/ui/typogrpahy/h2';
import { TypographyP } from '@/components/ui/typogrpahy/p';

export const metadata = {
  title: 'Imprint',
};

export default function ImprintPage() {
  return (
    <div className='max-w-2xl space-y-8'>
      <TypographyH1>Imprint</TypographyH1>

      <section>
        <TypographyH2>Information according to § 5 TMG</TypographyH2>
        <TypographyP>
          Pascal Poredda
          <br />
          Wittekindstr. 30
          <br />
          45879 Gelsenkirchen
          <br />
          Germany
        </TypographyP>
      </section>

      <section>
        <TypographyH2>Contact</TypographyH2>
        <TypographyP>
          Email: contact@pascal-poredda.de
          <br />
          Website: https://pascal-poredda.de
        </TypographyP>
      </section>

      <section>
        <TypographyH2>
          Responsible for Content according to § 55 Abs. 2 RStV
        </TypographyH2>
        <TypographyP>
          Pascal Poredda
          <br />
          Wittekindstr. 30
          <br />
          45879 Gelsenkirchen
          <br />
          Germany
        </TypographyP>
      </section>

      <section>
        <TypographyH2>Dispute Resolution</TypographyH2>
        <TypographyP>
          The European Commission provides a platform for online dispute
          resolution (OS): https://ec.europa.eu/consumers/odr
        </TypographyP>
        <TypographyP>
          We are not willing or obliged to participate in dispute resolution
          proceedings before a consumer arbitration board.
        </TypographyP>
      </section>

      <section>
        <TypographyH2>Liability for Content</TypographyH2>
        <TypographyP>
          The contents of our pages have been created with great care. However,
          we cannot guarantee the accuracy, completeness, and timeliness of the
          content. As a service provider, we are responsible for our own content
          on these pages according to § 7 Abs.1 TMG. According to §§ 8 to 10
          TMG, we are not obligated to monitor transmitted or stored third-party
          information or to investigate circumstances that indicate illegal
          activity.
        </TypographyP>
      </section>
    </div>
  );
}
