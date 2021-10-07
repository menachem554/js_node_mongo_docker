import express from 'express';
import * as profileController from '../controllers/profile.controllers';

const router = express.Router();

router.get('/', profileController.mainPage);
router.get('/profile-picture', profileController.profilePicture);
router.post('/update-profile', profileController.updateProfile);
router.post('/get-profile', profileController.getProfile);

export default router;
