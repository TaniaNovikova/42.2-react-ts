// export interface ButtonProps {
//   name: string | undefined;
//   type?: "submit" | "reset" | "button";
//   // onClick: React.MouseEventHandler<HTMLButtonElement>;
//   onClick?: () => void;
// }

type ButtonType = "button" | 'submit' | "reset";

export interface ButtonProps {
  name: string;
  type?: ButtonType;
  onClick?: () => void;
}

