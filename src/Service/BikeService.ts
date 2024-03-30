import axios from "axios";
import { API_URL } from "../APICONFIG";

import BikeModel from "../Model/BikeModel";
import ResponseModel from "../Model/ResponseModel";
import SearchModel from "../Model/SearchModel";

export const CreateBikeInfo = async (
  bikeInfo: BikeModel
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  try {
    const response = await axios.post(`${API_URL}/bike`, bikeInfo);
    result.data = response.data;
    result.errorCode = response.status + "";
  } catch (error) {
    handleError(error, result);
  }

  return result;
};

export const getBikeInfoById = async (id: number): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  try {
    const response = await axios.get(`${API_URL}/bike/${id}`);
    result.data = response.data;
    result.errorCode = response.status + "";
  } catch (error) {
    handleError(error, result);
  }

  return result;
};

export const getBikeInfoByString = async (
  input: string
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  try {
    const response = await axios.get(`${API_URL}/bike/search?search=${input}`);
    result.data = response.data;
    result.errorCode = response.status + "";
  } catch (error) {
    handleError(error, result);
  }

  return result;
};

export const UpdateBikeInfo = async (
  bikeId: number,
  updatedInfo: BikeModel
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  try {
    const response = await axios.put(`${API_URL}/bike/${bikeId}`, updatedInfo);
    result.data = response.data;
    result.errorCode = response.status + "";
  } catch (error) {
    handleError(error, result);
  }

  return result;
};

export const DeleteBikeInfoById = async (
  id: number
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  try {
    const response = await axios.delete(`${API_URL}/bike/${id}`);
    result.data = response.data;
    result.errorCode = response.status + "";
  } catch (error) {
    handleError(error, result);
  }

  return result;
};

const handleError = (error: any, result: ResponseModel) => {
  if (error.response) {
    result.error = error.response.data;
    result.errorCode = error.response.status;
    result.message = error.message;
  } else if (error.request) {
    result.error = error.message;
    result.errorCode = error.request.code;
    result.message = error.message;
  } else {
    result.error = "No response received from server";
    result.errorCode = error.response ? error.response.status : "";
  }
};
export const GetAllBikes = async (): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  try {
    const response = await axios.get(`${API_URL}/bike`);
    result.data = response.data;
    result.errorCode = response.status + "";
  } catch (error) {
    handleError(error, result);
  }

  return result;
};

export const SearchBikes = async (
  searchQuery: string
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  try {
    const response = await axios.get(
      `${API_URL}/bikes/search?q=${searchQuery}`
    );
    result.data = response.data;
    result.errorCode = response.status + "";
  } catch (error) {
    handleError(error, result);
  }

  return result;
};

export const AdvanceSearchBikes = async (
  searchQuery: string
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  try {
    const response = await axios.post(
      `${API_URL}/bike/advanceSearch=${searchQuery}`
    );
    result.data = response.data;
    result.errorCode = response.status + "";
  } catch (error) {
    handleError(error, result);
  }

  return result;
};

export const searchAdvance = async (
  bikeInfo: SearchModel
): Promise<ResponseModel> => {
  let result: ResponseModel = {
    error: "",
    data: null,
    message: "",
    errorCode: "",
  };

  try {
    alert("advance search");
    const response = await axios.post(
      `${API_URL}/bike/advanceSearch`,
      bikeInfo
    );
    result.data = response.data;
    result.errorCode = response.status + "";
  } catch (error) {
    alert("advance search catch ");
    handleError(error, result);
  }

  return result;
};
