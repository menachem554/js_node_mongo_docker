import express from 'express';
import * as profileController from '../controllers/profile.controllers';

const router = express.Router();

router.get('/main', profileController.mainPage);
router.get('/profile-picture', profileController.profilePicture);
router.post('/create-profile', profileController.updateProfile);
router.post('/update-profile', profileController.updateProfile);
router.get('/get-profile/', profileController.getProfile);

export default router;
