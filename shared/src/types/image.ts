export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}
export interface StaticRequire {
  default: StaticImageData;
}
export type StaticImport = StaticRequire | StaticImageData;

export interface Image {
  id: string;
  url: string;
}

export interface ImageProps {
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  placeholder?: 'blur' | 'empty' | `data:image/${string}`;
  blurDataURL?: string;
}
