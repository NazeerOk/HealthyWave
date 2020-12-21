import React, { Component } from 'react'
import { connect } from 'react-redux';
import    { loadDetail }  from '../redux/action';
import { Button, Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Appointment extends Component {

    constructor(props){
        super(props);
        this.nextDay = new Date().setDate(new Date().getDate() + 1);
        this.state ={
            show:false,
            buttonId:0,
            selectedDate: new Date(this.nextDay).setHours(10)
        }

        this.handleClose = this.handleClose.bind(this)
        this.handleSavedClose = this.handleSavedClose.bind(this)
        
    }

    disableButton(){
        let button = document.getElementById(this.state.buttonId.toString());
        button.disabled = 'true'
        button.innerText = 'Booked'
        button.setAttribute('class','btn btn-secondary');
    }

    handleClose(){
        this.setState({show: false})
    }

    handleSavedClose(){
        this.setState({show: false})
        this.disableButton();
        this.props.loadDetail(this.state.buttonId, this.state.selectedDate)
    }

    handleShow(id){
        this.setState({show:true})
        this.setState({buttonId: id})
    }

    componentDidMount(){
        this.props.appointments.forEach(e =>{
            let button = document.getElementById(e.id.toString());
            button.disabled = 'true'
            button.innerText = 'Booked'
            button.setAttribute('class','btn btn-secondary');
        })
        
    }

    render() {

        
        

        return (
            <>
                <div  className='doctor_container'>
                    {
                    this.props.doctors.map(e => 
                            <div key={e.id} className='doctors_list'>
                                <h1> {e.name} </h1>
                                <h3> {e.type} </h3>
                                <p> {e.Qualifications} </p>
                                
                                <Button id={e.id} type="button" onClick={()=>this.handleShow(e.id)} className="btn btn-primary ">Book Appointment</Button>
                            </div>
                        )
                    }
                </div>

                <Modal className='modal' show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
        
                        <DatePicker
                            selected={this.state.selectedDate}
                            onChange={date => {this.setState({selectedDate: date})}}
                            dateFormat= 'dd/MM/yyyy hh aa'
                            minDate={this.nextDay}
                            maxDate={new Date(Date.now() + 3 * 86400000)}
                            showTimeSelect
                            timeFormat='hh aa'
                            timeIntervals={60}
                            minTime={new Date().setHours(9)}
                            maxTime={new Date().setHours(20)}
                        />

        
                
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSavedClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = state => ({
    doctors: state.doctors,
    appointments: state.appointments
  });

  const mapDispatchToProps = () => {
    return {
        loadDetail
  
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps()
  )(Appointment);