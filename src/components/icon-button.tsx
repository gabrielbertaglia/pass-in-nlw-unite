import { ComponentProps } from "react";

interface ButtonProps {
  typeBtn: "transparent" | "normal";
  children: React.ReactNode;
}

interface IconButtonProps extends ComponentProps<"button"> {
  typeBtn: "transparent" | "normal";
}

const ButtonTransparent = (props: ButtonProps) => {
  return (
    <button
      className="bg-black/20 border border-white/10 rounded-md p-1.5"
      {...props}
    />
  );
};

const ButtonNormal = (props: ButtonProps) => {
  return (
    <button
      className="bg-white/10 border border-white/10 rounded-md p-1.5"
      {...props}
    />
  );
};

export function IconButton({ typeBtn, children }: IconButtonProps) {
  const buttonComponents = {
    transparent: ButtonTransparent,
    normal: ButtonNormal,
  };

  const CurrentComponent = buttonComponents[typeBtn];

  return <CurrentComponent typeBtn={typeBtn}>{children}</CurrentComponent>;
}
