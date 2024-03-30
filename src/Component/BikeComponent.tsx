import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/BikeStyle.css";
import BikeInfoUtility from "../Utility/BikeInfoUtility";
import { handelChangeGenric } from "../APICONFIG";
import CustomAlert from "./CustomAlert";


export default function BikeComponent() {
  const { id = 0 } = useParams();
  const bikeInfoUtility = BikeInfoUtility(+id);

  return (
    <div className="bike-Container">
      <div className="BikeData">
        <h1>Bike Information </h1>
        <div className="BikeModel">
          <label>Bike Model</label>
          <select
            name="bikeModelId"
            id="bikeModelId"
            value={bikeInfoUtility.bikeinfo.bikeModelId}
            onChange={bikeInfoUtility.onSelectFieldChange}
          >
            <option>--Select Model</option>
            <option value={1}>Honda</option>
            <option value={2}>Maruti</option>
            <option value={3}>Austro</option>
            <option value={4}>Activa</option>
            <option value={5}>Bajaj</option>
            <option value={6}>Ninja</option>
          </select>
        </div>
        {bikeInfoUtility.showAlert && (
          <CustomAlert message={bikeInfoUtility.message} />
        )}
       {/* { <TestCompnent />}
        <SearchComponent/>
        {<CustomAlert message= {bikeInfoUtility.message}/>}
        <TestAnzar></TestAnzar>
        <CustomAlert message= "dsadsa" /> */}
  
        {/* {bikeInfoUtility.errors.bikeModel && <p className="error-message">{bikeInfoUtility.errors.bikeModel}</p>} */}
        <br />
        <div className="BikeManufracture">
          <label>Bike Model</label>
          <select
            name="bikeManufractureId"
            id="bikeManufractureId"
            value={bikeInfoUtility.bikeinfo.bikeManufractureId}
            onChange={bikeInfoUtility.onSelectFieldChange}
          >
            <option>--Select Bike Manufracturer</option>
            <option value={1}>Tata</option>
            <option value={2}>Honda</option>
            <option value={3}>Hero Honda</option>
            <option value={4}>Bajaj</option>
          </select>
        </div>
        {/* {bikeInfoUtility.errors.bikeManufracture && (<p className="error-message">{bikeInfoUtility.errors.bikeManufracture} </p>)} */}
        <br />
        <div className="Color-BikeType">
          <div className="color">
            <label>Bike color</label>

            <select
              value={bikeInfoUtility.bikeinfo.colorId}
              onChange={bikeInfoUtility.onSelectFieldChange}
              name="color"
              id="color"
            >
              <option>--Select--</option>
              <option value="Red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
            </select>
            {/* {bikeInfoUtility.errors.color && (<p className="error-message">{bikeInfoUtility.errors.color}</p>)} */}
          </div>

          <div className="type">
            <label>Bike Type:</label>
            <select
              name="bikeTypeId"
              id="bikeTypeId"
              value={bikeInfoUtility.bikeinfo.bikeTypeId}
              onChange={bikeInfoUtility.onSelectFieldChange}
              style={{ marginRight: "18px" }}
            >
              <option>--Select--</option>
              <option value={1}>Road</option>
              <option value={2}>Hybrid</option>
              <option value={3}>BMX</option>
              <option value={4}>Mountain</option>
              required
            </select>
          
          </div>
        </div>
        <br />

        <div className="milage-price">
          <div className="mileage">
            <label>Mileage</label>
            <input
              type="number"
              name="milage"
              id="milage"
              placeholder="Bike Milage"
              maxLength={2}
              value={bikeInfoUtility.bikeinfo.milage}
              onChange={bikeInfoUtility.handelChangeNumberBike}
              style={{ marginRight: "30px" }}
            />

            {/* {bikeInfoUtility.errors.milage && <p className="error-message">{bikeInfoUtility.errors.milage}</p>}
             */}
          </div>

          <div className="price">
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
             {/* {bikeInfoUtility.errors.price && ( <p className="error-message">{bikeInfoUtility.errors.price}</p>)} */}

          </div>
        </div>

        <br />
        <label>Description:</label>
        <textarea
          rows={4}
          cols={20}
          placeholder="Description"
          name="description"
          maxLength={100}
          autoComplete="off"
          value={bikeInfoUtility.bikeinfo.description}
          onChange={bikeInfoUtility.onTextAreaChange}
        ></textarea>
        
        <div className="button">
          <button onClick={bikeInfoUtility.handleSaveBikeInfo}>
            {+id > 0 ? "Update" : "Save"}
          </button>

          <button onClick={() => bikeInfoUtility.handleShowList()}>
            ShowList
          </button>
        </div>

        <div>
           {bikeInfoUtility.errors.bikeModel && <p className="error-message">{bikeInfoUtility.errors.bikeModel}</p>}
           {bikeInfoUtility.errors.bikeManufracture && (<p className="error-message">{bikeInfoUtility.errors.bikeManufracture} </p>)}
           {bikeInfoUtility.errors.bikeTypeId && ( <p className="error-message">{bikeInfoUtility.errors.bikeTypeId} </p>)}
           {bikeInfoUtility.errors.color && (<p className="error-message">{bikeInfoUtility.errors.color}</p>)}
           {bikeInfoUtility.errors.price && ( <p className="error-message">{bikeInfoUtility.errors.price}</p>)}
           {bikeInfoUtility.errors.milage && <p className="error-message">{bikeInfoUtility.errors.milage}</p>}
           {bikeInfoUtility.errors.description && (<p className="error-message">{bikeInfoUtility.errors.description}</p>)}
        </div>


      </div>
    </div>
  );
}
