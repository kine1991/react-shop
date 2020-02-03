import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Spinner from 'react-bootstrap/Spinner';
import { loginAsync, signUpWithGoogleAsync } from '../../redux/user/user.action';
import { Button, TextField } from '@material-ui/core';

const LoginComponent = ({ isFetchingForBtn, loginUser, signUpWithGoogle }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    loginUser(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField className="mb-3" fullWidth type="email" name="email" inputRef={register} label="Enter email" variant="outlined" />
      <TextField className="mb-3" fullWidth name="password" inputRef={register} type="password" label="Enter password" variant="outlined" />
      <Button className="mb-3" fullWidth color="primary" variant="contained" type="submit">
        Login
      </Button>
      <Button className="mb-3" fullWidth onClick={signUpWithGoogle} type="button" variant="outlined" color="secondary">
        With Google
      </Button>
    </form>
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
