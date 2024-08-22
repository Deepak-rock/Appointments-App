// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {title, date} = appointmentDetails

  return (
    <li className="appointment-item">
      <div className="appointment-container">
        <div className="title-star-container">
          <p>{title}</p>
          <button type="button">
            <img
              className="star-image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
              alt="star"
            />
          </button>
        </div>
        <p>{date}</p>
      </div>
    </li>
  )
}
export default AppointmentItem
