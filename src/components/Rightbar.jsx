import { Container } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    }
}))

const Rightbar = () => {
    const classes = useStyles()
    return <Container className={classes.container}>
        rightbar
    </Container>
};

export default Rightbar;