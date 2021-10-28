import { Avatar, AvatarGroup, Container, Divider, ImageList, ImageListItem, Link, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: "#555"
    },
    link: {
        marginRight: theme.spacing(2),
        color: "#555",
        fontSize: 16,
        textDecoration:"none"
    }
}))

const Rightbar = () => {
    const classes = useStyles()
    return <Container className={classes.container}>
        <Typography gutterBottom className={classes.title}>Online Friends</Typography>
        <AvatarGroup max={5} style={{ marginBottom: 20, justifyContent: "flex-end" }}>
            <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
            />
            <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
            />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/6.jpg"
            />
            <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/7.jpg"
            />
            <Avatar
                alt="Trevor Henderson"
                src="https://material-ui.com/static/images/avatar/8.jpg"
            />
        </AvatarGroup>
        <Typography gutterBottom className={classes.title}>Gallery</Typography>
        <ImageList
            rowHeight={110}
            style={{ marginBottom: 20 }}
            cols={2}
            variant="quilted"
        >
            <ImageListItem>
                <img
                    src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format"
                    alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img
                    src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format"
                    alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img
                    src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format"
                    alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img
                    src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=242&h=242&fit=crop&auto=format"
                    alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img
                    src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=121&h=121&fit=crop&auto=format"
                    alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img
                    src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=242&h=121&fit=crop&auto=format"
                    alt=""
                />
            </ImageListItem>
        </ImageList>
        <Typography gutterBottom className={classes.title}>
            Categories
        </Typography>
        <Link href="#" className={classes.link} variant="body2">
            Sport
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Food
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Music
        </Link>
        <Divider flexItem style={{ marginBottom: 5 }} />
        <Link href="#" className={classes.link} variant="body2">
            Movies
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Science
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Netflix
        </Link>
    </Container>
};

export default Rightbar;