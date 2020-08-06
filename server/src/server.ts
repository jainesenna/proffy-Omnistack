import express, { request } from 'express';

// import cors from 'cors';
// import routes from './routes';

const app = express();

app.use(express.json());


app.get('/', (request, response) => {
  return response.json({message: 'Hello World'});
});
// app.use(cors());

// app.use(routes);

app.listen(3333);