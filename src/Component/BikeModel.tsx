import React from 'react'

export default function BikeModel() {
  return (
    <div className="Bike-Container">
      <div className='BikeData'>
       <h1>Bike Details</h1>

       <div className="BikeModel">
        <label>Bike Model</label>
        <select 
        name='bikeModelId'
        id="bikeModelId">
            <option>--Select Model</option>
            <option value={1}>Honda</option>
            <option value={2}>Maruti</option>
            <option value={3}>Austro</option>
            <option value={4}>Activa</option>
            <option value={5}>Bajaj</option>
            <option value={6}>Ninja</option>


        </select>
       </div>

      </div>
    </div>
  )
}
