import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minWidth: 500,
        [theme.breakpoints.down("md")]: {
            maxWidth: "80vw",
        },
    },
});

const ExpandCard = ({ title, image, content, url }) => {
    const classes = useStyles();

    let newContent = "";
    if (content) {
        for (let i = 0; i < content.length; i++) {
            if (content[i] === "[") break;
            else newContent += content[i];
        }
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="image not found"
                    height="250"
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {newContent}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => window.open(url, "_blank")}
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default React.memo(withRouter(ExpandCard));
