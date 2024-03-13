'use client'

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import styles from "./loader.module.scss";
import classNames from "classnames";

interface LoaderProps {
  isRelative?: boolean;
}

export default function Loader({isRelative = false}: LoaderProps) {
  return <Spin className={classNames(styles.loader, !isRelative && styles.centered)} indicator={<LoadingOutlined />} />
}
