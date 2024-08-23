// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStar} = props
  const {id, title, date, isActive} = appointmentDetails
  const starImageurl = !isActive
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  const onClickToggle = () => {
    toggleStar(id)
  }
  return (
    <li className="appointment-item">
      <div className="appointment-container">
        <div className="title-star-container">
          <p className="title-text">{title}</p>
          <button
            type="button"
            className="star-button"
            onClick={onClickToggle}
            data-testid="star"
          >
            <img className="star-image" src={starImageurl} alt="star" />
          </button>
        </div>
        <p className="date-text">Date: {date}</p>
      </div>
    </li>
  )
}
export default AppointmentItem
