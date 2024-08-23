// Write your code here
import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem/index'
import './index.css'

class Appointments extends Component {
  state = {
    inputTitle: '',
    inputDate: '',
    appointmentsList: [],
    isFilteredActive: false,
  }

  onChangeTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeDate = event => {
    this.setState({inputDate: event.target.value})
  }

  toggleStar = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachDetial => {
        if (eachDetial.id === id) {
          return {...eachDetial, isActive: !eachDetial.isActive}
        }
        return eachDetial
      }),
    }))
  }

  onClickFilter = () => {
    const {isFilteredActive} = this.state
    this.setState({isFilteredActive: !isFilteredActive})
  }

  getStarredlist = () => {
    const {appointmentsList, isFilteredActive} = this.state
    if (isFilteredActive) {
      return appointmentsList.filter(
        appointmentsStarredList => appointmentsStarredList.isActive === true,
      )
    }
    return appointmentsList
  }

  addAppointment = event => {
    event.preventDefault()
    const {inputTitle, inputDate} = this.state
    const newAppointmentList = {
      id: uuidv4(),
      title: inputTitle,
      date: format(new Date(inputDate), 'dd MMMM yyyy, EEEE'),
      isActive: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointmentList],
      inputTitle: '',
      inputDate: '',
    }))
  }

  renderAppointmentsLists = () => {
    const filteredStarredlist = this.getStarredlist()
    return filteredStarredlist.map(eachAppointment => (
      <AppointmentItem
        key={eachAppointment.id}
        appointmentDetails={eachAppointment}
        toggleStar={this.toggleStar}
      />
    ))
  }

  render() {
    const {inputTitle, inputDate, isFilteredActive} = this.state
    console.log(isFilteredActive)
    const filterActive = isFilteredActive ? 'starred-full-btn' : 'starred-btn'
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="appointments-container">
            <div className="input-container">
              <form className="form" onSubmit={this.addAppointment}>
                <h1 className="heading">Add Appointment</h1>
                <label htmlFor="titleId" className="label">
                  TITLE
                </label>
                <input
                  id="titleId"
                  className="title"
                  value={inputTitle}
                  type="text"
                  onChange={this.onChangeTitle}
                  placeholder="Title"
                />
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
                <button className="add-button" type="submit">
                  Add
                </button>
              </form>
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
            <hr className="line" />
            <div className="heading-starred-container">
              <h2 className="sub-heading">Appointments</h2>
              <button
                type="button"
                className={filterActive}
                onClick={this.onClickFilter}
              >
                Starred
              </button>
            </div>
            <ul className="appointment-list">
              {this.renderAppointmentsLists()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
