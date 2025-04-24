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

const getCities = () => {
  return async () => {
    try {
      const response = await axiosInstance.get(
        `${API_DOCTORS.introduction.cities}`
      );

      if (response.status === 200) {
        dispatch(A.setCities(response.data.data));
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      dispatch(A.setCities([]));
      console.log(error);
    }
  };
};

const getDistricts = (id: number) => {
  return async () => {
    try {
      const response = await axiosInstance.get(
        `${API_DOCTORS.introduction.cities}/${id}/districts`
      );

      if (response.status === 200) {
        dispatch(A.setDistricts(response.data.data));
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      dispatch(A.setDistricts([]));
      console.log(error);
    }
  };
};

const getTrainingUnits = (search?: string) => {
  return async () => {
    try {
      const response = await axiosInstance.get(
        `${API_DOCTORS.introduction.trainingUnits}`,
        {
          params: {
            page: 0,
            size: 10,
            ...(!isEmpty(search) && {
              search: search,
            }),
          },
        }
      );

      if (response.status === 200) {
        dispatch(A.setTrainingUnits(response.data.data.content));
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      dispatch(A.setTrainingUnits([]));
      console.log(error);
    }
  };
};

const getDoctorsByFilter = () => {
  return async () => {
    try {
      const rootState = store.getState();
      const filterDoctors = S.selectFilterDoctors(rootState);

      let response;

      if (!isEmpty(filterDoctors)) {
        const { mainSpecialties, doctorName, cityId, districtId, unitName, genderType, score, orderDate } = filterDoctors;
        
        response = await axiosInstance.get(
          `${API_DOCTORS.introduction.doctors}`,
          {
            params: {
              page: 0,
              size: 10,
              ...(!isEmpty(mainSpecialties) && {
                mainSpecialties: mainSpecialties.join(","),
              }),
              ...(!!doctorName && {
                doctorName: doctorName,
              }),
              ...(!!cityId && {
                cityId: cityId,
              }),
              ...(!!districtId && {
                districtId: districtId,
              }),
              ...(!!unitName && {
                unitName: unitName,
              }),
              ...(!!genderType && {
                genderType: genderType,
              }),
              ...(!!score && {
                score: score,
              }),
              ...(!!orderDate && {
                orderDate: orderDate,
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
    dispatch(getCities());
    dispatch(getTrainingUnits());
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
  getDistricts,
  getTrainingUnits,
};
