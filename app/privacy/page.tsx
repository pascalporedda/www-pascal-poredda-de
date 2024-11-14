import { TypographyH1 } from '@/components/ui/typogrpahy/h1';
import { TypographyH2 } from '@/components/ui/typogrpahy/h2';
import { TypographyP } from '@/components/ui/typogrpahy/p';
import { TypographyList } from '@/components/ui/typogrpahy/list';

export const metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <div className='max-w-2xl space-y-8'>
      <TypographyH1>Privacy Policy</TypographyH1>

      <section>
        <TypographyH2>1. Data Protection Overview</TypographyH2>
        <TypographyP>
          This privacy policy explains the type, scope, and purpose of personal
          data processing on our website. Personal data is any information that
          can identify an individual.
        </TypographyP>
      </section>

      <section>
        <TypographyH2>2. Responsible Party</TypographyH2>
        <TypographyP>
          Pascal Poredda
          <br />
          Email: contact@pascal-poredda.de
        </TypographyP>
      </section>

      <section>
        <TypographyH2>3. Analytics</TypographyH2>
        <TypographyP>
          This website uses Umami Analytics, a privacy-focused analytics
          solution. Umami collects anonymous usage data to help us understand
          how visitors interact with our website. No personal information is
          collected or stored.
        </TypographyP>
        <TypographyP>
          The analytics data is stored on our own servers and is not shared with
          third parties.
        </TypographyP>
      </section>

      <section>
        <TypographyH2>4. Your Rights</TypographyH2>
        <TypographyP>
          You have the following rights regarding your personal data:
        </TypographyP>
        <TypographyList>
          <li>Right to information</li>
          <li>Right to rectification or deletion</li>
          <li>Right to restriction of processing</li>
          <li>Right to object to processing</li>
          <li>Right to data portability</li>
        </TypographyList>
      </section>

      <section>
        <TypographyH2>5. Contact Form & Email</TypographyH2>
        <TypographyP>
          When you contact us via email or through our contact form, the data
          you provide (your email address, name, and message content) will be
          stored by us to handle your request and in case of follow-up
          questions. We will delete this data once your request has been handled
          and storage is no longer required, or restrict its processing if there
          are legal retention requirements.
        </TypographyP>
      </section>

      <section>
        <TypographyH2>6. Updates to this Policy</TypographyH2>
        <TypographyP>
          We reserve the right to update this privacy policy to reflect changes
          in our practices or for legal, operational, or regulatory reasons. The
          current version will always be available on this website.
        </TypographyP>
        <TypographyP>Last updated: March 2024</TypographyP>
      </section>
    </div>
  );
}
