'use client'

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import styles from "./loader.module.scss";

export default function Loader() {
  return <Spin className={styles.loader} indicator={<LoadingOutlined />} />
}
