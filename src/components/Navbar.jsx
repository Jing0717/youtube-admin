import { alpha, AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from "@mui/material";
import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            display: (props) => props.open ? "flex" : "none",
            width: "70%"
        }
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1)
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    icons: {
        alignItems: "center",
        display: (props) => (props.open ? "none" : "flex"),
    },
    badge: {
        marginRight: theme.spacing(2)
    }

}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({ open })
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                {/* 使用h1 style,但標籤是h2 */}
                <Typography variant="h6" className={classes.logoLg}>
                    Jing Service
                </Typography>
                <Typography variant="h6" className={classes.logoSm}>
                    Jing
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder="Search..." className={classes.input} />
                    <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchButton} onClick={() => setOpen(true)} />
                    <Badge className={classes.badge} badgeContent={4} color="secondary">
                        <Mail />
                    </Badge>
                    <Badge className={classes.badge} badgeContent={2} color="secondary">
                        <Notifications />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                </div>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;