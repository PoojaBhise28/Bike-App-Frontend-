import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BikeModel from "../Model/BikeModel";
import {
  CreateBikeInfo,
  UpdateBikeInfo,
  getBikeInfoById,
} from "../Service/BikeService";
import CustomAlert from "../Component/CustomAlert";
import SearchModel from "../Model/SearchModel";

export default function BikeInfoUtility(id: number) {
  const navigate = useNavigate();
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
    typeName: ""
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
  const [bikeInfo, setBikeInfo] = useState<BikeModel>(initialValuebike);
  const [bikeinfo, setBikeinfo] = useState<SearchModel>(initialValue);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [showAlert, setShowAlert] = useState(false);
  var message:string="";

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id > 0) {
          const response = await getBikeInfoById(id);
          if (response.data) {
            setBikeinfo(response.data);
          }
        }
      } catch (error) {
        console.error("Error fetching bike information:", error);
      }
    };

    fetchData();

    // return () => {

    // };
  }, [id]);

  const validateBikeFields = (bikeInfo: BikeModel) => {
    const { bikeModel, price, color, bikeTypeId, milage, bikeManufracture, description } = bikeInfo;
    const newErrors: Partial<Record<string, string>> = {};
  
    if (!bikeModel.trim()) {
      newErrors.bikeModel = "Bike model is required";
      message ="Bike model is required";
      setShowAlert(true);

    } else if (bikeModel.length > 40) {
      newErrors.bikeModel = "Bike model must be less than 40 characters";
      message="Bike model must be less than 40 characters";
      setShowAlert(true);
    }
  
    if (!price || isNaN(price) || price <= 0) {
      newErrors.price = "Price must be a positive number";
      message="Price must be a positive number";
      setShowAlert(true);
    }
  
    if (!color.trim()) {
      newErrors.color = "Color is required";
      message="Color is required";
      setShowAlert(true);
    }
  
    if (!milage || isNaN(milage) || milage <= 0 ) {
      newErrors.milage = "Mileage must be a positive number and less than 100";
      message= "Mileage must be a positive number and less than 100";
      setShowAlert(true);
    }
  
    if (!bikeManufracture.trim()) {
      newErrors.bikeManufracture = "Bike manufacture is required";
      message= "Bike manufacture is required";
      setShowAlert(true);
    }
  
    // if (!description.trim()) {
    //   newErrors.description = "Description is required";
    // }
  
    if (bikeTypeId === 0) {
      newErrors.bikeTypeId = "Please select a bike type";
      message= "Please select a bike type";
      setShowAlert(true);
    }
  
    return newErrors;
  };
  
  const handleSaveBikeInfo = async () => {
  
    const newErrors = validateBikeFields(bikeInfo);
    if (Object.keys(newErrors).length > 0) {

      setErrors(newErrors);
      return;
    }
    else{
     
    try {
      if (bikeinfo.id !== 0) {
        await UpdateBikeInfo(bikeinfo.id, bikeInfo);
        navigate("/showlist");
        console.log("Bike data updated successfully.");
       
      } else {
        await CreateBikeInfo(bikeInfo);
        navigate("/showlist");
        console.log("New bike data created successfully.");
        console.log(bikeinfo);
       
      }
      setBikeinfo(initialValue);
      setErrors({});
    } catch (error) {
      console.error("Error saving bike information:", error);
    }
  }
  };

  


  // const handleSaveBikeInfo = async () => {
    
  //   try {
  //     if (bikeinfo.id !== 0) {
  //       await UpdateBikeInfo(bikeinfo.id, bikeinfo);

  //       console.log("Bike data updated successfully.");
  //       navigate("/showlist");
  //     } else {
  //       await CreateBikeInfo(bikeinfo);

  //       console.log("New bike data created successfully.");
  //       console.log(bikeinfo);
  //       // navigate("/showlist");
  //     }
  //     setBikeinfo(initialValue);
  //     setErrors({});
  //   } catch (error) {
  //     console.error("Error saving bike information:", error);
  //   }
  // };

  const handleShowList = () => {
    navigate("/showlist");
    
  };

  const onSelectFieldChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.currentTarget.name;
    //alert(JSON.stringify(bikeinfo));
    const newValue = event.currentTarget.value;
    // alert(name + "   " + newValue);

    //setBikeinfo((prevState) => ({ ...prevState, [name]: newValue }));
    setBikeinfo({ ...bikeinfo, [name]: newValue });
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const newValue = event.currentTarget.value;
    setBikeinfo((prev) => ({ ...prev, [name]: newValue }));
  };

  const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.currentTarget.name;
    const newValue = event.currentTarget.value;
    setBikeinfo((prev) => ({ ...prev, [name]: newValue }));
  };
  const handelChangeNumberBike = (e: any) => {
    // alert(e.target.name);
    var name = e.target.name;
    var newValue = e.target.value;
    setBikeinfo((prev) => ({ ...prev, [name]: newValue }));
  };
  const onChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setBikeinfo((prev) => ({ ...prev, color: newValue }));
  };
  return {
    bikeinfo,
    errors,
    handleSaveBikeInfo,
    handleShowList,
    onSelectFieldChange,
    onInputChange,
    onTextAreaChange,
    handelChangeNumberBike,
    onChangeColor,
    setBikeinfo,
    message,
    setErrors,
    showAlert,
    setShowAlert

  };
}

