'use client'

import { Image } from "antd";
import GalleryPreview from "shared-module/public/images/gallery-preview.jpg";
import styles from "shared-module/src/components/gallery/gallery.module.scss";
import { useQuery } from "@tanstack/react-query";
import Api from "shared-module/src/api/api";
import Gallery from "shared-module/src/components/gallery";

export default function GalleryPageContent() {
  const { data, isFetching } = useQuery({ queryKey: ['getImages'], queryFn: Api.getImages });

  return (
    <main>
      <h1 className={styles.header}>Please, enjoy the gallery</h1>
      <div className={styles.galleryPreviewWrapper}>
        <Image
          src={GalleryPreview}
          alt="Gallery Preview."
        />
      </div>
      <Gallery imageComponent={Image} data={data} isFetching={isFetching} />
    </main>
  )
}
