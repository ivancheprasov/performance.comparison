'use client';

import { Card, List } from 'antd';
import Loader from '../../components/loader';
import { Image, ImageComponentProps } from '../../types/image';
import styles from './gallery.module.scss';
import { ImageComponent } from '../../types/image';

interface GalleryProps {
  imageComponent: ImageComponent;
  imageComponentProps?: ImageComponentProps;
  data?: Image[];
  isFetching: boolean;
}

export default function Gallery({
  data: images,
  imageComponent: ImageComponent,
  isFetching,
  imageComponentProps = {},
}: GalleryProps) {
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
              alt={`Picture-${index + 1}.`}
              {...imageComponentProps}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
