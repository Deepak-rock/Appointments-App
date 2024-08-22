// Write your code here
import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem/index'
import './index.css'

/* const date = format(new Date(), 'dd MMMM yyyy, EEEE')
console.log(date)
console.log(typeof date) */

class Appointments extends Component {
  state = {
    inputTitle: '',
    inputDate: '',
    appointmentsList: [],
  }

  onChangeTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeDate = event => {
    this.setState({inputDate: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
    const {inputTitle, inputDate} = this.state
    const newAppointmentList = {
      id: uuidv4(),
      title: inputTitle,
      date: format(new Date(inputDate), 'dd MMMM yyyy, EEEE'),
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointmentList],
      inputTitle: '',
      inputDate: '',
    }))
  }

  renderAppointmentsLists = () => {
    const {appointmentsList} = this.state
    return appointmentsList.map(eachAppointment => (
      <AppointmentItem
        key={eachAppointment.id}
        appointmentDetails={eachAppointment}
      />
    ))
  }

  render() {
    const {inputTitle, inputDate} = this.state
    return (
      <div className="app-container">
        <div className="appointments-container">
          <h1 className="heading">Add Appointment</h1>
          <div className="input-container">
            <form className="form" onSubmit={this.addAppointment}>
              <div className="input-title-container">
                <label htmlFor="titleId" className="label">
                  TITLE
                </label>
                <input
                  id="titleId"
                  className="title"
                  value={inputTitle}
                  type="text"
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="input-date-container">
                <label htmlFor="dateId" className="label">
                  DATE
                </label>
                <input
                  id="dateId"
                  className="date"
                  value={inputDate}
                  type="date"
                  onChange={this.onChangeDate}
                />
              </div>
              <div className="add-button-container">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
            <div className="image-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="heading-starred-container">
            <h2 className="sub-heading">Appointments</h2>
            <button type="button" className="starred-btn">
              Starred
            </button>
          </div>
          <ul className="appointment-list">{this.renderAppointmentsLists()}</ul>
        </div>
      </div>
    )
  }
}
export default Appointments
