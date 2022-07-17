import { Header } from './components/header/header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/home';
import { Expenses } from './routes/expenses';
import { EXPENSES, HOME, STATS } from './libs/constants/routes';
import { Stats } from './routes/stats';

export function App() {
  return (
    <div className="h-full bg-gray-900/5">
      <Header />
      <div className="h-full space-y-4 px-4 pt-4">
        <main className="mx-auto h-full lg:max-w-2xl">
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={EXPENSES} element={<Expenses />} />
            <Route path={STATS} element={<Stats />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
