import { ReactNode } from 'react';

export interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-3xl font-semibold text-gray-700">{title}</h1>
      <div className="flex flex-col gap-y-4">{children}</div>
    </div>
  );
};
