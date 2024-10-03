import toast from 'react-hot-toast';

import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const { target } = event;
    const { value } = target.elements.search;

    if (value.trim()) {
      onSubmit(value.trim());
      target.reset();
    } else {
      toast.error('Search input is empty!')
    }
  };

  return (
    <header className={css.header}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
