import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 26284,
  login: 'RJp@L',
};

export const sampleWithPartialData: IUser = {
  id: 11128,
  login: 'DAN',
};

export const sampleWithFullData: IUser = {
  id: 14277,
  login: '3..KE',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
