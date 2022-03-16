import { api } from '../../../../config';
import { UserProfile } from './types';

export const show = async (user: string) => {
  const response = await api.get<UserProfile>(`/users/${user}`);

  return response;
};
