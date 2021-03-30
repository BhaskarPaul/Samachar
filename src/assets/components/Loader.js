import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    loader: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
}));

const Loader = () => {
    const classes = useStyle();
    return (
        <div className={classes.loader}>
            <CircularProgress />
        </div>
    );
};

export default React.memo(Loader);
