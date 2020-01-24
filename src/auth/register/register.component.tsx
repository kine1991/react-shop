import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { registerAsync, signUpWithGoogleAsync } from '../../redux/user/user.action';

const RegisterComponent = ({ isFetchingForBtn, registerUser, signUpWithGoogle }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    registerUser(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" ref={register} placeholder="Enter email" />
        {/* <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text> */}
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
      <Button block type="submit" variant="primary" disabled={isFetchingForBtn}>
        {isFetchingForBtn ? (
          <>
            <span className="mr-3">Register</span>
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
          </>
        ) : (
          <span>Register</span>
        )}
      </Button>
      <Button block onClick={signUpWithGoogle} type="button" variant="danger" disabled={isFetchingForBtn}>With Google</Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  isFetchingForBtn: state.user.isFetchingForBtn
});

const mapDispatchToProps = dispatch => ({
  registerUser: data => dispatch(registerAsync(data)),
  signUpWithGoogle: () => dispatch(signUpWithGoogleAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
