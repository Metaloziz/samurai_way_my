import { ReactElement } from 'react';

type ButtonType = {
  title: string;
  onClickHandler: () => void;
};

export const Button = ({ title, onClickHandler }: ButtonType): ReactElement => (
  <button type="button" onClick={onClickHandler}>
    {title}
  </button>
);
