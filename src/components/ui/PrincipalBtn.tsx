import { ReactNode } from 'react';

type H2ComponentProps = {
  children: ReactNode;
  btnType?: 'submit' | 'reset' | 'button';
};

export function PrincipalBtn({ children, btnType }: H2ComponentProps) {
  return (
    <button
      type={btnType ? btnType : 'button'}
      className="p-2 w-full text-lg px-4 py-2 flex justify-center items-center rounded-lg font-semibold text-light border-2 border-accent bg-accent hover:bg-primary  hover:text-bold hover:border-contrast transition-all duration-175"
    >
      {children}
    </button>
  );
}
