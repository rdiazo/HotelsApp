import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import usefetch from '../hooks/usefetch'
import { Map, Marker, ZoomControl } from 'pigeon-maps'

const HotelInfoPage = () => {

  const { id } = useParams()

  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  const [hotel, getHotel] = usefetch(url)

  useEffect(() => {
    getHotel()
  }, [url])

  return (
    <div>
      <header>
        <h2>{hotel?.name}</h2>
        <span>rating</span>
      </header>
      <img src={hotel?.images[0].url} alt="" />
      <div>
        {
        hotel && (
        <Map center={[ +hotel.lat, +hotel.lon]} height={300} zoom={11}>
          <Marker 
            width={50}
            color='greenyellow'
            anchor={[ Number(hotel.lat), +hotel.lon ]}            
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
      </div>
      )
}

      export default HotelInfoPage