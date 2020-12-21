import React from 'react'
import Chart from 'react-google-charts'
import loading from '../../assests/loading.svg'

const Cholesterol = () => {
    return (
        <div className='chart_div' >
    <Chart
        width={'400px'}
        height={'200px'}
        chartType="Bar"
        loader={<div> <img src={loading} alt=""/> </div>}
        data={[
            ['Month', 'Total Cholestrol'],
            ['Jan', 270],
            ['May', 250],
            ['Dec', 220],
        ]}
        options={{
            colors: ['#b0120a', '#ffab91'],
            bars: 'horizontal',
            chart: {
            title: 'Total cholesterol',
            subtitle: 'Normal Range: Less than 200',
            }
        }}
    />
        </div>
    )
}

export default Cholesterol
