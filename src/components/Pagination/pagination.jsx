import css from './pagination.module.css';

export const Pagination = () => {
  return (
    <>
      <div className={css.mainPaginationThumb}>
        <p className={css.footerText}>Showing data 1 to 8 of 256K entries</p>
        <div className={css.mainPaginationThumb_items}>
          <div className={css.arrowLeft}></div>
        </div>
        <div className={css.mainPaginationThumb_items}>1</div>
        <div className={css.mainPaginationThumb_items}>2</div>
        <div className={css.mainPaginationThumb_items}>3</div>
        <div className={css.mainPaginationThumb_items}>4</div>
        <div>...</div>
        <div className={css.mainPaginationThumb_items}>40</div>
        <div className={css.mainPaginationThumb_items}>
          <div className={css.arrowRight}></div>
        </div>
      </div>
    </>
  );
};
