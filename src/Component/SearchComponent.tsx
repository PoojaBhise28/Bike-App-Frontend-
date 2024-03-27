import React, { useEffect, useState } from "react";
import { GetAllBikes } from "../Service/BikeService";

import { findbiketypeName } from "../APICONFIG";

import SearchUtility from "../Utility/SearchUtility";
import BikeModel from "../Model/BikeModel";
import { useParams } from "react-router-dom";

export default function SearchComponent() {
  

  const {  handleSearchInputChange,handleSearch,bikeInfo,setBikeInfo} =
    SearchUtility();

  console.log("object", bikeInfo);
  return (
    <div>
      <h1>Bike Information </h1>

      <div>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search Here"
          maxLength={50}
          autoComplete="off"
        
          onChange={handleSearchInputChange}
          style={{ width: "70%", border: "2px solid black", height: "30px" }}
        />

        <button onClick={() => handleSearch()}>Search</button>
        {/* <button onClick={(search)} style={{width: "70px", border: "1px solid #ccc" }}>Search</button>  */}

     
      </div>
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
          </tr>
        </thead>
        <tbody>
          {/* {bikeList.length === 0 ? <div>No record found</div> : () } */}
          {bikeInfo?.map((bike: BikeModel, index: number) => (
            <tr key={bike.id}>
              <th>{index + 1}</th>
              <td>{bike.bikeModel}</td>
              <td>{bike.bikeManufracture}</td>
              <td>{bike.milage}</td>
              <td>{bike.color}</td>
              {/* <td>{bike.bikeTypeId}</td> */}
              <td>{findbiketypeName(bike.bikeTypeId)}</td>
              <td>{bike.price}</td>
              <td>{bike.description}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
