import React from 'react';
import { useForm } from 'react-hook-form';

import { auth, firestore } from '../../firebase/firebase.utils';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RegisterComponent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log('data');
    console.log(data);

    // auth.createUserWithEmailAndPassword()
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" ref={register} placeholder="Enter email" />
        <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Full Name</Form.Label>
        <Form.Control name="fullName" ref={register} type="text" placeholder="Full Name" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Image URL</Form.Label>
        <Form.Control name="imageUrl" ref={register} type="text" placeholder="Image URL" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" ref={register} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RegisterComponent;
