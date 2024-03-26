import { useState, useEffect } from "react";

import { Navigate, useNavigate } from "react-router-dom";
import { DeleteBikeInfoById, getBikeInfoById } from "../Service/BikeService";
import BikeModel from "../Model/BikeModel";



const ShowListUtility = () => {
  const [bikeInfo, setbikeInfo] = useState<BikeModel[]>([]);
 const navigate = useNavigate();
  

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Fetching bike info...");
        const bikeRes = await getBikeInfoById(15);
        console.log("bike info:", bikeRes.data);
        
       
        setbikeInfo(bikeRes.data);
      }
       catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    fetchData();
  }, []);
  
  const handleUpdateBike= (id: number) => {
    navigate("/bike/" + id);
  };
 


  const handleDeleteBike = async (id: number) => {
    const confirmation = window.confirm("Are you sure you want to delete this user?");
    if (confirmation) {
      try {
        await DeleteBikeInfoById(id);
        alert("User deleted successfully!");
        
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("An error occurred while deleting user. Please try again later.");
      }
    }
  };



  return {

    bikeInfo,setbikeInfo,handleDeleteBike,handleUpdateBike
};
}
export default ShowListUtility;
