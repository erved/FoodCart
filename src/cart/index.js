import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    paper: {
        margin: theme.spacing.unit * 3,
    },
});

class MenuAppBar extends React.Component {
    state = {

    };


    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    render() {
        const { classes, cart, clear } = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={4}>
                    <AppBar position="static" style={{ backgroundColor: '#FFFF00' }}>
                        <Toolbar>
                            <Typography variant="title" style={{ color: '#FF0000' }} className={classes.flex}>
                                Title
                            </Typography>
                            <div>
                                <IconButton
                                    onClick={clear}
                                    style={{ color: '#FF0000' }}
                                >
                                    clear
                                </IconButton>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Table className={classes.table}>
                        <TableBody>
                            {cart.map(validitem => (
                                <TableRow key={validitem.name}>
                                    <TableCell component="th" scope="row">
                                        {validitem.name}
                                    </TableCell>
                                    <TableCell padding="none">X {validitem.qty}</TableCell>
                                    <TableCell padding="none" >₹ {validitem.price * validitem.qty}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    TOTAL  : ₹ {cart.reduce((total = 0, item) => Number(total) + Number(item.price) * item.qty, [])}
                    <Button variant="raised" style={{ backgroundColor:'#FFFF00', color: '#FF0000' }} fullWidth component="span">
                        Checkout
                    </Button>
                </Paper>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
