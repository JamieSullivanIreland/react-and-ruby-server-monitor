import React from 'react';

interface IProps {
  onSubmit: (e: Event) => void;
}

const Form = ({ children, onSubmit }: React.FC<IProps>) => {
  return (
    <form
      noValidate
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
