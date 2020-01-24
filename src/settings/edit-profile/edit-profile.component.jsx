import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EditProfileComponent = ({ currentUser }) => {
  console.log('currentUser');
  console.log(currentUser);
  return (
    <div className="p-3">
      <h1>EditProfileComponent</h1>
      <TextField id="outlined-search" value={currentUser.email} className="mb-3" fullWidth label="Search field" type="search" variant="outlined" />
      <TextField id="outlined-helperText" className="mb-3" fullWidth label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="outlined" />
      <Button fullWidth variant="contained" className="mb-3">Change</Button>
      <Button fullWidth variant="contained" color="primary">Change</Button>
    </div>
  );
};

export default EditProfileComponent;
