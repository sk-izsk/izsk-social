import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { Checkbox } from "semantic-ui-react";
import { AnimatedBG, Button, TextField } from "../../components";
import { CustomTheme, theme } from "../../theme/theme";

export interface SignUpProps {}

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
  button: {
    backgroundColor: theme.colors.primaryColor,
  },
}));

const SignUp: React.FC<SignUpProps> = () => {
  const classes = useStyles();

  return (
    <AnimatedBG type="circle">
      <div className={classes.mainContainer}>
        <div>
          <h2 className={classes.headerText}>Register</h2>
          <hr color={theme.colors.gray} />
        </div>
        <TextField placeHolder="Enter your email" type="email" />
        <TextField placeHolder="Enter your password" type="password" />
        <TextField placeHolder="Re enter your password" type="password" />
        <div className={classes.buttonContainer}>
          <div>
            <Checkbox label={<label>Remember me</label>} />
          </div>
          <Button>Submit</Button>
        </div>
        <div className={classes.textContainer}>
          <hr color={theme.colors.gray} />
          <div>
            Already have an account ?
            <Link to="/login" className={classes.link}>
              Login here.
            </Link>
          </div>
        </div>
      </div>
    </AnimatedBG>
  );
};

export default SignUp;
