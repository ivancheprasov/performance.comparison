'use client';

import { Button, Card, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import { AppRoutes } from "../lib/types/routes";

interface FormValues {
  firstName: string;
  lastName: string;
  password: string;
}

export default function Page() {
  const router = useRouter();

  function handleSubmit({ firstName, lastName }: FormValues) {
    sessionStorage.setItem('username', `${firstName} ${lastName}`);
    router.push(AppRoutes.Table);
  }

  return (
    <Card title="Please, specify the user name">
      <Form initialValues={{ username: '' }} name="welcomeForm" onFinish={handleSubmit}>
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, whitespace: true, message: 'This field is required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, whitespace: true, message: 'This field is required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, whitespace: true, message: 'This field is required' }]}
        >
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Proceed
        </Button>
      </Form>
    </Card>
  );
}
