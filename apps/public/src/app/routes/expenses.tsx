import exp from 'constants';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DailyExpenses } from '../components/daily-expenses/daily-expenses';
import { PageLayout } from '../components/page-layout/page-layout';
import { Expense } from '../libs/types/expense';

interface AddExpenseFormData {
  name: string;
  description: string;
  amount: number;
  date: Date;
}

interface AddExpenseFormProps {
  submitForm: (data: AddExpenseFormData) => void;
  closeForm: () => void;
}

const AddExpenseForm = ({ submitForm, closeForm }: AddExpenseFormProps) => {
  const { register, handleSubmit } = useForm<AddExpenseFormData>();
  return (
    <form
      className="space-y-3 rounded-lg border bg-white p-4"
      onSubmit={handleSubmit(submitForm)}
    >
      <div>
        <label className="text-gray-700">Despesa</label>
        <input
          type="text"
          className="mt-1 block w-full"
          {...register('name', { required: true })}
        />
      </div>
      <div>
        <label className="text-gray-700">Descripció</label>
        <textarea
          className="mt-1 block w-full"
          rows={3}
          {...register('description', { required: false })}
        />
      </div>
      <div>
        <label className="text-gray-700">Quantitat</label>
        <input
          type="number"
          step="any"
          className="mt-1 block w-full"
          {...register('amount', { required: true, valueAsNumber: true })}
        />
      </div>
      <div>
        <label className="text-gray-700">Data</label>
        <input
          type="date"
          className="form-input mt-1 block w-full"
          {...register('date', { required: true, valueAsDate: true })}
        />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={closeForm}
          className="float-right rounded-lg border-2 border-red-600 bg-red-400 p-2 font-bold text-white transition-all duration-100 ease-in hover:-translate-y-0.5 hover:bg-red-600"
        >
          Cancel·la
        </button>
        <button className="float-right rounded-lg border border-cyan-400 bg-cyan-400 p-2 font-bold text-white transition-all duration-100 ease-in hover:-translate-y-0.5 hover:bg-cyan-500">
          Afegeix
        </button>
      </div>
    </form>
  );
};

export const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [showForm, setShowForm] = useState(false);
  const onClickAddExpense = () => {
    setShowForm(!showForm);
  };

  const onSubmitForm = (data: AddExpenseFormData) => {
    console.log(data);
    setExpenses([
      ...expenses,
      { ...data, id: new Date().getTime().toString() },
    ]);
    setShowForm(false);
  };
  return (
    <PageLayout title="Despeses">
      <div className="flex">
        <button
          className="rounded-lg border border-cyan-400 bg-cyan-400 p-2 font-bold text-white transition-all duration-100 ease-in hover:-translate-y-0.5 hover:bg-cyan-500"
          onClick={onClickAddExpense}
        >
          Afegeix una despesa
        </button>
      </div>
      {showForm && (
        <AddExpenseForm
          submitForm={onSubmitForm}
          closeForm={() => setShowForm(false)}
        />
      )}
      <div>Llista de despeses totals d'avui</div>
      <DailyExpenses expenses={expenses} />
    </PageLayout>
  );
};
