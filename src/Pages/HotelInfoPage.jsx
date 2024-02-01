import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
//import useFetch from '../hooks/useFetch'
import { Map, Marker, ZoomControl } from 'pigeon-maps'
import OtherHotels from '../components/HotelInfoPage/OtherHotels'
import ReservationsHotel from '../components/HotelInfoPage/ReservationsHotel'
import SliderImgs from '../components/HotelInfoPage/SliderImgs'
import useFetch from '../hooks/useFetch'

const HotelInfoPage = () => {

  const { id } = useParams()

  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  const [ hotel, getHotel ] = useFetch(url)
  //const [hotel, getHotel] = useFetch(url)

  useEffect(() => {
    getHotel()
  }, [url])

  //console.log(hotel)

  return (
    <div>
      <header>
        <h2>{hotel?.name}</h2>
        <span>rating</span>
      </header>
      <SliderImgs 
        hotel={hotel}
      />
      <div>
        {
          hotel && (
            <Map center={[+hotel.lat, +hotel.lon]} height={300} zoom={11}>
              <Marker
                width={50}
                color='greenyellow'
                anchor={[Number(hotel.lat), +hotel.lon]}
              />
              <ZoomControl />
            </Map>
          )
        }
      </div>
      <div>
        <div>
          <span>{hotel?.city.name}</span>
          <span>{hotel?.city.country}</span>
        </div>
        <div>
          <i className='bx bx-map'></i>
          <span>{hotel?.address}</span>
          <p>{hotel?.description}</p>
        </div>
      </div>
      <ReservationsHotel
        hotelId={hotel?.id}
      />
      <OtherHotels
        cityId={hotel?.city.id}
        hotelId={hotel?.id}

      />
    </div>
  )
}

export default HotelInfoPage