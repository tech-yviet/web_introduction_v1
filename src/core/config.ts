const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const BACKEND_API = {
  domain: API_ENDPOINT,
  restAPI: `${API_ENDPOINT}/api`,
};

export const API_DOCTORS = {
  introduction: {
    doctors: `${BACKEND_API.restAPI}/introduction/doctors`,
    listSpecialties: `${BACKEND_API.restAPI}/introduction/list/main-specialties`,
    cities: `${BACKEND_API.restAPI}/introduction/list/cities`,
  },
};
