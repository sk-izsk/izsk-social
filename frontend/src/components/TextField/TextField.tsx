import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";
import { CustomTheme } from "../../theme/theme";

export interface TextFieldProps {
  type?: string;
  onChange?: () => void;
  name?: string;
  isDisable?: boolean;
  placeHolder?: string;
  className?: string;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    outline: "none",
    borderRadius: 8,
    border: `${theme.colors.gray} solid 1px`,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
}));

const TextField: React.FC<TextFieldProps> = ({
  type,
  onChange,
  name,
  isDisable = false,
  placeHolder,
  className,
}) => {
  const classes = useStyles();

  return (
    // <div className={classes.mainContainer}>
    <input
      className={clsx([classes.mainContainer, className])}
      type={type}
      disabled={isDisable}
      name={name}
      onChange={onChange}
      placeholder={placeHolder}
    />
    // </div>
  );
};

export { TextField };
