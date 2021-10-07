import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  interests: {
    type: String,
    required: true,
  },
});
export default mongoose.model('profiles', profileSchema);
