'use client'

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import classNames from "classnames";
import styles from "./loader.module.scss";

interface LoaderProps {
  isRelative?: boolean;
}

export default function Loader({isRelative = false}: LoaderProps) {
  return <Spin className={classNames(styles.loader, !isRelative && styles.centered)} indicator={<LoadingOutlined />} />
}
