import React, { Component } from 'react'
import ChartistGraph from 'react-chartist';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addStore, getKettleData } from "../../actions/leads";


var mounted
var chartData = []

export class ChartKettle extends Component {
    state = {
        messageID: "3",
        message: "",
    }

    static propTypes = {
        kettleData: PropTypes.object.isRequired,
        kettle: PropTypes.number,
        getKettleData: PropTypes.func.isRequired,

    };

    componentDidMount() {
        console.log('Kettle Chart did mount')
        this.props.getKettleData(this.state.messageID)
    }
    componentWillUnmount() {
        chartData = []
        console.log('Kettle chart unmounted')
    }

    render() {
        if (chartData != null) {
            chartData = this.props.kettleData.kettleData
        }
        var data = {
            labels: ['Monday', , , 'Tuesday', , , 'Wednesday', , 'Thursday', , 'Friday'],
            series: [
                [],
                chartData
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
            <div>
                <ChartistGraph className={'ct-octave'} data={data} options={options} type={type} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    kettleData: state.kettleData,
    kettle: state.payload.kettle
})

export default connect(mapStateToProps, { addStore, getKettleData })(ChartKettle)
