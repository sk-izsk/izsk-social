import React from "react";
import { createUseStyles } from "react-jss";
import { CustomTheme } from "../../theme/theme";

export interface CheckBoxProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    borderRadius: "50%",
    borderColor: theme.colors.gray,
  },
}));

const CheckBox: React.FC<CheckBoxProps> = () => {
  const classes = useStyles();
  return (
    <input
      style={{ borderRadius: 20 }}
      className={classes.mainContainer}
      type="checkbox"
    />
  );
};

export { CheckBox };
