import styled from "@emotion/styled";

interface MainButtonStyledProps {
  disabled?: boolean;
}

export const MainButton = styled.button<MainButtonStyledProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  padding: 20px;
  /* background: #1f27f5; */
  border-radius: 4px;
  color: white;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  cursor: pointer;
  background: ${(props) => (props.disabled ? "grey" : "blue")};
`;