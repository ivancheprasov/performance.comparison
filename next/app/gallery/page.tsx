import Image from "next/image";
import GalleryPreview from "../../public/images/gallery-preview.jpg";
import NavigationMenu from "../components/navigation-menu/navigation-menu";
import HydratedGallery from './hydrated-gallery';
import styles from "./gallery.module.scss";

export default function Page() {
  return (
    <>
      <NavigationMenu />
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
        <HydratedGallery />
      </main>
    </>
  );
}
