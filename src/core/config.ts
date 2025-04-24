const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const BACKEND_API = {
  domain: API_ENDPOINT,
  restAPI: `${API_ENDPOINT}/api`,
};

const ENDPOINT_API_INTRODUCTION = `${API_ENDPOINT}/api/introduction`;

export const API_DOCTORS = {
  introduction: {
    doctors: `${ENDPOINT_API_INTRODUCTION}/doctors`,
    listSpecialties: `${ENDPOINT_API_INTRODUCTION}/list/main-specialties`,
    cities: `${ENDPOINT_API_INTRODUCTION}/list/cities`,
    trainingUnits: `${ENDPOINT_API_INTRODUCTION}/list/training-units`,
  },
};
