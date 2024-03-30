import { useState, useEffect } from "react";

import { Navigate, useNavigate } from "react-router-dom";

import BikeModel from "../Model/BikeModel";
import axios from "axios";
import { searchAdvance } from "../Service/BikeService";
import SearchModel from "../Model/SearchModel";

const AdvanceSearchUtility = () => {
  const initialValue: SearchModel = {
    id: 0,
    bikeModelId: 0,
    modelName: "",
    price: 0,
    colorId: 0,
    colourName: "",
    fuelType: "",
    milage: 0,
    bikeManufractureId: 0,
    bikeManufractureName: "",
    description: "",
    bikeTypeId: 0,
    typeName: "",
  };
  const initialValuebike: BikeModel = {
    bikeModel: "",
    price: 0,
    color: "",
    bikeTypeId: 0,
    milage: 0,
    bikeManufracture: "",
    description: "",
    id: 0,
    fuelType: ""
  };


  const [searchInfo, setsearchInfo] = useState<SearchModel>(initialValue);
  const [bikeinfo, setBikeinfo] = useState<BikeModel[]>([]);

  const fetchData = async () => {
    try {
      alert("fetchdata");
      const response = await searchAdvance(searchInfo);
      setBikeinfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAdvanceSearch = () => {
    alert("Hey ");
    // fetchData();
  };
  async function handleSubmit() {
    alert("Function not implemented.");
    await fetchData();
    alert("Function not implemented.");
  }

  

  const onSelectFieldChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.currentTarget.name;
    //alert(JSON.stringify(bikeInfo));
    const newValue = event.currentTarget.value;
    // alert(name + "   " + newValue);

    //setbikeInfo((prevState) => ({ ...prevState, [name]: newValue }));
    setsearchInfo((prev) => ({ ...prev, [name]: newValue }));
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const newValue = event.currentTarget.value;
    setsearchInfo((prev) => ({ ...prev, [name]: newValue }));
  };

  const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.currentTarget.name;
    const newValue = event.currentTarget.value;
    setBikeinfo((prev) => ({ ...prev, [name]: newValue }));
  };
  const handelChangeNumberBike = (e: any) => {
    var name = e.target.name;
    var newValue = e.target.value;
    setsearchInfo((prev) => ({ ...prev, [name]: newValue }));
  };

  return {
    handleSubmit,
    bikeinfo,
    setBikeinfo,
    handleAdvanceSearch,
    handelChangeNumberBike,
    onTextAreaChange,
    onInputChange,
    onSelectFieldChange,
    searchInfo,
    setsearchInfo

  };
};
export default AdvanceSearchUtility;
