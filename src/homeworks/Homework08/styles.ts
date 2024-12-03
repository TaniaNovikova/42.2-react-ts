import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Homework08Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  /* background-color: black; */
`;

export const InputFieldsWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 650px;
  gap: 40px;
  height: fit-content;
`;

export const InputControl = styled.div`
  height: 80px;
  background-color: whitesmoke;
  border: 2px solid #1f27f5;
  border-radius: 4px;
  padding: 0px 10px 10px 10px;
`;

const boxBasicStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 70px;
  height: fit-content;
  border: 2px solid;
  border-radius: 8px;
`;

const blockWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 30px;
`;
export const ProductWrapper = styled.div`
  ${blockWrapper}
  width: 400px
`;

export const QuantityWrapper = styled.div`
  ${blockWrapper}
  width:100px;
`;

export const ProductBox = styled.div`
  ${boxBasicStyles}
  background: #aed4b3;
  color: #1e5926;
`;

export const QuantityBox = styled.div`
  ${boxBasicStyles}
  background: #a4dadb;
  color: #235354;
`;

export const AllWrapper = styled.div`
  width: 900px;
  height: fit-content;
  display: flex;
  gap: 40px;
  justify-content: space-evenly;
`;

export const ButtonControl = styled.div`
  height: 40px;
  width: 200px;
`;
