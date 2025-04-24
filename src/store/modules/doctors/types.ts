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

export interface IFilterDoctor {
  id: string;
  value: string;
}

export interface DoctorsState {
  doctors: IDoctor[];
  mainSpecialties: IMainSpecialty[];
  filterDoctors: {
    mainSpecialties: string[];
    searchValue: string;
  };
}

export type ContainerState = DoctorsState;
