import mongoose, { mongo } from 'mongoose';

const shoppingSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products'
  }],
  created_at: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Shopping', shoppingSchema);