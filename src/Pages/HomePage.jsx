import { useEffect, useRef, useState } from "react"
import { getHotelsThunk } from "../store/states/hotels.state"
import { useDispatch, useSelector } from "react-redux"
import ListHotels from "../components/HomePage/ListHotels"
import FilterName from "../components/HomePage/FilterName"
import FilterPrice from "../components/HomePage/FilterPrice"
import FilterCities from "../components/HomePage/FilterCities"

const HomePage = () => {

  const [nameInput, setNameInput] = useState('')
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })
  const [idCity, setIdCity] = useState('all cities')//verificar


  const hotels = useSelector(states => states.hotels)
  
  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
  }, [])

 // console.log(hotels)

  const hotelsFiltered = hotels?.results.filter(hotelInfo => {
    //Filter name
    const filterName = hotelInfo.name.toLowerCase().includes(nameInput)
    //Filter Price
    const priceHotel = +hotelInfo.price
    const filterPrice = fromTo.from <= priceHotel && priceHotel <= fromTo.to
    //Filter cities
    const filterCities = idCity === 'all cities' ? (true) : (idCity === hotelInfo.city.id)

    return filterName && filterPrice && filterCities

  })

  return (
    <div>
      <FilterName setNameInput={setNameInput} />
      <FilterPrice setFromTo={setFromTo}/>
      <FilterCities setIdCity={setIdCity}/>
      <ListHotels hotels={hotelsFiltered} />
    </div>
  )
}

export default HomePage