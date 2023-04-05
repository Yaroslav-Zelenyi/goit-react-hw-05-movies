import { useLocalStorage } from '../LocalStorage';
import { useSearchParams } from 'react-router-dom';
import css from './SearchBar.module.css';

export function SearchBar({ query }) {
  const [value, setValue] = useLocalStorage('searchValue', ' ');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInput = event => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const string = form.elements.search.value;
    query(string);
    setValue('');
    if (searchParams) setSearchParams({ query: string });
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className={css.search__form}>
        <input
          className={css.search__input}
          value={value}
          onChange={handleInput}
          name="search"
        />
        <button className={css.search__button} type="submit" disabled={!value}>
          Search
        </button>
      </form>
    </section>
  );
}
