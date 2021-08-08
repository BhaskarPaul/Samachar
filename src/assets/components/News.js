import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import ReactCountryFlag from "react-country-flag";
import PublicIcon from "@material-ui/icons/Public";
import SelfCountry from "./SelfCountry";
import World from "./World";
import WifiRoundedIcon from "@material-ui/icons/WifiRounded";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import MovieCreationRoundedIcon from "@material-ui/icons/MovieCreationRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import LaptopChromebookRoundedIcon from "@material-ui/icons/LaptopChromebookRounded";
import SportsEsportsRoundedIcon from "@material-ui/icons/SportsEsportsRounded";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const News = () => {
  const classes = useStyle();

  const [showLoader, setShowLoader] = useState(true);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const handleTime = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(handleTime);
  }, []);

  useEffect(() => {
    console.log(value);
  }, [value, setValue]);

  // for location
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        console.log(data);
        setCountryName(data.country_name);
        setCountryCode(data.country_code);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

  const mainContent = () => {
    return (
      <div>
        <div className={classes.root}>
          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              centered
            >
              <Tab
                icon={<ReactCountryFlag countryCode={countryCode} svg />}
                label={`${countryName}`}
              />
              {/* <Tab icon={<PublicIcon />} label="World" /> */}

              <Tab icon={<PublicIcon />} label="General" />
              <Tab icon={<LaptopChromebookRoundedIcon />} label="Technology" />
              <Tab icon={<LocalMallRoundedIcon />} label="Bussiness" />
              <Tab icon={<MovieCreationRoundedIcon />} label="Entertainment" />
              <Tab icon={<FavoriteRoundedIcon />} label="Health" />
              <Tab icon={<WifiRoundedIcon />} label="Science" />
              <Tab icon={<SportsEsportsRoundedIcon />} label="Sports" />
            </Tabs>
          </Paper>
        </div>
        <div className="displayNews">
          {value === 0 && <SelfCountry countryCode={countryCode} />}
          {value === 1 && <World type="general" />}
          {value === 2 && <World type="technology" />}
          {value === 3 && <World type="business" />}
          {value === 4 && <World type="entertainment" />}
          {value === 5 && <World type="health" />}
          {value === 6 && <World type="science" />}
          {value === 7 && <World type="sports" />}
        </div>
      </div>
    );
  };

  return <div>{showLoader ? <Loader /> : mainContent()}</div>;
};

export default React.memo(withRouter(News));
