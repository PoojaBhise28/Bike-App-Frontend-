import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BikeModel from "../Model/BikeModel";
import { CreateBikeInfo, UpdateBikeInfo, getBikeInfoById } from "../Service/BikeService";


export default function BikeInfoUtility(id: number) {
  const navigate = useNavigate();
  const initialValue: BikeModel = {
    bikeModel: "",
    price: 0,
    color: "",

    milage: 0,
    bikeManufracture: "",
    description: "",
    id: id,
    bikeType:0
  };
  const [bikeinfo, setBikeinfo] = useState<BikeModel>(initialValue);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

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

  const handleSaveBikeInfo = async () => {
    try {
      if (bikeinfo.id !== 0) {
        await UpdateBikeInfo(bikeinfo.id,bikeinfo, );

        console.log("Bike data updated successfully.");
        navigate("/showlist");
      } else {
        await CreateBikeInfo(bikeinfo);

        console.log("New bike data created successfully.");
        navigate("/showlist");
      }
      setBikeinfo(initialValue);
      setErrors({});
    } catch (error) {
      console.error("Error saving bike information:", error);
    }
  };

  const handleShowList = () => {
    navigate("/showlist");
  };

  const onSelectFieldChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue = event.currentTarget.value;
    const name = event.currentTarget.name;

    setBikeinfo((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const newValue = event.currentTarget.value;
    setBikeinfo((prev) => ({ ...prev, [name]: newValue }));
  };

  const onTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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
    onChangeColor
  };
}
