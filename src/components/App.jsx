import { React } from 'react';
import { Dashboard } from './Dashboard/dashboard';
import { Customers } from './Customers/customers';
// import { Pagination } from './Pagination/pagination';
import css from './Dashboard/dashboard.module.css';
import { CustomersHeading } from './CustomersHeading/customersHeading';

export const App = () => {
  return (
    <div className={css.mainLayout}>
      <Dashboard />
      <div className={css.customersThumb}>
        <CustomersHeading />

        <div className={css.innerCustomersThumb}>
          <Customers />
        </div>
      </div>

      {/* <Pagination /> */}
    </div>
  );
};
