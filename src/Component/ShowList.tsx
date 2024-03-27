import React, { useEffect, useState } from "react";
import BikeModel from "../Model/BikeModel";
import { getBikeInfoById } from "../Service/BikeService";
import "../Style/ShowList.css";
import ShowListUtility from "../Utility/ShowListUtility";
import { biketypesoptions, findbiketypeName } from "../APICONFIG";

export default function ShowList() {
 // const [bikeInfo, setbikeInfo] = useState<BikeModel[]>([]);
  const {bikeInfo,handleUpdateBike,handleDeleteBike}= ShowListUtility();
  //const showListUtility = ShowListUtility();

  // useEffect(() => {
  //   fetchBikeList();
  // }, []);

  // const fetchBikeList = async () => {
  //   try {
  //     const response = await getBikeInfoById(1);
  //     setbikeInfo([response.data]);
  //   } catch (error) {
  //     console.error("Error fetching bike list:", error);
  //   }
  // };
  // console.log("object", bikeInfo);
 


  
  return (
    <div>
      <h1>Bike Information </h1>
      <table>
        <thead>
          <tr>
            {" "}
            <th>Sr.no</th>
            <th>Bike Model</th>
            <th>Bike Manufacture</th>
            <th>Mileage</th>
            <th>Color</th>
            <th>Bike Type</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
           
          </tr>
        </thead>
        <tbody>
          {/* {bikeList.length === 0 ? <div>No record found</div> : () } */}
          {bikeInfo?.map((bike: any,index:number) => (
            <tr key={bike.id}>
              <th>{index+1}</th>
              <td>{bike.bikeModel}</td>
              <td>{bike.bikeManufracture}</td>
              <td>{bike.milage}</td>
              <td>{bike.color}</td>
              {/* <td>{bike.bikeTypeId}</td> */}
           <td>{findbiketypeName(bike.bikeTypeId)}</td>
              <td>{bike.price}</td>
              <td>{bike.description}</td>
              <td>
                <button
                  onClick={() => handleUpdateBike(bike.id)}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBike(bike.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
