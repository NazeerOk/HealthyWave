import React, { useEffect } from 'react'
import BloodPressure from './widgets/BloodPressure'
import Cholesterol from './widgets/Cholesterol'
import BloodSugar from './widgets/BloodSugar'
import Heartbeat from './widgets/Heartbeat'
import Upcoming from './widgets/Upcoming'
import { useDispatch } from 'react-redux'
import    { fetchData }  from '../redux/action';





const Dashboard = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchData);
        
      },[dispatch])

    
    return (
        <div className='dashboard'>
           
           <section className='section'>
               <p>Your mind cannot heal without laughter. Your soul cannot heal without joy.</p>
           </section>
           <div className="widgets">
               <div className="blood_pressure">
                   <h3>Blood Pressure</h3>
                    <p>Status:Normal</p>
                    <BloodPressure/>
               </div>

               <div className="cholesterol"> <Cholesterol/> </div>

               <div className="blood_sugar"> <BloodSugar/> </div>

                <div className='widget'>
                    <div className="heartbeat">
                        <h3>Average Heartbeat: 72</h3>
                        <Heartbeat/>
                    </div>

                    <div className="upcoming_appointments">
                        <Upcoming/>
                    </div>
                </div>
           
           </div>
        </div>
    )
}

export default Dashboard
