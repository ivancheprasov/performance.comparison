'use client';

import { useQuery } from '@tanstack/react-query';
import { List } from 'antd';
import Api from '../lib/api/api';
import Image from 'next/image';
import VirtualList from 'rc-virtual-list';
import avatarOne from '../images/avatar-1.png';
import avatarTwo from '../images/avatar-2.png';
import avatarThree from '../images/avatar-3.png';
import avatarFour from '../images/avatar-4.png';
import { User } from '../lib/types/user';
import Loader from "../components/loader/loader";

const AVATAR_ARRAY = [avatarOne, avatarTwo, avatarThree, avatarFour];

export default function Users() {
  const { data: users, isFetching } = useQuery({ queryKey: ['getUsers'], queryFn: Api.getUsers });

  if (isFetching || !users) return <Loader />

  return (
    <main>
      <List itemLayout="horizontal">
        <VirtualList data={users} height={500} itemHeight={50} itemKey="id">
          {(item: User) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Image src={AVATAR_ARRAY[item.avatarVersion]} width={32} height={32} alt="Avatar." />}
                title={item.name}
                description={item.job}
              />
            </List.Item>
          )}
        </VirtualList>
      </List>
    </main>
  );
}
