'use client';

import { Button, Card, Form, Input, notification } from 'antd';
import { REQUIRED_FIELD } from '../lib/constants/rule';
import styles from './sign-in-form.module.scss';
import { useMutation } from '@tanstack/react-query';
import Api from '../lib/api/api';
import { UserFormValues } from '../lib/types/user';
import { NotificationTypes } from '../lib/types/notification';
import { capitalizeFirstLetter } from '../lib/utils/string';

const INITIAL_FORM_VALUE: UserFormValues = {
  firstName: '',
  lastName: '',
  password: '',
};

export default function SignInForm() {
  const [api, contextHolder] = notification.useNotification();

  function openNotification(type: NotificationTypes) {
    api[type]({ message: capitalizeFirstLetter(type) });
  }

  const { mutate: signIn, isPending: isSigningIn } = useMutation({
    mutationKey: ['signIn'],
    mutationFn: Api.signIn,
    onSuccess: () => openNotification(NotificationTypes.Success),
    onError: () => openNotification(NotificationTypes.Error),
  });

  function handleSubmit(values: UserFormValues) {
    signIn(values);
  }

  return (
    <>
      {contextHolder}
      <Card title="User data" className={styles.card}>
        <Form initialValues={INITIAL_FORM_VALUE} disabled={isSigningIn} name="welcomeForm" onFinish={handleSubmit}>
          <Form.Item name="firstName" label="First Name" rules={[REQUIRED_FIELD]}>
            <Input />
          </Form.Item>
          <Form.Item name="lastName" label="Last Name" rules={[REQUIRED_FIELD]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[REQUIRED_FIELD]}>
            <Input.Password />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={isSigningIn}>
            Proceed
          </Button>
        </Form>
      </Card>
    </>
  );
}
