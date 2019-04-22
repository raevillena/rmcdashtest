import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ViewListIcon from '@material-ui/icons/ViewList';
import { color1 } from '../constants/colors'


const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        secondary: {
            main: color1,
        },
    },
});

const styles = {
    card: {
        minWidth: 250,
        maxWidth: 300,
        minHeight: 250,
        maxHeight: 250,
        marginRight: '15px',
        marginBottom: '15px',
        boxShadow: '3px 4px 16px -8px rgba(0,0,0,0.75)'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};


export class SimpleCardOverview extends Component {



    componentDidMount() {
        console.log('Overview did mount')

    }

    render() {

        const { condenser, kettle, pump, heater } = this.props.payload;
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Card className={classes.card} >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" color="secondary">
                                <ViewListIcon />Overview
                        </Typography>
                            <div className="row">
                                <div className="col-6">
                                    <h5 className="text-left text-muted">Condenser</h5>
                                </div>
                                <div className="col-6">
                                    <h5 className="text-right">{`${condenser}°C`}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h5 className="text-left text-muted">Kettle</h5>
                                </div>
                                <div className="col-6">
                                    <h5 className="text-right">{`${kettle}°C`}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h5 className="text-left text-muted">Pump</h5>
                                </div>
                                <div className="col-6">
                                    <h5 className="text-right">{`${pump}%`}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h5 className="text-left text-muted">Heater</h5>
                                </div>
                                <div className="col-6">
                                    <h5 className="text-right">{`${heater}%`}</h5>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </MuiThemeProvider>
        );
    }
}

SimpleCardOverview.propTypes = {
    classes: PropTypes.object.isRequired,
    payload: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    payload: state.payload
})


export default connect(mapStateToProps, {})(withStyles(styles)(SimpleCardOverview))