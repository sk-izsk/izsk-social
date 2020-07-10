import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";
import { CustomTheme } from "../../theme/theme";

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    backgroundColor: theme.colors.primaryColor,
    color: theme.colors.white,
    border: "none",
    padding: theme.spacing(0.8),
    borderRadius: 8,
    maxWidth: 100,
    width: "100%",
    "&:focus": {
      outline: "none",
    },
  },
}));

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  const classes = useStyles();

  return (
    <button
      onClick={onClick}
      className={clsx([classes.mainContainer, className])}
    >
      {children}
    </button>
  );
};

export { Button };
