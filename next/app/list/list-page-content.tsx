'use client';

import { useQuery } from '@tanstack/react-query';
import ImageComponent from 'next/image';
import Api from 'shared-module/src/api/api';
import UserList from 'shared-module/src/components/user-list';

export default function ListPageContent() {
  const { data, isFetching } = useQuery({ queryKey: ['getUsers'], queryFn: Api.getUsers });

  return (
    <main>
      <UserList avatarComponent={ImageComponent} data={data} isFetching={isFetching} />
    </main>
  );
}
