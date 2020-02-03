import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Spinner from 'react-bootstrap/Spinner';
import { registerAsync, signUpWithGoogleAsync } from '../../redux/user/user.action';
import { TextField, Button } from '@material-ui/core';

const RegisterComponent = ({ registerUser, signUpWithGoogle }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField className="mb-3" fullWidth type="email" name="email" inputRef={register} label="Enter email" variant="outlined" />
      <TextField className="mb-3" fullWidth type="text" name="fullName" inputRef={register} label="Enter Full Name" variant="outlined" />
      <TextField className="mb-3" fullWidth type="text" name="imageUrl" inputRef={register} label="Enter Image Url" variant="outlined" />
      <TextField className="mb-3" fullWidth name="password" inputRef={register} type="password" label="Enter password" variant="outlined" />
      <Button className="mb-3" fullWidth color="primary" variant="contained" type="submit">
        Register
      </Button>
      <Button className="mb-3" fullWidth onClick={signUpWithGoogle} type="button" variant="outlined" color="secondary">
        With Google
      </Button>
    </form>
  );
};

// const mapStateToProps = state => ({
//   isFetchingForBtn: state.user.isFetchingForBtn
// });

const mapDispatchToProps = dispatch => ({
  registerUser: data => dispatch(registerAsync(data)),
  signUpWithGoogle: () => dispatch(signUpWithGoogleAsync())
});

export default connect(null, mapDispatchToProps)(RegisterComponent);
