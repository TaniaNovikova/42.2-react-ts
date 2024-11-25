export interface ButtonProps {
  name?: string | undefined;
  type?: "submit" | "reset" | "button" | undefined;
   onClick: React.MouseEventHandler<HTMLButtonElement>;
  // onClick: (event: MouseEvent) => void;
  className?: string | undefined;
}
