import React from 'react'
import { useSelector } from 'react-redux';


const Upcoming = () => {
    const appointmentData = useSelector(state => state.appointments);
 
    function sortByTime (a, b) {  
        var dateA = new Date(a.appointmentDate).getTime(); 
        var dateB = new Date(b.appointmentDate).getTime(); 
        return dateA > dateB ? 1 : -1;  
    };  

    
    
   function checker(){
    
        if (appointmentData.length === 0){
            return (
                <h5>No Appointments Available</h5>
            )
        }
    
        else{
            const appointmentArray= appointmentData.sort(sortByTime)
            const firstAppointment = appointmentArray[0];
            const dateFromFirstAppointment = firstAppointment.appointmentDate //Full string format
            const date =  new Date(dateFromFirstAppointment).toDateString();
            
            const timeWithoutSeconds = new Date(dateFromFirstAppointment).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
            
            return (
                <>
                    <h2> {firstAppointment.name} </h2>
                    <h4> { firstAppointment.type }</h4>
                      <h5> {date} </h5> 
                     <h5>{timeWithoutSeconds} </h5>
                       
                </>
            )
        }
    }

    
    
    
    return (
        <div>
           <h3>Upcoming Appointment</h3>
           {checker()}
        </div>
    )
}

export default Upcoming
