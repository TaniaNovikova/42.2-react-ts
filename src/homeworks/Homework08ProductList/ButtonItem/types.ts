// export interface ButtonProps {
//   name: string | undefined;
//   type?: "submit" | "reset" | "button";
//   // onClick: React.MouseEventHandler<HTMLButtonElement>;
//   onClick?: () => void;
// }

export interface ButtonProps {
  onClick: () => void;
}
