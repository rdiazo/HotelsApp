import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";

const ReservationsHotel = ({ hotelId }) => {

const { handleSubmit, register, reset } = useForm()

const [ ,,createReservation ] = useCrud()

const submit = data => {
    const obj  = {
        ...data,
        hotelId
    }
    createReservation('/bookings', obj)
    
}

    return (
    <form onSubmit={handleSubmit(submit)} >
        <label>
          <span>Check-in</span>
          <input {...register('checkIn')} type="date" />
        </label>

        <label>
          <span>Check-out</span>
          <input {...register('checkOut')} type="date" />
        </label>
        <button>Submit</button>
      </form>
  )
}

export default ReservationsHotel;