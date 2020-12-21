
import dummyData from '../components/dummydata'

  export  const fetchData = (dispatch) =>{
        dispatch({
            type:'FETCH_DETAILS',
            payload:{
                doctors: dummyData
            }
        })
    }



export const loadDetail = (id,selectedDate) => async (dispatch) => {

    let newData;
    
    dummyData.forEach(e => {
        if(e.id === id){
            newData = e
            if(typeof selectedDate == 'number'){ 
                newData['appointmentDate'] = new Date(selectedDate).toString() 
            }
            else{
                newData['appointmentDate'] = selectedDate.toString()
            }
        }
    })
    
    dispatch({
      type: "GET_DETAIL",
      payload: {
        appointments: newData
      },
    });
  };


