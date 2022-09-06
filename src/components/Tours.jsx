import React from 'react'
import Card from './Card'

function Tours({tours, removeTour}) {
  return (
    <div>
        <h2>Our Tours</h2>
        {tours.map((tour)=> (
            <Card key={tour.id} {...tour} removeTour={removeTour}/>
            // <Card key={tour.id} {...tour} removeTour={removeTour} />
        ))}
    </div>
  )
}

export default Tours