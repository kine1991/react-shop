import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import { editProfileAcync } from '../../redux/user/user.action';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EditProfileComponent = ({ currentUser, editProfile }) => {
  const { register, handleSubmit, setValue } = useForm();
  React.useEffect(() => {
    setValue('fullName', currentUser.fullName);
    setValue('imageUrl', currentUser.imageUrl);
  }, [currentUser, setValue]);

  const onSubmit = data => {
    editProfile({ ...data, userId: currentUser.id });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>EditProfileComponent</h1>
      <TextField inputRef={register} name="fullName" className="mb-3" fullWidth label="Enter fullName" type="search" variant="outlined" />
      <TextField inputRef={register} name="imageUrl" className="mb-3" fullWidth label="Enter imageUrl" helperText="Some important text" variant="outlined" />
      <Button type="submit" fullWidth variant="contained" className="mb-3">
        Change
      </Button>
      <Button fullWidth type="button" variant="contained" color="primary">
        Change
      </Button>
    </form>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  editProfile: data => dispatch(editProfileAcync(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileComponent);
