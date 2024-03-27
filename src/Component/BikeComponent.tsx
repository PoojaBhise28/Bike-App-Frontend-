import React from "react";
import { useParams } from "react-router-dom";
import "../Style/BikeStyle.css";
import BikeInfoUtility from "../Utility/BikeInfoUtility";
import { handelChangeGenric } from "../APICONFIG";

export default function BikeComponent() {
  const { id = 0 } = useParams();
  const bikeInfoUtility = BikeInfoUtility(+id);

  return (
    <div className="bike-Container">
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
    {bikeInfoUtility.errors.bikeModel && <p className="error-message">{bikeInfoUtility.errors.bikeModel}</p>}
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
          // onChange={bikeInfoUtility.onInputChange}
          onChange={(e) => handelChangeGenric(e, bikeInfoUtility.setBikeinfo)}
        />
         {bikeInfoUtility.errors.bikeManufracture && <p className="error-message">{bikeInfoUtility.errors.bikeManufracture}</p>}
        <br />
        <div className="Color-BikeType">
          <div className="color">
            <label>Bike color</label>

            <select
              value={bikeInfoUtility.bikeinfo.color}
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
            {bikeInfoUtility.errors.color && <p className="error-message">{bikeInfoUtility.errors.color}</p>}
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
              {bikeInfoUtility.errors.bikeTypeId && <p className="error-message">{bikeInfoUtility.errors.bikeTypeId}</p>}
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
              {bikeInfoUtility.errors.milage && <p className="error-message">{bikeInfoUtility.errors.milage}</p>}
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
                {bikeInfoUtility.errors.price && <p className="error-message">{bikeInfoUtility.errors.price}</p>}
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
          {bikeInfoUtility.errors.description && <p className="error-message">{bikeInfoUtility.errors.description}</p>}
        <div className="button">
          <button onClick={bikeInfoUtility.handleSaveBikeInfo}>
            {+id > 0 ? "Update" : "Save"}
          </button>

          <button onClick={() => bikeInfoUtility.handleShowList()}>
            ShowList
          </button>
        </div>
      </div>
    </div>
  );
}
