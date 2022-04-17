import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactElement } from 'react';

import style from './Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type ButtonCommonType = DefaultButtonPropsType & {
  name: string;
};

export const Button: FC<ButtonCommonType> = ({ name, ...restProps }): ReactElement => (
  <button className={style.item} type="button" {...restProps}>
    {name}
  </button>
);
