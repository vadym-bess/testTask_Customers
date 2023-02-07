import css from './customers.module.css';
import classNames from 'classnames';

const customersList = [
  {
    id: 1,
    name: 'Jane Cooper',
    company: 'Microsoft',
    number: '(225) 5550-118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'active',
  },
  {
    id: 2,
    name: 'Floyd Miles',
    company: 'Yahoo',
    number: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: 'inactive',
  },
  {
    id: 3,
    name: 'Ronald Richards',
    company: 'Adobe',
    number: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: 'inactive',
  },
  {
    id: 4,
    name: 'Marvin McKinney',
    company: 'Tesla',
    number: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: 'active',
  },
  {
    id: 5,
    name: 'Jerome Bell',
    company: 'Google',
    number: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    status: 'active',
  },
  {
    id: 6,
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    number: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: 'active',
  },
  {
    id: 7,
    name: 'Jacob Jones',
    company: 'Yahoo',
    number: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: 'active',
  },
  {
    id: 8,
    name: 'Kristin Watson',
    company: 'Facebook',
    number: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: 'inactive',
  },
];

export const Customers = () => {
  return (
    <>
      <h2 className={css.secondaryHeading}>All Customers</h2>
      <p className={css.description}>Active Members</p>
      <tbody className={css.tableBody}>
        <tr className={css.tableHeadings}>
          <th>User Name</th>
          <th>Company</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Country</th>
          <th>Status</th>
        </tr>
        {customersList.map(item => {
          const { id, name, company, number, email, country, status } = item;
          return (
            <tr key={id} className={css.tableRaw}>
              <td className={css.tableData}>{name}</td>
              <td className={css.tableData}>{company}</td>
              <td className={css.tableData}>{number}</td>
              <td className={css.tableData}>{email}</td>
              <td className={css.tableData}>{country}</td>
              <td className={classNames(css.active, css.tableData)}>
                {status}
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};
