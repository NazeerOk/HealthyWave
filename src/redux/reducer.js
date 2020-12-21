
const initialState = {
    doctors:[],
    appointments:[]
}

const reducer = (state = initialState , action) =>{
    switch (action.type) {
        
        case 'FETCH_DETAILS':{
            return{
                ...state,
                doctors: action.payload.doctors
            }
        }
        
        case "GET_DETAIL":{
            return{
                ...state,
                appointments: [...state.appointments, action.payload.appointments]
            }
        }
    
        default:
            return {...state}
    }
}

export default reducer


