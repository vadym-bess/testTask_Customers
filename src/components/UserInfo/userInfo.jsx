import css from './userInfo.module.css';

export const UserImage = () => {
  return (
    <div className={css.userInfo}>
      <div className={css.userPhoto}></div>
      <div>
        <p className={css.name}>Evano</p>
        <p className={css.position}>Project Manager</p>
      </div>
    </div>
  );
};
