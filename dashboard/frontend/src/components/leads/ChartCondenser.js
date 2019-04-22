import React, { Component, Fragment } from 'react'
import ChartistGraph from 'react-chartist';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addStore, getCondenserData } from "../../actions/leads";

var chartData = []
var chartData2 = []

export class ChartCondenser extends Component {
    state = {
        messageID: "1",
        message: "",
    }
    static propTypes = {
        condenser: PropTypes.number,
        condenserData: PropTypes.object.isRequired,
        getCondenserData: PropTypes.func.isRequired,

        kettleData: PropTypes.object.isRequired,
        kettle: PropTypes.number,
    };

    componentDidMount() {
        console.log('Condenser Chart did mount')
        this.props.getCondenserData(this.state.messageID)

    }
    componentWillUnmount() {
        chartData = []
        console.log('Condenser Chart Unmounted')
    }

    render() {
        if (chartData != null) {
            chartData = this.props.condenserData.condenserData
        }

        if (chartData2 != null) {
            chartData2 = this.props.kettleData.kettleData
        }

        var data = {
            labels: ['Monday', , , 'Tuesday', , , 'Wednesday', , 'Thursday', , 'Friday'],
            series: [
                chartData, chartData2
            ]
        };

        var options = {
            showPoint: false,
            fullWidth: true,
            chartPadding: {
                right: 40
            },
            axisX: {
                showGrid: false,
                showLabel: false
            },
            stroke: 'blue'
        };

        var type = 'Line'
        return (
            <Fragment>
                <div>
                    <ChartistGraph className={'ct-octave'} data={data} options={options} type={type} />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    condenserData: state.condenserData,
    condenser: state.payload.condenser,

    kettleData: state.kettleData,
    kettle: state.payload.kettle
})

export default connect(mapStateToProps, { addStore, getCondenserData })(ChartCondenser)
