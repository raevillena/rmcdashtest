import React, { Component } from 'react'
import { createMessage } from '../../actions/messages'
import { connect } from 'react-redux'

import { client, isMqttConnected } from '../layout/Client'

export class SetButton extends Component {

    onSubmit = e => {
        e.preventDefault();
        if (isMqttConnected) {
            client.publish(this.props.topic, `${this.props.value}`)
            this.props.createMessage({ sendMqttMessage: `Setting changed to ${this.props.value}` })
        } else {
            this.props.createMessage({ sendMqttError: 'Server Not Connected' })
        }

    };
    render() {
        return (
            <div style={{ marginLeft: '5px' }}>
                <form onSubmit={this.onSubmit}>
                    <button type="submit" className="btn btn-primary">
                        Set
                    </button>
                </form>
            </div>
        )
    }
}

export default connect(null, { createMessage })(SetButton)
