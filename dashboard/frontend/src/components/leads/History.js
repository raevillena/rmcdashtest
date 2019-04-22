import React, { Fragment, Component } from 'react'
import HistoryForm from './HistoryForm'
import FormStore from './FormStore'

import Stores from './Stores'

export default function History() {
    return (
        <Fragment>
            <div style={{ paddingTop: '10px', margin: '0' }}>
                <HistoryForm />
                <FormStore />
                <Stores />
            </div>
        </Fragment>
    )
}
