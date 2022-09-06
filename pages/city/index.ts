import City from '../components/city'

function CityList({ cities }) {
  return (
    <>
      <h1>List of cities</h1>
      {cities.map(city => {
        return (
          <div key={city.id}>
            <City city={city} />
          </div>
        )
      })}
    </>
  )
}

export default CityList