import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const styles = {
    flex: {
        flex: 1,
    },
    nonveg: {
        margin: 2,
        color: '#fff',
        backgroundColor: '#ff0000',
        borderRadius: 0
    },
    veg: {
        margin: 2,
        color: '#fff',
        backgroundColor: '#10ff00',
        borderRadius: 0
    },
    table: {
        minWidth: '100%',
    },
    menu: {
        height: '100vh',
        overflowY: 'scroll',
        left: 0,
        top: 0,
    },
};

function ButtonAppBar(props) {
    const { classes, items, categories, add, remove, cart } = props;
    return (
        <div className={classes.menu} onScroll>
            {categories.map(value => (
                <div key={value} id={value}>
                    <AppBar position="static" style={{ backgroundColor: '#FFFF00' }}>
                        <Toolbar>
                            <Typography variant="title" style={{ color: '#FF0000' }} className={classes.flex}>
                                {value}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Table className={classes.table}>
                        <TableBody>
                            {items.filter(item => (
                                item.category === value
                            )).map(validitem => (
                                <TableRow key={validitem.name}>
                                    <TableCell padding="none"><Avatar className={classes[validitem.vegflag]}></Avatar></TableCell>
                                    <TableCell component="th" scope="row" padding="none">
                                        {validitem.name}
                                    </TableCell>
                                    <TableCell padding="none">
                                        <Button style={{ border: '2px solid #555555' }} color="secondary" size="small" onClick={() => remove(validitem)}>
                                            -
                                    </Button>
                                    </TableCell>
                                    <TableCell padding="checkbox">{cart.filter(item => item.name === validitem.name).length > 0 && cart.filter(item => item.name === validitem.name)[0].qty}</TableCell>
                                    <TableCell padding="none">
                                        <Button style={{ border: '2px solid #555555'}} size="small" color="secondary" onClick={() => add(validitem)}>
                                            +
                                    </Button>
                                    </TableCell>
                                    <TableCell padding="none" >₹ {validitem.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            ))}
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);