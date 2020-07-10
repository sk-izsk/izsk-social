import ParticlesBg from "particles-bg";
import React from "react";
import { createUseStyles } from "react-jss";
import { CustomTheme } from "../../theme/theme";

export interface AnimatedBGProps {
  type?:
    | "circle"
    | "polygon"
    | "fountain"
    | "color"
    | "ball"
    | "lines"
    | "thick"
    | "cobweb"
    | "square"
    | "tadpole"
    | "random"
    | "list"
    | "custom"
    | undefined;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  childContainer: {
    maxWidth: 350,
    width: "100%",
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    padding: theme.spacing(1),
  },
}));

const AnimatedBG: React.FC<AnimatedBGProps> = ({ type, children }) => {
  const classes = useStyles();
  return (
    <>
      <ParticlesBg type={type} bg={true}></ParticlesBg>
      <div className={classes.mainContainer}>
        <div className={classes.childContainer}>{children}</div>
      </div>
    </>
  );
};

export { AnimatedBG };
