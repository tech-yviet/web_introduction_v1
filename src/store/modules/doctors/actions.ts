import axiosInstance from "@/core/axiosInstance";
import { dispatch } from "@/store";
import { doctorsA as A } from ".";

const getDoctors = () => {
  return async () => {
    const response = await axiosInstance.get(
      "/introduction/doctors?page=0&size=10"
    );

    if (response.status === 200) {
      dispatch(A.setDoctors(response.data.data.content));
    }
  };
};

const init = () => {
  return async () => {
    dispatch(getDoctors());
  };
};

const destroy = () => {
  return async () => {
    dispatch(A.setDoctors([]));
  };
};

export const extendActions = {
  init,
  destroy,
};
