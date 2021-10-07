/* eslint-disable import/prefer-default-export */
import { IProfile } from '../interfaces/profile.interfaces';
import * as profileRepo from '../repositories/profile.repo';

// Save new profile
export const postProfile = async (profile: IProfile) => {
  const addProfile = await profileRepo.postProfile(profile);
  return addProfile;
};

// Get-profile
export const getProfile = async (name: string) => {
  const profile: IProfile = await profileRepo.getProfile(name);
  return profile;
};
