import style from '../Users/Users.module.css';
import loader from '../Users/imgAva/blak_water.gif';

export const Preloader = () => {
  return <img className={style.loader} alt={'loader'} src={loader} />;
};