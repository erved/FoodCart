import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  paper: {
    margin: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
  const { classes, categories } = props;

  return (
    <div >
      <div className={classes.toolbar} />
      <Paper className={classes.paper} elevation={4}>
        <List component="nav">
          {categories.map(value => (
            <div key={value} href={`#${value}`} >
              <ListItem button >
                <ListItemText primary={value} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Paper>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);