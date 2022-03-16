import { api } from '../../../../config';
import { User } from './types';

export const index = async () => {
  const response = await api.get<User[]>(`/orgs/facebook/public_members`);

  return response;
};
