/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { IProfile } from '../interfaces/profile.interfaces';
import * as profileManager from '../managers/profile.managers';

// Main Page
export const mainPage = async (_req: Request, res: Response) => {
  try {
    res.sendFile(path.join(__dirname, '../index.html'));
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// profile-picture'
export const profilePicture = async (_req: Request, res: Response) => {
  try {
    const img = fs.readFileSync(
      path.join(__dirname, '../images/profile-1.jpg')
    );
    res.writeHead(200, { 'Content-Type': 'image/jpg' });
    res.end(img, 'binary');
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// update-profile
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userProfile = {
      name: req.body.name,
      email: req.body.email,
      interests: req.body.interests,
    };
    const newProfile = await profileManager.postProfile(userProfile);
    res.status(201).send(newProfile);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// get-profile
export const getProfile = async (req: Request, res: Response) => {
  try {
    const profileName: string = req.query.name as string;
    const profile: IProfile = await profileManager.getProfile(profileName);
    res.send(profile);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
