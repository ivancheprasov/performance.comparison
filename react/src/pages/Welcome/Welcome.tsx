'use client';

import { Button, Card, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "../../constants/routes";

interface FormValues {
  username: string;
}

export default function Welcome() {
  const navigate = useNavigate();

  function handleSubmit({ username }: FormValues) {
    sessionStorage.setItem('username', username);
    navigate(ROUTES.RESERVATIONS);
  }

  return (
    <Card title="Please, specify the user name">
      <Form initialValues={{ username: '' }} name="welcomeForm" onFinish={handleSubmit}>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, whitespace: true, message: 'This field is required' }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Proceed
        </Button>
      </Form>
    </Card>
  );
}
