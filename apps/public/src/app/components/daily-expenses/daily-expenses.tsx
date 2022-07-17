import { Expense } from '../../libs/types/expense';
import { capitalizeString } from '../../libs/utils/string-utils';

export interface DailyExpensesProps {
  expenseDay?: Date;
  expenses: Expense[];
}

export const DailyExpenses = ({
  expenses,
  expenseDay = new Date(),
}: DailyExpensesProps) => {
  const totalAmount = expenses.reduce((acc, { amount }) => (acc += amount), 0);
  return (
    <div className="mx-auto flex w-full flex-col space-y-4 divide-y-2 divide-gray-100 rounded-xl border bg-white p-4 font-mono shadow-sm ring-gray-200 lg:max-w-2xl">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">Despeses</h1>
        <h2 className="text-lg text-gray-300">
          {capitalizeString(
            new Intl.DateTimeFormat('ca-ES', { dateStyle: 'full' }).format(
              expenseDay
            )
          )}
        </h2>
      </header>
      <div className="space-y-2 pt-4">
        {expenses.length ? (
          expenses.map((expense) => (
            <div key={expense.id} className="flex items-center justify-between">
              <div className="flex flex-col justify-center md:flex-row md:items-center">
                <p className="mr-2">{expense.name}</p>
                <p className="mr-auto text-sm font-light text-gray-400">
                  {expense.description}
                </p>
              </div>
              <p className="">{expense.amount}€</p>
            </div>
          ))
        ) : (
          <p>No tens cap despesa registrada aquest dia.</p>
        )}
      </div>
      <div className="flex justify-between pt-4">
        <p className="font-bold">Total</p>
        <p className="font-bold">{`${totalAmount}€`}</p>
      </div>
    </div>
  );
};
