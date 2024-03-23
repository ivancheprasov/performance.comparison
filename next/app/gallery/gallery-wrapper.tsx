'use client';

import { useQuery } from '@tanstack/react-query';
import ImageComponent from 'next/image';
import Api from 'shared-module/src/api/api';
import Gallery from 'shared-module/src/components/gallery';

export default function GalleryWrapper() {
  const { data, isFetching } = useQuery({ queryKey: ['getImages'], queryFn: Api.getImages });

  return <Gallery imageComponent={ImageComponent} data={data} isFetching={isFetching} />;
}
