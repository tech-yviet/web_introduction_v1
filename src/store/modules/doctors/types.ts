export type IDoctor = {
  doctorId: string;
  professionalRole: string;
  professionalRoleName: string;
  roleCode: string;
  firstName: string;
  lastName: string;
  fullName: string;
  genderType: string;
  mainSpecialty: string;
  unitName: string;
  urlAvatar: string;
  verified: boolean;
  score: number;
  numberOfOrders: number;
};

export interface IMainSpecialty {
  description: string;
  name: string;
}

export interface ICity {
  id: number;
  cityCode: number;
  nameVi: string;
  codeName: string;
  numOrder: number;
}

export interface IDistrict {
  activated: boolean;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  lastModifiedBy: string;
  id: number;
  cityId: number;
  districtCode: number;
  nameVi: string;
  codeName: string;
  numOrder: number;
}

export interface IFilterDoctor {
  id: string;
  value: string;
}

export type ITrainingUnit = {
  id: string;
  name: string;
  description: string;
};

export interface DoctorsState {
  doctors: IDoctor[];
  mainSpecialties: IMainSpecialty[];
  cities: ICity[];
  districts: IDistrict[];
  trainingUnits: ITrainingUnit[];
  filterDoctors: {
    mainSpecialties: string[];
    doctorName: string;
    cityId: number | null;
    districtId: number | null;
    unitName: string | null;
    genderType: string | null;
    score: string | null;
    orderDate: Date | null;
  };
  filterMobileDrawer: {
    isOpen: boolean;
  };
}

export type ContainerState = DoctorsState;
