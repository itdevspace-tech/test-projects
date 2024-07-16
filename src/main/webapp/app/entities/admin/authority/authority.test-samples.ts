import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '0f71280d-3a1d-49b3-b6b8-1fb2de9ac412',
};

export const sampleWithPartialData: IAuthority = {
  name: '9b3f1eec-fafe-4605-ba84-9e5a2d6e13c8',
};

export const sampleWithFullData: IAuthority = {
  name: 'e8376537-e2d9-44c2-bc44-fb13bb435418',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
