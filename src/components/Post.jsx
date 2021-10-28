import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]:{
            height:150
        }
    },
    card:{
        marginBottom:theme.spacing(5)
    }
}))

const Post = () => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    title="My Post"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">My First Post</Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ipsam deserunt repellat possimus, totam quae tempore tempora voluptatem magnam eligendi! Ex sit aut inventore saepe et fugit officiis quo quidem?
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    )
};

export default Post;