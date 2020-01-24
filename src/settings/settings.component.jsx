import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// import ProfileComponent from './profile/profile.component';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SpinnerComponent from '../helper/component/spinner/spinner.component';
import EditProfileComponent from './edit-profile/edit-profile.component';
import EditAccountComponent from './edit-account/edit-account.component';
// import ListGroup from 'react-bootstrap/ListGroup';

export const Styles = styled.div`
  .settings {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    /* @media (max-width: 576px) {
      flex-direction: column;
    } */

    &__content {
      flex: 1;
      /* margin: 3rem; */
      @media (max-width: 768px) {
        order: 2;
      }
    }

    &__sidebar {
      flex-basis: 300px;
      margin-left: 3rem;
      @media (max-width: 768px) {
        margin-left: 0;
        flex: 1;
        order: 1;
      }
      @media (max-width: 768px) {
        margin-bottom: 3rem;
      }
      /* background: greenyellow; */
    }
  }

  .user-info-large {
    display: block;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .user-info-small {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

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
              {/* <Divider />
              <ListItem button component={NavLink} to="/settings/edit-account">
                <ListItemText primary="Edit Account" />
              </ListItem> */}
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
