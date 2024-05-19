import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
  return res.json(`노드몬은 자동으로 서버를 열고 닫습니다.`);
});
app.listen(port, () => {
  console.log(`*** Server is listening on ${port}`);
});
