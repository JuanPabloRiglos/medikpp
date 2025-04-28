import { ReactNode } from 'react';

type H2ComponentProps = {
  children: ReactNode;
};

export function H2Component({ children }: H2ComponentProps) {
  return (
    <h2 className="text-2xl md:text-3xl font-extrabold text-dark tracking-tight leading-tight w-full text-start">
      {children}
    </h2>
  );
}
