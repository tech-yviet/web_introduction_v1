import axiosInstance from "@/core/axiosInstance";
import { dispatch, store } from "@/store";
import { doctorsA as A, doctorsS as S } from ".";
import { API_DOCTORS } from "@/core/config";
import isEmpty from "lodash/isEmpty";

const getDoctors = () => {
  return async () => {
    try {
      const response = await axiosInstance.get(
        `${API_DOCTORS.introduction.doctors}?page=0&size=10`
      );

      if (response.status === 200) {
        dispatch(A.setDoctors(response.data.data.content));
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      dispatch(A.setDoctors([]));
      console.log(error);
    }
  };
};

const getMainSpecialties = () => {
  return async () => {
    try {
      const response = await axiosInstance.get(
        `${API_DOCTORS.introduction.listSpecialties}`
      );

      if (response.status === 200) {
        dispatch(A.setMainSpecialties(response.data.data));
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      dispatch(A.setMainSpecialties([]));
      console.log(error);
    }
  };
};

const getDoctorsByFilter = () => {
  return async () => {
    try {
      const rootState = store.getState();
      const mainSpecialtyFilter = S.selectMainSpecialtyFilter(rootState);
      const searchValue = S.selectSearchValue(rootState);

      let response;

      if (!isEmpty(mainSpecialtyFilter) || !isEmpty(searchValue)) {
        response = await axiosInstance.get(
          `${API_DOCTORS.introduction.doctors}`,
          {
            params: {
              page: 0,
              size: 10,
              ...(!isEmpty(mainSpecialtyFilter) && {
                mainSpecialties: mainSpecialtyFilter.join(","),
              }),
              ...(!isEmpty(searchValue) && {
                doctorName: searchValue,
              }),
            },
          }
        );
      } else {
        response = await axiosInstance.get(
          `${API_DOCTORS.introduction.doctors}?page=0&size=10`
        );
      }

      if (response.status === 200) {
        dispatch(A.setDoctors(response.data.data.content));
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      dispatch(A.setDoctors([]));
      console.log(error);
    }
  };
};

const init = () => {
  return async () => {
    dispatch(getDoctors());
    dispatch(getMainSpecialties());
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
  getDoctorsByFilter,
  getDoctors,
};
