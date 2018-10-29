import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Product name is required']
  }
});

export default mongoose.model('Products', productsSchema);