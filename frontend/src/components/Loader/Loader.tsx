import React from "react";
import { createUseStyles } from "react-jss";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { CustomTheme, theme } from "../../theme/theme";

export interface LoadingScreenProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  loaderContainer: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderContainer}>
      <Loader
        type="Puff"
        color={theme.colors.primaryColor}
        height={200}
        width={200}
        visible
      />
    </div>
  );
};

export { LoadingScreen };
