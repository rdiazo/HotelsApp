import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const FilterCities = ({ setIdCity }) => {

    const url = 'https://hotels-api.academlo.tech/cities'
    const [ cities, getCities ] = useFetch(url)

    useEffect(() => {
      getCities()
    }, [])
    
   // console.log(cities)

    const handleFilterCities = (id) => {
        setIdCity(id)
    }

    return (
    <div>
        <h3>Cities</h3>
        <ul>
            <li onClick={() => handleFilterCities('all cities')} >All cities</li>
            {
                cities?.map(city => (
                    <li onClick={() => handleFilterCities(city.id)} key={city.id}     >{city.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default FilterCities