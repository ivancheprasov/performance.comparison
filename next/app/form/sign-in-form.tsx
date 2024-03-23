'use client';

import { useMutation } from '@tanstack/react-query';
import { Button, Card, Form, Input, notification } from 'antd';
import Api from 'shared-module/src/api/api';
import { REQUIRED_FIELD } from 'shared-module/src/constants/rule';
import { NotificationTypes } from 'shared-module/src/types/notification';
import { UserFormValues } from 'shared-module/src/types/user';
import { capitalizeFirstLetter } from 'shared-module/src/utils/string';
import styles from './sign-in-form.module.scss';

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
    <main>
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
    </main>
  );
}
