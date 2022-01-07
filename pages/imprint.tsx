import { withPortfolioLayout } from '../layouts/PortfolioLayout';
import React from 'react';
import SectionTitle from '../components/Ui/SectionTitle';
import TwoSidedContent from '../layouts/TwoSidedContent';

function Imprint() {
  const darkSide = (
    <div className={'space-y-4'}>
      <SectionTitle textPosition={'left'} size={'lg'}>
        Imprint
      </SectionTitle>

      <SectionTitle textPosition={'left'}>
        Entries referred to &sect; 5 TMG
      </SectionTitle>
      <p>
        Pascal Poredda
        <br />
        Robertstr. 21
        <br />
        51105 Köln
      </p>

      <SectionTitle textPosition={'left'}>Contact</SectionTitle>
      <p>
        Phone: 0151 25921883
        <br />
        Mail: contact@pascal-poredda.de
      </p>

      <SectionTitle textPosition={'left'}>
        Editorial responsibility
      </SectionTitle>
      <p>Pascal Poredda</p>

      <SectionTitle textPosition={'left'}>
        Dispute settlement proceedings
      </SectionTitle>
      <p>
        We are neither willing nor obliged to participate in dispute settlement
        proceedings before a consumer arbitration board
      </p>
    </div>
  );

  const lightSide = (
    <>
      <SectionTitle textPosition={'left'} size={'lg'}>
        Legal notice
      </SectionTitle>
      <p>
        This website contains all the required legal notices, especially
        required and enforced by law in Germany.
      </p>
    </>
  );
  return <TwoSidedContent lightSide={lightSide} darkSide={darkSide} />;
}

Imprint.getLayout = withPortfolioLayout;

export default Imprint;
