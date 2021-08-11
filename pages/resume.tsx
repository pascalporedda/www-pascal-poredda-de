import SectionTitle from '../components/Ui/SectionTitle';
import TwoSidedContent from '../layouts/TwoSidedContent';
import { withPortfolioLayout } from '../layouts/PortfolioLayout';

type TimelineItem = {
  period: string;
  description?: string;
  establishment: string;
  title: string;
};
export default function Resume() {
  const timelineItemsEducation: TimelineItem[] = [
    {
      period: '2008-2016',
      establishment: 'Ricarda-Huch-Gymnasium',
      title: 'Higher education',
    },
    {
      period: '2017-2021',
      establishment: 'Westfälische Hochschule Gelsenkirchen',
      title: 'Computer Science',
      description: 'B.Sc. Computer Science',
    },
  ];

  const timelineItemsWork: TimelineItem[] = [
    {
      period: '03/2014 - 11/2014',
      establishment: 'desire-solution GmbH',
      title: 'Web developer',
      description: 'Creating web designs and internal company tools.',
    },
    {
      period: '03/2015 - Cur.',
      establishment: 'Freelancer',
      title: 'Software Development & Consulting',
      description:
        'Creating multimedia Cross Platform Apps, consultation and creation as well as the maintenance of websites.',
    },
    {
      period: '09/2015 - 06/2020',
      establishment: 'medienpark GmbH',
      title: 'Fullstack Web developer',
      description:
        'Creating highly scalable ecommerce web applications, with a keen eye for the frontend.',
    },
    {
      period: '06/2020 - Cur.',
      establishment: 'rola Security Solutions GmbH',
      title: 'Frontend developer',
      description:
        'Creating applications in a security related field, for the police, the Bundeswehr and the federal office for the protection of the constitution.',
    },
  ];

  const renderTimelineItem = (item: TimelineItem) => (
    <div key={item.title} className={'flex flex-col leading-loose mb-8'}>
      <div className='flex flex-row items-center mb-4'>
        <span
          className={
            'border-2 rounded-2xl border-accent-green py-2 px-4 block mr-2 text-xs'
          }>
          {item.period}
        </span>
        <p className={'text-sm text-gray-700 mb-0'}>{item.establishment}</p>
      </div>
      <div className='border-l-2 border-gray-700 pl-4'>
        <p className={'text-lg font-bold mb-2 text-accent-green opacity-80'}>
          {item.title}
        </p>
        {item.description && <p className={'text-sm'}>{item.description}</p>}
      </div>
    </div>
  );

  const darkSide = (
    <>
      <SectionTitle textPosition={'left'} className={'mb-4'}>
        Work experience
      </SectionTitle>
      {timelineItemsWork.map((item) => renderTimelineItem(item))}
      <SectionTitle textPosition={'left'} className={'mb-4'}>
        Education
      </SectionTitle>
      {timelineItemsEducation.map((item) => renderTimelineItem(item))}
    </>
  );

  const tableItems = [
    {
      column: 'Name',
      value: 'Pascal Poredda',
    },
    {
      column: 'Date of birth',
      value: '03.03.1998',
    },
    {
      column: 'Marital status',
      value: 'single',
    },
    {
      column: 'Nationality',
      value: 'german',
    },
    {
      column: 'Hobbys',
      value: 'Climbing, Calisthenics, Tech, Public Speaking, Dancing',
    },
    {
      column: 'Sprachen',
      value: 'English (fluid), German (native)',
    },
    {
      column: 'Drivers license, Car',
      value: 'Class B, available',
    },
  ];

  const skills = [
    'PHP',
    'NodeJS',
    'React',
    'Angular',
    'Typescript',
    'HTML',
    'CSS',
    'Vue.JS',
    'NextJS',
    'React Native',
    'Cross Platform Apps',
    'Electron',
    'Docker',
    'Jenkins CI',
    'Git',
    'Responsive Design',
    'SCSS',
    'LESS',
    'TailwindCSS',
    'Bootstrap',
    'jQuery',
    'UI Design',
    'UX Gestaltung',
    'APIs',
    'Cypress E2E Testing',
    'Jest',
    'Unit Testing',
    'Elasticsearch',
    'MongoDB',
    'MySQL',
  ];
  const highlight = [
    'Angular',
    'React',
    'NodeJS',
    'PHP',
    'HTML',
    'CSS',
    'Typescript',
  ];
  const lightSide = (
    <>
      <SectionTitle size={'lg'} textPosition={'left'}>
        Resume
      </SectionTitle>
      <SectionTitle size={'sm'} textPosition={'left'} className={'mb-4'}>
        About me
      </SectionTitle>

      <div className='flex space-y-2 flex-col mb-4'>
        {tableItems.map((item) => (
          <div key={item.column} className='flex flex-row space-x-8'>
            <p className={'w-full'}>{item.column}</p>
            <p className={'w-full'}>{item.value}</p>
          </div>
        ))}
      </div>
      <SectionTitle size={'sm'} textPosition={'left'} className={'mb-4'}>
        Skills
      </SectionTitle>
      <div className='flex mb-4 flex-row flex-wrap items-center justify-center'>
        {skills.map((skill) => (
          <div
            key={skill}
            className={
              'bg-accent-green flex-1 mb-2 text-white text-center px-4 py-2' +
              ' rounded-lg filter drop-shadow mr-2 w-auto ' +
              (highlight.includes(skill)
                ? ' border-black border-b-4 drop-shadow-xl'
                : '')
            }>
            <span
              className={
                'flex text-sm items-center break-all whitespace-nowrap justify-center'
              }>
              {skill}
            </span>
          </div>
        ))}
      </div>
      <SectionTitle size={'sm'} textPosition={'left'} className={'mb-4'}>
        Contact
      </SectionTitle>
      <p>
        Bertastr. 51,
        <br />
        45883 Gelsenkirchen
        <br />
        Mobile: 0151 / 259 218 83
        <br />
        E-Mail: me@pascal-poredda.de
      </p>
    </>
  );

  return <TwoSidedContent lightSide={lightSide} darkSide={darkSide} />;
}

Resume.getLayout = withPortfolioLayout;
