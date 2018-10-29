import mongoose from 'mongoose';
import constants from './constants';

try {
  mongoose.connect(constants.MONGO_URL, { useNewUrlParser: true });
  mongoose.set('useCreateIndex', true);
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL);
}

mongoose.connection
  .once('open', () => {
    console.log('Mongo running');
  })
  .on('error', (err) => {
    throw err;
  });
