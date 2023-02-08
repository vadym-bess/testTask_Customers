import css from './inputArea.module.css';
import { SearchIcon } from 'components/Images/searchIcon';

export const InputArea = () => {
  return (
    <div className={css.inputArea} value="Search">
      <SearchIcon />
      <span className={css.searchInputText}>Search</span>
    </div>
  );
};
