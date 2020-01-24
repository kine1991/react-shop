import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { loginAsync, signUpWithGoogleAsync } from '../../redux/user/user.action';

const LoginComponent = ({ isFetchingForBtn, loginUser, signUpWithGoogle }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    loginUser(data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" ref={register} placeholder="Enter email" />
        {/* <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" ref={register} type="password" placeholder="Password" />
      </Form.Group>
      <Button block type="submit" variant="primary" disabled={isFetchingForBtn}>
        {isFetchingForBtn ? (
          <>
            <span className="mr-3">Login</span>
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
          </>
        ) : (
          <span>Login</span>
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
  loginUser: data => dispatch(loginAsync(data)),
  signUpWithGoogle: () => dispatch(signUpWithGoogleAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
