'use client';

import { useQuery } from '@tanstack/react-query';
import ImageComponent from 'next/image';
import Api from 'shared-module/src/api/api';
import Gallery from 'shared-module/src/components/gallery';
import { IMAGE_HEIGHT, IMAGE_WIDTH, placeholderImageBase64 } from "shared-module/src/constants/image";

export default function GalleryWrapper() {
  const { data, isFetching } = useQuery({ queryKey: ['getPersistentImages'], queryFn: Api.getPersistentImages });

  return (
    <Gallery
      imageComponent={ImageComponent}
      data={data}
      isFetching={isFetching}
      imageComponentProps={{
        placeholder: 'blur',
        blurDataURL: placeholderImageBase64,
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT
      }}
    />
  );
}
