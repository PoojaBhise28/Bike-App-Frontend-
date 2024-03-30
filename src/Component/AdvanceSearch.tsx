import React from "react";
import AdvanceSearchUtility from "../Utility/AdvanceSearchUtility";
import "../Style/AdvanceSearchStyle.css";

export default function AdvanceSearch() {
  const advanceSearchUtility = AdvanceSearchUtility();

  return (
    <div className="bike-Container">
      <h1>Bike Information </h1>
      <label>Bike Model</label>
      <select name="bikeModelId" id="bikeModelId"

      value={ advanceSearchUtility.searchInfo.bikeModelId}
      onChange={advanceSearchUtility.onSelectFieldChange}>

        <option>--Select Model</option>
        <option value={1}>Honda</option>
        <option value={2}>Maruti</option>
        <option value={3}>Austro</option>
        <option value={4}>Activa</option>
        <option value={5}>Bajaj</option>
        <option value={6}>Ninja</option>
      </select>

      <label>Bike Model</label>
      <select
        name="bikeManufracture"
        id="bikeManufracture"
        value={ advanceSearchUtility.searchInfo.bikeManufractureId}
        onChange={advanceSearchUtility.onSelectFieldChange}
      >
        <option>--Select Bike Manufracturer</option>
        <option value={1}>Tata</option>
        <option value={2}>Honda</option>
        <option value={3}>Hero Honda</option>
        <option value={4}>Bajaj</option>
      </select>

      <label>Bike color</label>

      <select
        value={ advanceSearchUtility.searchInfo.colorId}
        onChange={advanceSearchUtility.onSelectFieldChange}
        name="color"
        id="color"
      >
        <option>--Select--</option>
        <option value={1}>Red</option>
        <option value={2}>Blue</option>
        <option value={3}>Green</option>
        <option value={4}>Black</option>
        <option value={5}>White</option>
      </select>

      <label>fuelType</label>

      <select
        value={ advanceSearchUtility.searchInfo.fuelType}
        onChange={advanceSearchUtility.onSelectFieldChange}
        name="fuelType"
        id="fuelType"
      >
        <option>--Select FuelType--</option>
        <option value="Disel">Disel</option>
        <option value="Petrol">Petrol</option>
        <option value="CNG">CNG</option>
      </select>

      <label>Bike Type:</label>
      <select
        name="bikeTypeId"
        id="bikeTypeId"
        value={ advanceSearchUtility.searchInfo.bikeTypeId}
        onChange={advanceSearchUtility.onSelectFieldChange}
      >
        <option>--Select--</option>
        <option value={1}>Road</option>
        <option value={2}>Mountain</option>
        <option value={3}>Hybrid</option>
        <option value={4}>Sports</option>
        required
      </select>

      <label>Mileage</label>
      <input
        type="number"
        name="milage"
        id="milage"
        placeholder="Bike Milage"
        maxLength={2}
        value={advanceSearchUtility.searchInfo.milage}
        onChange={advanceSearchUtility.handelChangeNumberBike}
        style={{ marginRight: "30px" }}
      />

      <label>Bike price</label>
      <input
        type="number"
        name="price"
        id="price"
        placeholder="Bike Price"
        maxLength={7}
        autoComplete="off"
        required
        value={advanceSearchUtility.searchInfo.price}
        onChange={advanceSearchUtility.handelChangeNumberBike}
      />
      <button onClick={() => advanceSearchUtility.handleSubmit()}>
        Search
      </button>
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
          {advanceSearchUtility.bikeinfo?.map((bike: any, index: number) => (
        
            <tr key={bike.id}>
              <th>{index + 1}</th>
              <td>{bike.modelName}</td>
              <td>{bike.bikeManufractureName}</td>
              <td>{bike.milage}</td>
              <td>{bike.colourName}</td>
              {/* <td>{bike.bikeTypeId}</td> */}
              <td>{bike.typeName}</td>
              <td>{bike.price}</td>
              <td>{bike.description}</td>
              <td>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
