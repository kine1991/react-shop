import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import SpinnerComponent from '../helper/component/spinner/spinner.component';
import EditProfileComponent from './edit-profile/edit-profile.component';
import EditAccountComponent from './edit-account/edit-account.component';
import { Styles } from './settings.styles';

const SettingsComponent = props => {
  const { match, currentUser } = props;

  if (!currentUser) {
    return <SpinnerComponent />;
  }
  return (
    <Styles>
      <div className="settings">
        <div className="settings__content">
          <Switch>
            <Route path={`${match.path}`} exact component={() => <h1>Hello everyone</h1>} />
            <Route path={`${match.path}/edit-profile`} exact component={EditProfileComponent} />
            <Route path={`${match.path}/edit-account`} component={EditAccountComponent} />
          </Switch>
        </div>
        <div className="settings__sidebar">
          <Card>
            <CardActionArea className="user-info-large">
              {!!currentUser.imageUrl && <CardMedia style={{ height: 0, paddingTop: '56.25%' }} image={currentUser.imageUrl} title="Contemplative Reptile" />}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {currentUser.fullName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {currentUser.email}
                </Typography>
              </CardContent>
            </CardActionArea>

            <ListItem className="user-info-small">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={currentUser.imageUrl} />
              </ListItemAvatar>
              <ListItemText style={{ display: 'inline' }} primary={currentUser.email} secondary={currentUser.fullName} />
            </ListItem>

            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button component={NavLink} to="/settings" exact>
                <ListItemText primary="Home" />
              </ListItem>
              <Divider />
              <ListItem button component={NavLink} to="/settings/edit-profile">
                <ListItemText primary="Edit Profile" />
              </ListItem>
            </List>
          </Card>
        </div>
      </div>
    </Styles>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(SettingsComponent);
