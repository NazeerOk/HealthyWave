import React from 'react'
import Chart from 'react-google-charts'

const Heartbeat = () => {

    return (
        <div id='chart_div'>
            <Chart
                width={'600px'}
                height={'200px'}
                chartType="LineChart"
                data={[
                  ['x', 'heartbeat'],
                  [0, 0],
                  [3,20],
                  [5, 20],
                  [8,23],
                  [10,20],
                  [15,10],
                  [20,70],
                  [25,5],
                  [28,10],
                  [32,30],
                  [33,20],
                  [35,10],
                  [38,50],
                  [40,20],
                  [45,10],
                  [50,35],
                  [55,2],
                  [58,20],
                  [60,20]
                ]}
                options={{
                  'chartArea': {
                      'backgroundColor': {'fill': 'rgb(42,45,51)'},
                  },
                  backgroundColor: {
                      gradient: {
                        color1: 'rgb(42,45,51)',
                        color2: 'rgb(42,45,51)',
                        x1: '0%', y1: '0%',
                        x2: '100%', y2: '100%',
                      }},
                      colors: ['gray'],
                      lineWidth: 3,
                      hAxis: {
                          title: 'Time',
                          gridlines: {color: 'transparent'}
                          },
                      vAxis: {
                          title: 'HeartBeat',
                          gridlines: {color: 'transparent'}
                  }
   
                }}
              />
        </div>
    )
}

export default Heartbeat
