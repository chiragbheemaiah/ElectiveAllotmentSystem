import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import Sidebar from "../components/Sidebar";
import AdminDashItem from "../components/AdminDashItem";
import WaiverItem from "../components/WaiverItem";
import ProfileItem from "../components/ProfileItem";

const useStyles = makeStyles({
  container: {
    fontFamily: "Inter",
    height: "100vh",
    width: "100%",
    "& .MuiInputBase-input": {
      background: "#E0E7FF",
      height: "3rem",
    },
  },
  left: {
    background: "#4F46E5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  textRight: {
    color: "black",
    textAlign: "left",
    fontWeight: 600,
  },
});

const AdminDashboard = () => {
  const list = [
    {
      name: "Admin Dashboard",
      isLocked: true,
    },
  ];
  const classes = useStyles();
  const [sidebarState, setSideBarState] = useState(0);
  const [selectedSemester, setSelectedSemester] = useState(list[0]);
  const [isProfileSelected, setIsProfileSelected] = useState(false);
  const changeSemesterOnSidebar = (index) => {
    setIsProfileSelected(false)
    setSideBarState(index);
    setSelectedSemester(list[index]);
  };
  return (
    <Grid container className={classes.container}>
      <Grid className={classes.left} item xs={3}>
      <Box
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography className={classes.text} variant="h2" component="h2">
              EAS
            </Typography>
            <Typography className={classes.text} variant="h6" component="h6">
              Elective Allotment System
            </Typography>
        </Box>
      </Grid>
      <Grid className={classes.right} item xs={9}>
        {isProfileSelected ? (
          <ProfileItem />
        ) : (
          <WaiverItem selectedSemester={selectedSemester} />
        )}
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
