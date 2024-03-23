import Image from "next/image";
import GalleryPreview from "shared-module/public/images/gallery-preview.jpg";
import styles from "shared-module/src/components/gallery/gallery.module.scss";
import GalleryWrapper from "./gallery-wrapper";

export default function GalleryPageContent() {
  return (
    <main>
      <h1 className={styles.header}>Please, enjoy the gallery</h1>
      <div className={styles.galleryPreviewWrapper}>
        <Image
          src={GalleryPreview}
          alt="Gallery Preview."
          placeholder="blur"
          priority
        />
      </div>
      <GalleryWrapper />
    </main>
  )
}
