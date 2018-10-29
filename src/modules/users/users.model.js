import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  }
});

export default mongoose.model('User', userSchema);