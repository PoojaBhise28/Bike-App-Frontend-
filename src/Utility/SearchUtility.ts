import { useState, useEffect } from "react";

import { Navigate, useNavigate } from "react-router-dom";
import {   getBikeInfoByString } from "../Service/BikeService";
import BikeModel from "../Model/BikeModel";
import axios from "axios";



const SearchUtility = () => {

  const initialValue: BikeModel = {
    bikeModel: "",
    price: 0,
    color: "",
    bikeTypeId: 0,
    milage: 0,
    bikeManufracture: "",
    description: "",
    id: 0,
    search: ""
  };
  const [ search, setSearch ] = useState("");
 
  const [bikeInfo, setBikeInfo] = useState<BikeModel[]>([initialValue]);




useEffect(() => {
  fetchBikeList();
}, []);


const fetchBikeList = async () => {
  try {
   // const response = await getBikeInfoById(15);
     const response = await getBikeInfoByString(search);
    alert(JSON.stringify(response.data))
     setBikeInfo(response.data);
  } catch (error) {
    console.error("Error fetching bike list:", error);
  }
};
console.log("object", bikeInfo);

 


const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const newValue = event.currentTarget.value;
  setSearch(newValue);
};


const handleSearch = async () => {

 // window.alert('Data fetched successfully!');
  alert("handle search")
   var res = await axios.get(`http://localhost:5255/api/bike/search?search=${search}`)
   .then((res) => setBikeInfo(res.data));

   alert("data set? ? ? ")
};
 
  return {

    handleSearchInputChange,bikeInfo,setBikeInfo,handleSearch
};
}
export default SearchUtility;
