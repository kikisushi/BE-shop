import express from 'express';
import { SERVER_PORT } from './constants/env.constant';

const app = express();
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
  return res.json(`노드몬은 자동으로 서버를 열고 닫습니다.`);
});
app.listen(SERVER_PORT, () => {
  console.log(`*** Server is listening on ${port}`);
});
