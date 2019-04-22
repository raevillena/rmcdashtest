import React, { Fragment, Component } from 'react'

import SimpleCardSliderHeater from '../cards/SimpleCardSliderHeater';
import SimpleCardSliderPump from '../cards/SimpleCardSliderPump';

import SimpleCardProgress from '../cards/SimpleCardProgress';
import SimpleCardOverview from '../cards/SimpleCardOverview';

import SimpleCardChartCondenser from '../cards/SimpleCardChartCondenser';
import SimpleCardChartKettle from '../cards/SimpleCardChartKettle';

import SimpleCardGaugeHeater from '../cards/SimpleCardGaugeHeater';
import SimpleCardGaugePump from '../cards/SimpleCardGaugePump';


export default function Dashboard() {

  return (
    <Fragment>
      <div style={{ paddingTop: '10px', margin: '0' }}>
        <div className="card-group">
          <SimpleCardChartCondenser />
          <SimpleCardChartKettle />
          <div>
            <SimpleCardSliderHeater />
            <SimpleCardSliderPump />
          </div>
        </div>
        <div className="card-group" >
          <SimpleCardOverview />
          <SimpleCardGaugeHeater />
          <SimpleCardGaugePump />
          <SimpleCardProgress />
        </div>
      </div>
    </Fragment>
  )
}


