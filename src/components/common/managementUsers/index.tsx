//store
import useUserStore from '../../../store/userStore';
//components
import UserManagamentFomr from './UserManagementForm';
import SearchUser from './SearchUser';
//types
// import { UserData } from '../../../types/user';
//hooks
import { useManagementUser } from '../../../hooks/useManagementUser';

// import { useEffect, useState } from 'react';
// import { UserData } from '../../../types/user';

interface ComponentProps {
  styles?: string;
}

export function ManagementUsers({ styles }: ComponentProps) {
  const { userLogged } = useUserStore();
  const { searchResult, searchUserFn, addUserFn } = useManagementUser();

  return (
    <section className={`${styles} `}>
      <h3 className="w-[90%] pl-4">Dar de Alta o Editar un Usuario</h3>

      <SearchUser
        styles="w-[90%] flex flex-col items-start gap-2 border-2 rounded-xl p-4"
        searchUserFn={searchUserFn}
      />

      {userLogged && (
        <UserManagamentFomr
          styles="w-[90%] mx-auto"
          userLogged={userLogged}
          addUserFn={addUserFn}
          userToEdit={searchResult || undefined}
        />
      )}
    </section>
  );
}
