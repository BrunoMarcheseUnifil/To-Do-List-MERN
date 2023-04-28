import React from 'react';
import { Form, Input, Button } from 'antd';
import './cadastro.css'

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};

const { TextArea } = Input;

const Cadastro = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="cadastro-form-container">
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      {...layout}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Descrição"
        name="description"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <TextArea rows={5} />
      </Form.Item>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" style={{ height: '40px', width: '100px'}}>
              Cadastrar
            </Button>
          </Form.Item>
        </div>
    </Form>
    </div>
  );
};

export default Cadastro;
