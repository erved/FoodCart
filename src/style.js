const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    paper: {
        margin: '3%',
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    },
    paperone: {
        marginLeft: '1%',
        width: '10%',
        height: '30%'
    },
    papertwo: {
        marginLeft: '1%',
        marginRight: '1%',
        width: '60%',
        height: '100%'
    },
    paperthree: {
        width: '25%',
        height: '70%'
    },
    redAvatar: {
        borderRadius: 0,
        margin: 5,
        color: '#fff',
        backgroundColor: '#FF0000',
    },
    greenAvatar: {
        borderRadius: 0,
        margin: 5,
        color: '#fff',
        backgroundColor: '#008000',
    },
    button: {
        border: '2px solid black'
    },
    delete: {
        marginLeft: '70%'
    },
    appbar: {
        backgroundColor: 'yellow'
    }
});

export default styles;