import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Appbar from './../appbar';
import Navigation from './../navigation';
import Menu from './../menu';
import Cart from './../cart'

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0,
    },
    toolbar: theme.mixins.toolbar,
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            categories: [],
            cart: [],
        }
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.clear = this.clear.bind(this);
    }

    add(item) {
        let newCart = [];
        for (let index = 0; index < this.state.cart.length; index++) {

            const element = this.state.cart[index];
            if (element.name === item.name) {
                element.qty += 1;
                newCart.push(element);
            } else {
                newCart.push(element);
            }

            if (element.name !== item.name && index === this.state.cart.length - 1) {
                newCart.push({ name: item.name, qty: 1, price: item.price });
            }
        }


        if (this.state.cart.length === 0) {
            newCart.push({ name: item.name, qty: 1, price: item.price });
        }

        this.setState({ cart: newCart });
    };

    remove(item) {
        let newCart = [];
        for (let index = 0; index < this.state.cart.length; index++) {
            const element = this.state.cart[index];
            if (element.name === item.name && element.qty > 1) {
                element.qty -= 1;
                newCart.push(element);
            } else if (element.name !== item.name) {
                newCart.push(element);
            }

        }

        this.setState({ cart: newCart });
    };

    clear() {
        this.setState({ cart: [] });
    };

    componentDidMount() {

        var data = [{ "availabletime": "11:00-15:30", "category": "Chinese Combos", "description": "", "name": "Egg Chinese Combo", "price": 100, "vegflag": "nonveg" }, { "availabletime": "11:00-15:30", "category": "Chinese Combos", "description": "Chilli Garlic Chicken, Vegetable Fried Rice/ Noodles, Hong Kong Sauce", "name": "Chicken Chinese Combo", "price": 110, "vegflag": "nonveg" }, { "availabletime": "11:00-15:30", "category": "Chinese Combos", "description": "", "name": "Lebanese Falafal Pockets", "price": 120, "vegflag": "veg" }, { "availabletime": "11:00-15:30", "category": "Chinese Combos", "description": "", "name": "Lebanese Chicken Pockets", "price": 150, "vegflag": "nonveg" }, { "availabletime": "00:00-23:59", "category": "Chinese Starter", "description": "", "name": "Mexican Veg Nachos", "price": 120, "vegflag": "veg" }, { "availabletime": "00:00-23:59", "category": "Chinese Starter", "description": "", "name": "Mexican Non Veg Nachos", "price": 150, "vegflag": "nonveg" }, { "availabletime": "00:00-23:59", "category": "Chinese Starter", "description": "", "name": "Indonesian  Nasi Goreng Tofu", "price": 120, "vegflag": "veg" }, { "availabletime": "00:00-23:59", "category": "Chinese Starter", "description": "", "name": "Indonesian Nasi Goreng Chicken", "price": 150, "vegflag": "nonveg" }, { "availabletime": "12:00-16:00", "category": "Salads", "description": "", "name": "Veg Salad", "price": 80, "vegflag": "veg" }, { "availabletime": "12:00-16:00", "category": "Salads", "description": "", "name": "Non Veg Salad", "price": 100, "vegflag": "nonveg" }, { "availabletime": "10:00-20:00", "category": "Oriental", "description": "Chilli Garlic Chicken", "name": "Chicken Starter", "price": 75, "vegflag": "nonveg" }, { "availabletime": "10:00-20:00", "category": "Oriental", "description": "Chilli Garlic Potatoes", "name": "Veg Starter", "price": 55, "vegflag": "veg" }, { "availabletime": "10:00-20:00", "category": "Oriental", "description": "", "name": "Paneer Starter", "price": 65, "vegflag": "veg" }, { "availabletime": "11:00-15:30", "category": "Chinese Combos", "description": "Chilli Garlic Potatoes, Vegetable Fried Rice/ Noodles, Hong Kong Sauce", "name": "Veg Chinese Combo", "price": 80, "vegflag": "veg" }];

        this.setState({
            categories: data
                .map(value => value.category)
                .reduce((x, y) => x.includes(y) ? x : [...x, y], []),
            items: data
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Appbar />
                <Grid container >
                    <Grid item xs>
                        <Navigation categories={this.state.categories} />
                    </Grid>
                    <Grid item xs={6}>
                        <main className={classes.content}>
                            <div className={classes.toolbar} />
                            <Menu categories={this.state.categories} items={this.state.items} add={this.add} remove={this.remove} cart={this.state.cart} />
                        </main>
                    </Grid>
                    <Grid item xs>
                        <div className={classes.toolbar} />
                        <Cart cart={this.state.cart} clear={this.clear} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);