import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { Checkbox } from "semantic-ui-react";
import { AnimatedBG, Button, TextField } from "../../components";
import { CustomTheme, theme } from "../../theme/theme";

export interface LoginProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  headerText: {
    textAlign: "center",
    color: theme.colors.secondaryColor,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(1),
    justifyContent: "space-between",
  },
  text: {
    color: theme.colors.primaryColor,
    cursor: "pointer",
  },
  textContainer: {
    margin: theme.spacing(1),
    fontSize: 14,
  },
  link: {
    color: theme.colors.primaryColor,
    marginLeft: theme.spacing(0.5),
    "&:hover": {
      color: theme.colors.primaryColor,
      textDecoration: "none",
    },
  },
}));

const Login: React.FC<LoginProps> = () => {
  const classes = useStyles();

  return (
    <AnimatedBG type="circle">
      <div className={classes.mainContainer}>
        <div>
          <h2 className={classes.headerText}>Login</h2>
          <hr color={theme.colors.gray} />
        </div>
        <TextField placeHolder="Enter your email" type="email" />
        <TextField placeHolder="Enter your password" type="password" />
        <div className={classes.buttonContainer}>
          <div>
            <Checkbox label={<label>Remember me</label>} />
          </div>
          <Button>Submit</Button>
        </div>
        <div className={classes.textContainer}>
          <div>
            Forget password ?<span className={classes.text}> Reset here.</span>
          </div>
          <hr color={theme.colors.gray} />
          <div>
            Don't have account ?
            <Link to="/signup" className={classes.link}>
              Create new account.
            </Link>
          </div>
        </div>
      </div>
    </AnimatedBG>
  );
};

export default Login;
