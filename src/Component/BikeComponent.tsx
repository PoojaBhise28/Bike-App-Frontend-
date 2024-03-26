import React from "react";
import { useParams } from "react-router-dom";
import "../Style/BikeStyle.css";
import BikeInfoUtility from "../Utility/BikeInfoUtility";

export default function BikeComponent() {
  const { id = 0 } = useParams();
  const bikeInfoUtility = BikeInfoUtility(+id);

  return (
    <div className=" .bike-Container">
      <div className="BikeData">
        <h1>Bike Information </h1>
        <label>Bike Model</label>
        <input
          type="text"
          id="bikeModel"
          name="bikeModel"
          placeholder="Bike Model"
          maxLength={50}
          autoComplete="off"
          value={bikeInfoUtility.bikeinfo.bikeModel}
          onChange={bikeInfoUtility.onInputChange}
          required
        />
        <br />
        <label>Bike Manufacture</label>
        <input
          type="text"
          id="bikeManufracture"
          name="bikeManufracture"
          placeholder="Bike Manufacture"
          maxLength={50}
          autoComplete="off"
          value={bikeInfoUtility.bikeinfo.bikeManufracture}
          onChange={bikeInfoUtility.onInputChange}
        />
        <br />
        <label>Bike color</label>
      
        <select
          value={bikeInfoUtility.bikeinfo.color}
          onChange={bikeInfoUtility.onSelectFieldChange}
        >
          <option value="Red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          required
        </select>

        <label>Bike Type:</label>
        <select
        name="bikeTypeId"
        id="bikeTypeId"
          value={bikeInfoUtility.bikeinfo.bikeTypeId}
          onChange={bikeInfoUtility.onSelectFieldChange}
        >
          <option>--Select--</option>
      
          <option value={1}>Road</option>
          <option value={2}>Hybrid</option>
          <option value={3}>BMX</option>
          <option value={4}>Mountain</option>
          required
        </select>
        <br />

        <label>Mileage</label>
        <input
          type="number"
          name="milage"
          id="milage"
          placeholder="Bike Milage"
          maxLength={6}
          value={bikeInfoUtility.bikeinfo.milage}
          onChange={bikeInfoUtility.handelChangeNumberBike}
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
          value={bikeInfoUtility.bikeinfo.price}
          onChange={bikeInfoUtility.handelChangeNumberBike}
          
        />

        <br />
        <label>Description:</label>
        <textarea
          rows={5}
          cols={20}
          placeholder="Description"
          name="description"
          maxLength={100}
          autoComplete="off"
          value={bikeInfoUtility.bikeinfo.description}
          onChange={bikeInfoUtility.onTextAreaChange}
        ></textarea>
        <div className="button">
          <button onClick={bikeInfoUtility.handleSaveBikeInfo}>Save</button>
          <br />
          <button onClick={() => bikeInfoUtility.handleShowList()}>
            ShowList
          </button>
        </div>
      </div>
    </div>
  );
}
