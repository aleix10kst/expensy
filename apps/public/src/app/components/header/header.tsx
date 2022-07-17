import { NavLink } from 'react-router-dom';
import { EXPENSES, HOME, STATS } from '../../libs/constants/routes';

const ROUTES = [
  { title: 'Home', href: HOME },
  { title: 'Despeses', href: EXPENSES },
  { title: 'Estadístiques', href: STATS },
];

export const Header = () => {
  return (
    <header className="border-b bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <a className="text-2xl font-bold">Expensy</a>
        <nav className="flex gap-x-6">
          {ROUTES.map((route) => (
            <NavLink
              to={route.href}
              key={route.href}
              className={({ isActive }) =>
                `${isActive ? 'font-bold' : 'font-normal'}`
              }
            >
              {route.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
