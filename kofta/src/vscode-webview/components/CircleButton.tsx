import React from "react";

interface CircleButtonProps {
  size?: number;
  onClick: () => void;
}

export const CircleButton: React.FC<CircleButtonProps> = ({
  size = 60,
  onClick,
  children,
}) => {
  return (
    <button
      style={{
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        border: ".5px solid rgba(255, 255, 255, 0.4)",
        height: size,
        width: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
