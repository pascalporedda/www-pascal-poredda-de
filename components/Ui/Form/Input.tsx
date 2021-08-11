import React, { ReactChild } from 'react';
import { FieldError } from 'react-hook-form';

type InputProps = {
  children?: ReactChild;
  id: string;
  label?: string | ReactChild;
  name?: string;
  value?: string;
  error?: FieldError;
  rows?: number;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

// TODO: add the possibility for an icon
const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    {
      placeholder,
      className,
      type,
      label,
      id,
      error,
      autoComplete,
      value,
      children,
      required,
      ...otherProps
    },
    ref,
  ) => {
    let inlineClasses = 'mb-4 flex w-full flex-col';
    const fieldClasses = [
      'bg-gray-850 filter drop-shadow border-gray-900 text-white rounded-xl ring-transparent focus:ring-accent-green hover:ring-accent-green',
    ];
    if (type && type === 'checkbox') {
      inlineClasses = 'flex-row';
      fieldClasses.push('mr-2 bg-gray-800 cursor-pointer text-accent-green');
    }

    if (className) {
      fieldClasses.push(className);
    }

    let input;
    if (type === 'textarea') {
      input = (
        <textarea
          id={id}
          placeholder={placeholder}
          className={fieldClasses.join(' ')}
          ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
          autoComplete={autoComplete}
          value={value}
          {...otherProps}
        />
      );
    } else {
      input = (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={fieldClasses.join(' ')}
          ref={ref as React.ForwardedRef<HTMLInputElement>}
          autoComplete={autoComplete}
          value={value}
          {...otherProps}
        />
      );
    }

    const labelElement = (
      <label
        htmlFor={id}
        className={`cursor-pointer text-xs font-extrabold mb-2 mr-2 `}>
        {label}
        {required ? ' *' : null}
      </label>
    );

    const errorMessage = error && (
      <p className='font-bold text-xs pt-2 text-accent-red'>
        <ErrorMessage error={error} />
      </p>
    );

    if (type === 'checkbox') {
      return (
        <div className={inlineClasses}>
          {input}
          {label && labelElement}
          {errorMessage}
          {children}
        </div>
      );
    }

    return (
      <div className={inlineClasses}>
        {label && labelElement}
        {input}
        {errorMessage}
        {children}
      </div>
    );
  },
);
Input.displayName = 'Input';

type ErrorMessageProp = {
  error: FieldError;
};
export const ErrorMessage: React.FC<ErrorMessageProp> = ({ error }) => {
  if (error.message) {
    return <span>{error.message}</span>;
  }

  let message = '';

  if (error.type === 'required') {
    message = 'This field is required.';
  }

  // TODO: handle the other cases as well?
  return <span>{message}</span>;
};

export default Input;
