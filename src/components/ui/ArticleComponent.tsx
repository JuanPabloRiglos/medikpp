/**
 * Componente articulo con bg claro, borde redondeado display en columna
 * y sombreado, el usado en el home.
 */

import { ReactNode } from 'react';

type H2ComponentProps = {
  children: ReactNode;
};

export function ArticleComponent({ children }: H2ComponentProps) {
  return (
    <article
      className="w-[90%] mx-auto bg-light/60 rounded-lg px-6 py-6 shadow-md  max-w-[600px] flex flex-col gap-4
                md:w-[50%]"
    >
      {children}
    </article>
  );
}
