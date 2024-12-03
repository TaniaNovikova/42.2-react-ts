import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ProductWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  list-style: none;
`;

const styledBlock = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  height: fit-content;
  border: 1px solid;
`;
export const StyledBox1 = styled.div`
  ${styledBlock};
  width: 500px;
  background-color: lemonchiffon;
  color: rgb(115, 110, 61);
`;

export const StyledBox2 = styled.div`
  ${styledBlock};
  width: 400px;
  background-color: rgb(245, 255, 205);
  color: rgb(95, 103, 63);
`;

export const InputProductControl = styled.div`
  width: 400px;
`;
export const InputQuantityControl = styled.div`
  width: 400px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  height: 150px;
  border: 1px solid rgb(92, 72, 48);
  padding: 20px;
  background-color: bisque;
`;

export const QuantityRemoveButtonWrapper = styled.div`
  display: flex;
`;
