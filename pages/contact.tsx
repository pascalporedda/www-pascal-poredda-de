import React, { useState } from 'react';
import { Control, FieldErrors, useForm, useWatch } from 'react-hook-form';
import Input, { ErrorMessage } from '../components/Ui/Form/Input';
import {
  faCode,
  faDesktop,
  faPersonBooth,
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import SelectableOption from '../components/Ui/Form/SelectableOption';
import ProgressSubmitButton from '../components/Ui/Form/ProgressSubmitButton';
import MessageCard, { MessageType } from '../components/Ui/MessageCard';
import TwoSidedContent from '../layouts/TwoSidedContent';
import { withPortfolioLayout } from '../layouts/PortfolioLayout';
import { useRouter } from 'next/router';
import { withSeoDefaults, withUrls } from '../util/seo-util';
import PageMetaAndTitle from '../components/SEO/PageMetaAndTitle';
import { name } from '../util/config';
import Link from 'next/link';

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type ContactData = {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  details: string;
  company?: string;
  projectType: string;
  acceptPrivacy: boolean;
};
export default function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, dirtyFields },
  } = useForm<ContactData>({
    mode: 'onChange',
    defaultValues: {
      lastname: '',
      firstname: '',
      email: '',
      company: '',
      details: '',
      projectType: '',
      acceptPrivacy: false,
      subject: '',
    },
    shouldFocusError: true,
  });

  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [formMessage, setFormMessage] = useState<{
    type: MessageType;
    message: string;
  } | null>(null);

  const onSubmit = async (formData: ContactData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      if (response.success) {
        setFormMessage({ type: 'success', message: response.success });
      }

      if (response.error) {
        setFormMessage({ type: 'error', message: response.error });
      }
    } catch (error) {
      setFormMessage({
        type: 'error',
        message:
          'An unknown error occured. Please drop me an e-mail at hello@pascal-poredda.de.',
      });
    }
  };

  const projectTypeOptions = [
    {
      icon: faCode,
      text: 'Development',
    },
    {
      icon: faDesktop,
      text: 'UI/UX Design',
    },
    {
      icon: faYoutube,
      text: 'Content',
    },
    {
      icon: faPersonBooth,
      text: 'Consulting',
    },
  ];

  register('projectType', {
    required: 'Please select the project type.',
  });

  const privacyText = (
    <span>
      I agree that my data from the contact form will be collected and processed
      to answer my request. Furthermore, I agree to the processing of my data in
      accordance with the{' '}
      <Link passHref href={'/privacy'}>
        <a
          className='underline'
          target={'_blank'}
          title={'Here you will find the privacy policy.'}>
          privacy policy.
        </a>
      </Link>
    </span>
  );

  const form = (
    <form onSubmit={handleSubmit(onSubmit)} className={'text-white'}>
      <h2 className={'text-xl font-bold mb-4'}>
        Information about your person
      </h2>
      <div className='flex flex-col lg:flex-row'>
        <Input
          id={'firstname'}
          label={'Firstname'}
          type={'text'}
          autoComplete={'firstname'}
          required={true}
          {...register('firstname', {
            required: 'Please enter your firstname.',
          })}
          error={errors.firstname}
          className={'lg:mr-4'}
        />
        <Input
          id={'lastname'}
          label={'Lastname'}
          type={'text'}
          autoComplete={'lastname'}
          required={true}
          {...register('lastname', {
            required: 'Please enter your lastname',
          })}
          error={errors.lastname}
        />
      </div>
      <div className='flex flex-col lg:flex-row'>
        <Input
          id={'email'}
          label={'E-Mail address'}
          type={'email'}
          autoComplete={'email'}
          required={true}
          {...register('email', {
            required: 'It is essential to enter an e-mail address.',
            pattern: {
              value: EMAIL_REGEX,
              message: 'The entered e-mail address is not a valid e-mail.',
            },
          })}
          className={'lg:mr-4'}
          error={errors.email}
        />
        <Input
          id={'compnay'}
          label={'Company'}
          type={'text'}
          autoComplete={'company'}
          {...register('company', { required: false })}
          error={errors.company}
        />
      </div>
      <h2 className={'text-xl font-bold mb-4'}>
        Information about the project
      </h2>
      <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 mb-4 lg:space-x-4'>
        {projectTypeOptions.map((option) => (
          <SelectableOption
            key={option.text}
            icon={option.icon}
            text={option.text}
            onSelect={async () => {
              setValue('projectType', option.text);
              setSelectedProjectType(option.text);
            }}
            active={selectedProjectType === option.text}
            iconSize={'lg'}
          />
        ))}
        {errors.projectType && (
          <p className='font-bold text-xs pt-2 text-accent-red'>
            <ErrorMessage error={errors.projectType} />
          </p>
        )}
      </div>
      <Input
        id={'subject'}
        label={'Brief description'}
        type={'text'}
        required={true}
        {...register('subject', {
          required: 'Please describe the project in one brief sentence.',
        })}
        error={errors.subject}
      />
      <Input
        id={'details'}
        label={'Project description'}
        type={'textarea'}
        required={true}
        {...register('details', {
          required: 'Please give me some more information along the way.',
          minLength: {
            value: 100,
            message:
              'Please describe the project in more detail (at least 100 characters).',
          },
        })}
        rows={5}
        error={errors.details}
      />
      <div className='mb-4'>
        <Input
          id={'dataprivacy'}
          type={'checkbox'}
          {...register('acceptPrivacy', {
            required:
              'No project request can be submitted without agreeing to the privacy policy.',
          })}
          label={privacyText}
        />
      </div>
      <IsolatedRenderWatch errors={errors} control={control} />
    </form>
  );

  const lightContent = (
    <>
      <h1 className={'text-2xl lg:text-5xl font-extrabold mb-8'}>
        Looking for support with your next project?
      </h1>
      <p className={'mb-4'}>
        You have probably already put in a few hours of work in the planning and
        the design of your project and know every little detail? The problem is:
        I don&apos;t. Therefore you tell me what it is about and which key data
        you want to share with me.
      </p>
    </>
  );

  const darkContent = (
    <>
      {formMessage && (
        <MessageCard message={formMessage.message} type={formMessage.type} />
      )}
      {formMessage && formMessage.type === 'success' ? null : form}
    </>
  );

  const router = useRouter();
  const title = 'Contact me - ' + name;
  const pageMetaData = withUrls(
    withSeoDefaults({
      title: title,
      ogTitle: title,
    }),
    router.pathname,
  );

  return (
    <>
      <PageMetaAndTitle metaData={pageMetaData} />
      <TwoSidedContent lightSide={lightContent} darkSide={darkContent} />
    </>
  );
}

Contact.getLayout = withPortfolioLayout;

function IsolatedRenderWatch({
  control,
  errors,
}: {
  errors: FieldErrors<ContactData>;
  control: Control<ContactData>;
}) {
  const watch = useWatch({
    control,
  });

  const validFields = (Object.keys(watch) as [keyof ContactData]).reduce(
    (previousValue, currentValue) =>
      !errors[currentValue] && watch[currentValue]
        ? previousValue + 1
        : previousValue,
    0,
  );

  return (
    <ProgressSubmitButton
      progress={validFields / (Object.keys(watch).length - 1)}
      label={'Submit request'}
    />
  );
}
