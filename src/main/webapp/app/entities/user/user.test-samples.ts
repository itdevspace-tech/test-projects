import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 22633,
  login: 'A2c`7@je\\<Z\\yuc\\]HIU\\ ppZY\\(E',
};

export const sampleWithPartialData: IUser = {
  id: 32007,
  login: 'bWFASp',
};

export const sampleWithFullData: IUser = {
  id: 31628,
  login: 'yq@MS2IdT\\2QtmW7r\\@rcPWIe\\Jq5Lg2n',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
