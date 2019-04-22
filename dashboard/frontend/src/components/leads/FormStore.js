import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addStore } from "../../actions/leads";


export class FormStore extends Component {
  state = {
    messageID: "",
    message: ""
  };

  static propTypes = {
    addStore: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { messageID, message } = this.state;
    const store = { messageID, message };
    this.props.addStore(store);
    this.setState({
      messageID: "",
      message: ""
    });
  };

  render() {
    const { messageID, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4" style={{ marginTop: '16px' }}>
        <h2>Add Store</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>MessageID</label>
            <input
              className="form-control"
              type="text"
              name="messageID"
              onChange={this.onChange}
              value={messageID}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addStore })(FormStore)
