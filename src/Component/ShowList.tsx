import React, { useEffect, useState } from 'react'
import BikeModel from '../Model/BikeModel';
import { getBikeInfoById } from '../Service/BikeService';
import "../Style/ShowList.css"

export default function ShowList() {
  
  const [bikeList, setBikeList] = useState<BikeModel[]>([]);

  useEffect(() => {
    fetchBikeList();
  }, []);

  const fetchBikeList = async () => {
    // try {
    //   const response = await getBikeInfoById(8); 
    //   setBikeList(response.data); 
    // } catch (error) {
    //   console.error("Error fetching bike list:", error);
    // }
  };

  return (
    <div>
      <h1>Bike List</h1>
      <table>
        <thead>
          <tr>   <th>Bike Model</th>
            <th>Bike Manufacture</th>
            <th>Mileage</th>
            <th>Color</th>
            <th>Bike Type</th>
            <th>Price</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bikeList.map((bike:BikeModel) => (
            <tr key={bike.id}>
           
              <td>{bike.bikeModel}</td>
              <td>{bike.bikeManufracture}</td>
              <td>{bike.milage}</td>
              <td>{bike.color}</td>
              <td>{bike.bikeType}</td>
              <td>{bike.price}</td>
              <td>{bike.description}</td>
              <td>
              <button >Edit</button>
              <button >Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


