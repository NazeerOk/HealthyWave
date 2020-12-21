import React from 'react'
import Chart from 'react-google-charts'
import loading from '../../assests/loading.svg'



const BloodSugar = () => {
 
  
    return (
        <div className='cholesterol-chart'>
           
<Chart
          width={"100%"}
          height={350}
          chartType="ScatterChart"
          loader={<div> <img height='350px' src={loading} alt=""/> </div>}
          data={[
           //Custom Tooltip
            ["x", "Sugar Level", { role: "tooltip", type: "string", p: { html: true } }],
            ["10 AM", 90, '90'],
            ["12 AM", 170, "170"]
          ]}
          options={{
            'chartArea': {
                'backgroundColor': {
                    'fill': '#FFD9E4',
                 },
             },
             backgroundColor: {
                gradient: {
                  color1: '#7D8CFF',
                  color2: '#8E95FF',
                  x1: '0%', y1: '0%',
                  x2: '100%', y2: '100%',
                }},
            tooltip: { isHtml: true, trigger: "visible" },
            title:'Before and After Meal Sugar Level'
          }}
        />
        </div>
    )
}

export default BloodSugar
