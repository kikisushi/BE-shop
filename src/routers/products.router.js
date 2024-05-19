import express from 'express';
import { Product } from '../schemas/product.schema.js';
const productsRouter = express.Router();

// 상품생성 (CREATE)
productsRouter.post('/products', async (req, res) => {
  //상품 정보 파싱하기
  const { name, description, manager, password } = req.body;
  //DB에 저장하기
  const product = new Product({ name, description, manager, password });
  let data = await product.save();
  data = { ...data.toJSON(), password: undefined };
  // 완료 메세지 반환하기
  return res.status(201).json({
    status: 201,
    message: '상품 생성에 성공했습니다.',
    data,
  });
});
// 상품 목록 조회 (READ)
productsRouter.get('/products', (req, res) => {
  //DB에서 조회하기(생성일시 기준 내림차순 정렬)
  //완료 메시지 반환하기
  //상품 상세조회 (READ)
});

productsRouter.get('/products/:id', (req, res) => {
  //상품 ID 파싱하기
  //DB에서 조회하기(생성일시 기준 내림차순 정렬)
  //완료 메시지 반환하기
});

//상품 수정 (UPDATE)
productsRouter.put('/products/:id', (req, res) => {
  //상품 ID 파싱하기
  // 상품 수정 정보 파싱하기
  //DB에서 조회하기(패스워드 포함)
  //비밀번호 일치 여부 확인
  //DB에 갱신하기
  //완료 메시지 반환하기
});
//상품 삭제 (DELETE)
productsRouter.get('/products/:id', (req, res) => {
  //상품 ID 파싱하기
  //DB에서 조회하기(패스워드 포함)
  //비밀번호 일치 여부 확인
  //DB에서 삭제하기
  //완료 메시지 반환하기
});

export { productsRouter };
