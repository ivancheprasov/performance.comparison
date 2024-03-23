import { ComponentType } from "react";
import { Avatar, AvatarProps, Image as AntdImage, ImageProps } from "antd";

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

interface StaticRequire {
  default: StaticImageData;
}

type StaticImport = StaticRequire | StaticImageData;

interface NextImageProps {
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  placeholder?: 'blur' | 'empty' | `data:image/${string}`;
  blurDataURL?: string;
}

export type ImageComponentProps = Pick<NextImageProps, 'placeholder' | 'blurDataURL' | 'width' | 'height'>;

export type ImageComponent = ComponentType<NextImageProps> | typeof Avatar | typeof AntdImage;

export interface Image {
  id: string;
  url: string;
}
