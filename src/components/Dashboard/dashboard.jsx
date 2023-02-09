import css from './dashboard.module.css';
import { MainLogo } from '../Images/mainLogo.jsx';
import { DashboardIcon } from '../Images/dashboardIcon.jsx';
import { ProductIcon } from '../Images/productIcon.jsx';
import { CustomersIcon } from '../Images/customersIcon.jsx';
import { IncomeIcon } from '../Images/incomeIcon.jsx';
import { PromoteIcon } from 'components/Images/promoteIcon';
import { HelpIcon } from 'components/Images/helpIcon';
import { UserImage } from 'components/UserInfo/userInfo';

export const Dashboard = () => {
  return (
    <div className={css.layout}>
      <div className={css.dashboardThumb}>
        <MainLogo />
        <h1 className={css.mainHeading}>
          Dashboard<span className={css.versionInfo}>v.01</span>
          <div className={css.burgerMenuThumb}>
            <div className={css.burgerMenuThumb__item}></div>
            <div className={css.burgerMenuThumb__item}></div>
            <div className={css.burgerMenuThumb__item}></div>
          </div>
        </h1>
      </div>
      <ul className={css.buttonsList}>
        <li className={css.buttonsList_item}>
          <DashboardIcon />
          <span className={css.link}>Dashboard</span>
        </li>
        <li className={css.buttonsList_item}>
          <ProductIcon className={css.productIcon} />
          <span className={css.link}>Product</span>
        </li>
        <li className={css.buttonsList_item}>
          <CustomersIcon />
          <span className={css.link}>Customers</span>
        </li>
        <li className={css.buttonsList_item}>
          <IncomeIcon />
          <span className={css.link}>Income</span>
        </li>
        <li className={css.buttonsList_item}>
          <PromoteIcon />
          <span className={css.link}>Promote</span>
        </li>
        <li className={css.buttonsList_item}>
          <HelpIcon />
          <span className={css.link}>Help</span>
        </li>
      </ul>
      <UserImage />
    </div>
  );
};
