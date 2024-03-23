'use client';

import { Card, List } from 'antd';
import Loader from '../../components/loader';
import { IMAGE_HEIGHT, IMAGE_WIDTH, placeholderImageBase64 } from '../../constants/image';
import { Image } from '../../types/image';
import styles from './gallery.module.scss';
import { ImageComponent } from '../../types/image';

interface GalleryProps {
  imageComponent: ImageComponent;
  data?: Image[];
  isFetching: boolean;
}

export default function Gallery({ data: images, imageComponent: ImageComponent, isFetching }: GalleryProps) {
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
              placeholder="blur"
              blurDataURL={placeholderImageBase64}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
