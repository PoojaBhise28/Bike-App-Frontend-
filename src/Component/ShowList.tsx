import React, { useEffect, useState } from "react";
import BikeModel from "../Model/BikeModel";
import { getBikeInfoById } from "../Service/BikeService";
import "../Style/ShowList.css";
import ShowListUtility from "../Utility/ShowListUtility";
import { biketypesoptions } from "../APICONFIG";

export default function ShowList() {
  const [bikeInfo, setbikeInfo] = useState<BikeModel[]>([]);
  const showListUtility = ShowListUtility();

  useEffect(() => {
    fetchBikeList();
  }, []);

  const fetchBikeList = async () => {
    try {
      const response = await getBikeInfoById(1);
      setbikeInfo([response.data]);
    } catch (error) {
      console.error("Error fetching bike list:", error);
    }
  };
  console.log("object", bikeInfo);
 

  function findbiketypeName(id: number) {
    var found = biketypesoptions.find((bike: any) => bike.id === id);
    return found?.type;
  }
  return (
    <div>
      <h1>Bike List</h1>
      <table>
        <thead>
          <tr>
            {" "}
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
          {bikeInfo?.map((bike: any) => (
            <tr key={bike.id}>
              <td>{bike.bikeModel}</td>
              <td>{bike.bikeManufracture}</td>
              <td>{bike.milage}</td>
              <td>{bike.color}</td>
              <td>{findbiketypeName(bike.bikeTypeId)}</td>
              <td>{bike.price}</td>
              <td>{bike.description}</td>
              <td>
                <button
                  onClick={() => showListUtility.handleUpdateBike(bike.id)}
                >
                  Edit
                </button>
                <button
                  onClick={() => showListUtility.handleDeleteBike(bike.id)}
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
