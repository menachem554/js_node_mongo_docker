/* eslint-disable new-cap */
/* eslint-disable import/prefer-default-export */
import { IProfile } from '../interfaces/profile.interfaces';
import profileSchema from '../models/profile.models';

// Save new profile
export const postProfile = async (profile: IProfile) => {
  const addProfile = new profileSchema(profile);
  await addProfile.save();
  return addProfile;
};

// Get-profile
export const getProfile = async (name: string) => {
  const profile: IProfile = await profileSchema.findOne({ name });
  return profile;
};
