'use client';

import { Button, Card, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';

interface FormValues {
  username: string;
}

export default function Page() {
  const router = useRouter();

  function handleSubmit({ username }: FormValues) {
    sessionStorage.setItem('username', username);
    router.push('/main');
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
