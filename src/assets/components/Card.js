import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NewsModal from "./NewsModal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        marginTop: "10px",
        marginBottom: "10px",
        cursor: "pointer",
        minHeight: "200px",
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        minWidth: 151,
    },
    controls: {
        display: "flex",
        alignItems: "center",
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

const NewsCard = ({ title, description, image, content, url }) => {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    return (
        <>
            <NewsModal
                open={open}
                setOpen={setOpen}
                title={title}
                description={description}
                image={image}
                content={content}
                url={url}
            />
            <Card className={classes.root} onClick={handleClick}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        {/* <Typography variant="subtitle1" color="textSecondary">
                            {description}
                        </Typography> */}
                    </CardContent>
                </div>
                <CardMedia className={classes.cover} image={image} />
            </Card>
        </>
    );
};

export default React.memo(withRouter(NewsCard));
