import { useEffect } from "react"
import usefetch from "../../hooks/usefetch"

const FilterCities = ({ setIdCity }) => {

    const url = 'https://hotels-api.academlo.tech/cities'
    const [ cities, getCities ] = usefetch(url)

    useEffect(() => {
      getCities()
    }, [])
    
    console.log(cities)

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