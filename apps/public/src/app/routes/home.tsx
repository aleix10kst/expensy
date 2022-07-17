import { DailyExpenses } from '../components/daily-expenses/daily-expenses';
import { PageLayout } from '../components/page-layout/page-layout';

const OverallStats = () => {
  return (
    <div className="flex flex-col justify-between gap-y-2 md:flex-row md:gap-x-4 md:gap-y-0">
      <div className="flex-1 rounded-lg border bg-white p-4 shadow-sm ring-gray-200">
        <p className="mb-1 text-xs text-gray-500">Global anual</p>
        <p className="text-2xl font-bold">30,000€</p>
      </div>
      <div className="flex-1 rounded-lg border bg-white p-4 shadow-sm ring-gray-200">
        <p className="mb-1 text-xs text-gray-500">Global mensual</p>
        <p className="text-2xl font-bold">2,234€</p>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <PageLayout title="Posició global">
      <OverallStats />
      <div className="flex-1">
        <DailyExpenses expenses={[]} />
      </div>
    </PageLayout>
  );
};
