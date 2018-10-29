import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';

export default app => {
  if(process.env.NODE_ENV === 'production') {
    app.use(compression());
    app.use(helmet());
    app.use(cors());
  }
  app.use(cors());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  if(process.env.NODE_ENV === 'development') {
    app.use(morgan('combined'));
  }
};
