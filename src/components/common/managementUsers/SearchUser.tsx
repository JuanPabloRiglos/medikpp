import { useState } from 'react';

import { SearchIcon } from '../../../assets/icons/layoutIcons/SearchIcon';
import { UserData } from '../../../types/user';

//hook

interface SearchProps {
  styles?: string;
  searchUserFn: (
    query: string
  ) => Promise<{ searchResult: UserData | null; error: string | null }>;
  error?: string | null;
}

export default function SearchUser({ styles, searchUserFn }: SearchProps) {
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query) {
      alert('Debe ingresar un apellido o correo para buscar');
      return;
    }
    const { error } = await searchUserFn(query);
    if (error) {
      setError(error);
      alert(error); // Muestra el error si ocurre
    }
  };

  return (
    <section className={`${styles}`}>
      <span>Para Editar : </span>
      <div className="w-full flex items-center  gap-1" aria-labelledby="query">
        <div className="w-10/12 border-2 flex flex-nowrap border-cyan-700 justify-between z-0 rounded-[5px]  py-4 px-4 bg-boxBackground border-button text-effects">
          <input
            className={``}
            type="text"
            id="query"
            placeholder="Busque por apellido o Correo del usuario"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <figure
          className="w-2/12 p-3 rounded-lg border-2 hover:shadow-xl"
          onClick={handleSearch}
        >
          <SearchIcon styles="size-7 hover:text-blue-700" />
        </figure>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </section>
  );
}
