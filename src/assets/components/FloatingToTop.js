import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
        color: "yellow",
        position: "fixed",
        bottom: "2%",
        right: "2%",
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const FloatingToTop = () => {
    const classes = useStyles();

    const [view, setView] = React.useState(0);

    const visible = () => {
        if (typeof window !== "undefined") {
            window.onscroll = () => {
                let currentScrollPos = window.pageYOffset;
                let maxScroll = document.body.scrollHeight - window.innerHeight;
                if (currentScrollPos > 0 && currentScrollPos < maxScroll) {
                    setView(1);
                } else {
                    setView(0);
                }
            };
        }
    };

    React.useEffect(() => {
        visible();
    }, [view, setView]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={classes.root} style={{ opacity: view }}>
            <Fab color="primary" aria-label="Top" onClick={handleClick}>
                <ArrowUpwardIcon />
            </Fab>
        </div>
    );
};

export default FloatingToTop;
