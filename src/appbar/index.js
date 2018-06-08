import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor:'#FFFF00'
    },
    toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
    const { classes } = props;

    return (
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
                <Typography variant="title" style={{color:'#FF0000'}} noWrap>
                    Udupi Sagar
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);