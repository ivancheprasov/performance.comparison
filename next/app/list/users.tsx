'use client';

import { useQuery } from '@tanstack/react-query';
import { List } from 'antd';
import Image from 'next/image';
import VirtualList from 'rc-virtual-list';
import avatarOne from '../../public/images/avatar-1.png';
import avatarTwo from '../../public/images/avatar-2.png';
import avatarThree from '../../public/images/avatar-3.png';
import avatarFour from '../../public/images/avatar-4.png';
import Loader from "../components/loader/loader";
import Api from '../lib/api/api';
import { User } from '../lib/types/user';
import styles from "./users.module.scss";

const AVATAR_ARRAY = [avatarOne, avatarTwo, avatarThree, avatarFour];

export default function Users() {
  const { data: users, isFetching } = useQuery({ queryKey: ['getUsers'], queryFn: Api.getUsers });

  if (isFetching || !users) return <Loader />

  return (
    <main>
      <List className={styles.list} header={<h1>Users</h1>}>
        <VirtualList data={users} height={600} itemKey='id' itemHeight={60}>
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
