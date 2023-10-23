export {};

declare global {
  interface IFilterOptions {
    frontend: boolean;
    backend: boolean;
    career: boolean;
    [key: string]: boolean;
  }

  interface ICoachFormData {
    first: string;
    last: string;
    desc: string;
    rate: number;
    areas: string[];
  }

  interface ICoachDataNoId {
    firstName: string;
    lastName: string;
    description: string;
    hourlyRate: number;
    areas: string[];
  }

  interface ICoachData extends ICoachDataNoId {
    id: string;
  }

  interface ICoachDBData {
    [key: string]: ICoachDataNoId;
  }

  interface IRequestDBData {
    [key: string]: IRequestNoId;
  }

  interface IRequestNoId {
    email: string;
    message: string;
    coachId: string;
  }

  interface IRequest extends IRequestNoId {
    id: string;
  }

  interface ISignupFormData {
    email: string;
    password: string;
  }

  interface IAuthenticatedUserData {
    idToken: string;
    localId: string;
    expiresIn: string;
  }
}
