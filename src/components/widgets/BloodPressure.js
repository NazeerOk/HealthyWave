import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';


function BloodPressure() {
 
  return (
    <div>
      <PieChart
      data={[{ value: 110, color: 'green' }]}
      totalValue={120}
      lineWidth={15}
      label={()=> '110/80 mmHg'}
      labelStyle={{
        fontSize: '8px',
        fontFamily: 'sans-serif',
        fill: 'green',
        
      }}
      animate = 'true'
      animationDuration='2000'
      radius='35'
      labelPosition={0}
      rounded
    />
      
    </div>
  );
}

export default BloodPressure;