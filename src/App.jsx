import { Button, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.myButton,
  }
}))

const App = () => {
  const classes = useStyles()
  return (<Button variant="contained" size="large" startIcon={<Person />} className={classes.button} >Material UI</Button>)
};

export default App;