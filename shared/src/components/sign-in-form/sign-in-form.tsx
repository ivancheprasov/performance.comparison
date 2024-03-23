'use client';

import { Button, Card, Form, Input } from 'antd';
import { REQUIRED_FIELD } from '../../constants/rule';
import { UserFormValues } from '../../types/user';
import styles from './sign-in-form.module.scss';

const INITIAL_FORM_VALUE: UserFormValues = {
  firstName: '',
  lastName: '',
  password: '',
};

interface SignInFormProps {
  onSubmit: (values: UserFormValues) => void;
  isSubmitting: boolean;
}

export default function SignInForm({ onSubmit, isSubmitting }: SignInFormProps) {
  return (
    <Card title="User data" className={styles.card}>
      <Form initialValues={INITIAL_FORM_VALUE} disabled={isSubmitting} name="welcomeForm" onFinish={onSubmit}>
        <Form.Item name="firstName" label="First Name" rules={[REQUIRED_FIELD]}>
          <Input />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name" rules={[REQUIRED_FIELD]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[REQUIRED_FIELD]}>
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={isSubmitting}>
          Proceed
        </Button>
      </Form>
    </Card>
  );
}
