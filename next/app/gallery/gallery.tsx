'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, List } from 'antd';
import Loader from '../components/loader/loader';
import Api from '../lib/api/api';
import styles from './gallery.module.scss';
import ImageComponent from 'next/image';
import { Image } from '../lib/types/image';
import { IMAGE_HEIGHT, IMAGE_WIDTH } from '../lib/constants/image';

export default function Gallery() {
  const { data: images, isFetching } = useQuery({ queryKey: ['getImages'], queryFn: Api.getImages });

  if (isFetching) return <Loader isRelative />;

  return (
    <Card title="Gallery" className={styles.card}>
      <List
        dataSource={images}
        className={styles.list}
        renderItem={(item: Image, index) => (
          <List.Item>
            <ImageComponent
              src={item.url}
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              alt={`Picture-${index + 1}.`}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
