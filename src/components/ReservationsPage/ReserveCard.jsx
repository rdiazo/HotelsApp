import useCrud from "../../hooks/useCrud"
import getDaysFromDates from "../../services/getDaysFromDates"

const ReserveCard = ({ reserve, deleteReservation }) => {

    console.log(reserve)


    const reservationsDays = getDaysFromDates(reserve.checkIn, reserve.checkOut)

    const handleDelete = () => {
        deleteReservation('/bookings', reserve.id)
    }

  return (
    <article>
        <header>
            <img src={reserve.hotel.images[0].url} alt="" />
        </header>
        <section>
            <h3>{reserve.hotel.name}</h3>
            <div>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
                <div>
                    <div className="reserve__rating">Rate and comment this visit</div>
                </div>
            <div><span>Reservations days:</span><span>{reservationsDays}</span></div>
            <div><span>subtotal Price:</span><span>{Number(reserve.hotel.price) * reservationsDays }</span></div>
        </section>
        <button onClick={handleDelete}>Delete</button>
    </article>
  )
}

export default ReserveCard