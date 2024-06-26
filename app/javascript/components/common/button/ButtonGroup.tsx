import React, { Fragment } from 'react';
import { nanoid } from 'nanoid';

import Button from './Button';

interface IProps {
  label: string;
  activeBtnLabel: string;
  btnLabels: string[];
  onClick: (e: Event) => void;
}

const ButtonGroup = ({ label, activeBtnLabel, btnLabels, onClick }: IProps) => {
  return (
    <div
      className='btn-group'
      role='group'
      aria-label={label}
    >
      {btnLabels.map((label: string, i: number) => (
        <Fragment key={nanoid()}>
          <Button
            label={label}
            onClick={onClick}
            classes={`
              btn 
              border-secondary-subtle
              ${activeBtnLabel === label ? 'btn-primary text-light' : 'btn-white'}
            `}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default ButtonGroup;
