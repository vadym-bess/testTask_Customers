import css from './modal.module.css';
import { DashboardIcon } from '../Images/dashboardIcon.jsx';
import { ProductIcon } from '../Images/productIcon.jsx';
import { CustomersIcon } from '../Images/customersIcon.jsx';
import { IncomeIcon } from '../Images/incomeIcon.jsx';
import { PromoteIcon } from 'components/Images/promoteIcon';
import { HelpIcon } from 'components/Images/helpIcon';

export const Modal = ({ active, setActive }) => {
  return (
    <div
      className={
        active ? css.modalOverlay + ' ' + css.active : css.modalOverlay
      }
      onClick={() => setActive(false)}
    >
      <div className={css.modalWindow} onClick={e => e.stopPropagation()}>
        <span className={css.modalCloseButton} onClick={() => setActive(false)}>
          Close
        </span>
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
      </div>
    </div>
  );
};
