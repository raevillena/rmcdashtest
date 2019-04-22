import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getStores, deleteStore } from '../../actions/leads'

export class Stores extends Component {
  static propTypes = {
    stores: PropTypes.array.isRequired,
    getStores: PropTypes.func.isRequired,
    deleteStore: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getStores()
  }
  render() {
    return (
      <Fragment>
        <h2>Stores</h2>
        <div className="table-responsive">
          <table className="table table-stripped m-auto">
            <thead className="thead-light">
              <tr>
                <th>MessageID</th>
                <th>Message</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.stores.map(store => (
                <tr key={store.messageID}>
                  <td>{store.messageID}</td>
                  <td>{store.message}</td>
                  <td> <button onClick={this.props.deleteStore.bind(this, store.messageID)} className="btn btn-danger btn-sm"> Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
  stores: state.stores.stores
})

export default connect(mapStateToProps, { getStores, deleteStore })(Stores)
