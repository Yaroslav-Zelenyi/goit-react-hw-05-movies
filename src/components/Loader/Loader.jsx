import css from './Loader.module.css';
import { ImSpinner11 } from 'react-icons/im';

export default function Loader() {
  return (
    <div className={css.loader__backdrop}>
      <ImSpinner11
        className={css.loader__spinner}
        color="tomato"
      />
    </div>
  );
}