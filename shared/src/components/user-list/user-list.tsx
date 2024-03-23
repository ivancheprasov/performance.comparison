'use client';

import { List } from 'antd';
import VirtualList from 'rc-virtual-list';
import Loader from '../../components/loader';
import { User } from '../../types/user';
import avatarOne from '../../../public/images/avatar-1.png';
import avatarTwo from '../../../public/images/avatar-2.png';
import avatarThree from '../../../public/images/avatar-3.png';
import avatarFour from '../../../public/images/avatar-4.png';
import styles from './user-list.module.scss';
import { ImageComponent } from '../../types/image';

const AVATAR_ARRAY = [avatarOne, avatarTwo, avatarThree, avatarFour];

interface UserListProps {
  avatarComponent: ImageComponent;
  data?: User[];
  isFetching: boolean;
}

export default function UserList({ data: users, avatarComponent: AvatarComponent, isFetching }: UserListProps) {
  if (!users) return <Loader />;

  return (
    <List className={styles.list} header={<h1>Users</h1>} loading={isFetching}>
      <VirtualList data={users} height={600} itemKey="id" itemHeight={60}>
        {(item: User) => (
          <List.Item>
            <List.Item.Meta
              avatar={<AvatarComponent src={AVATAR_ARRAY[item.avatarVersion]} width={32} height={32} alt="Avatar." />}
              title={item.name}
              description={item.job}
            />
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
}
