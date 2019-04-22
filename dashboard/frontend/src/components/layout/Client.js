import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { updateData } from '../../actions/payload'
import {
  RECEIVED_CONDENSER,
  RECEIVED_HEATER,
  RECEIVED_KETTLE,
  RECEIVED_PROGRESS,
  RECEIVED_PUMP,
} from '../../actions/types'

import {
  CONDENSER_TOPIC,
  KETTLE_TOPIC,
  HEATER_TOPIC,
  PUMP_TOPIC,
  PROGRESS_TOPIC,
  HEATER_SETTING_TOPIC,
  PUMP_SETTING_TOPIC

} from '../constants/topics'

import { connectionString } from '../constants/mqttconnectionstring'
var mqtt = require('mqtt')
var client
var isMqttConnected = false

export class Client extends Component {
  static propTypes = {
    auth: Proptypes.object.isRequired,
    updateData: Proptypes.func.isRequired,
  }

  handleMessages = (topic, message) => {
    if (topic === CONDENSER_TOPIC) {
      this.props.updateData(RECEIVED_CONDENSER, parseFloat(message.toString()))
    }
    else if (topic === KETTLE_TOPIC) {
      this.props.updateData(RECEIVED_KETTLE, parseFloat(message.toString()))
    }
    else if (topic === PUMP_TOPIC) {
      this.props.updateData(RECEIVED_PUMP, parseFloat(message.toString()))
    }
    else if (topic === HEATER_TOPIC) {
      this.props.updateData(RECEIVED_HEATER, parseFloat(message.toString()))
    }
    else if (topic === PROGRESS_TOPIC) {
      this.props.updateData(RECEIVED_PROGRESS, parseFloat(message.toString()))
    }
  }

  //mqtt message events

  handleMqttConnect() {
    console.log('handleconnect')

    client = mqtt.connect(connectionString)

    client.on('connect', () => {
      console.log('client connected to server')
      client.subscribe(HEATER_SETTING_TOPIC)
      client.subscribe(PUMP_SETTING_TOPIC)
      client.subscribe(CONDENSER_TOPIC)
      client.subscribe(KETTLE_TOPIC)
      client.subscribe(PUMP_TOPIC)
      client.subscribe(HEATER_TOPIC)
      client.subscribe(PROGRESS_TOPIC)
      isMqttConnected = true
    })

    client.on('reconnect', () => {
      console.log('reconnecting')
    })
    client.on('error', (error) => {
      console.log(error)
    })
    client.on('close', () => {
      console.log('connection closed')
    })

    client.on('offline', () => {
      console.log('client is offline')
    })

    client.on('message', (topic, message) => {
      this.handleMessages(topic, message)
    })

    client.on('end', () => {
      console.log('Client Ended')
      isMqttConnected = false
    })
  }

  render() {
    const { isAuthenticated } = this.props.auth
    console.log('client re rendered')
    if (isAuthenticated) {
      this.handleMqttConnect()
    } else {
      isMqttConnected = false
    }
    return (
      <Fragment />
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { updateData })(Client)
export { client, isMqttConnected }