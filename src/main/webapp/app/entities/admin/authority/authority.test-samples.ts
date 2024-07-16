import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '13fb247c-b48b-4bf2-a8bf-12f189eac11a',
};

export const sampleWithPartialData: IAuthority = {
  name: '5259e9f6-02b6-475f-8323-2ec850031c2d',
};

export const sampleWithFullData: IAuthority = {
  name: '412b54a3-ee77-4c27-9998-d93ba0eab86c',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
