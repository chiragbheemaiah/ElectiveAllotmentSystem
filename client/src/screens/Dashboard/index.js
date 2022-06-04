import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Sidebar from "../../components/Sidebar";
import DashItem from "../../components/DashItem";
import ProfileItem from "../../components/ProfileItem";

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
  },
  right: {
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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

const Dashboard = () => {
  const list = [
    {
      name: "Semester 5 PE-1",
      isLocked: true,
      pe:1,
    },
    {
      name: "Semester 6 PE-2",
      isLocked: true,
      pe:1
    },
    {
      name: "Semester 6 OE-1",
      isLocked: true,
      pe:0,
    },
    {
      name: "Semester 7 PE-3",
      isLocked: true,
      pe:1,
    },
    {
      name: "Semester 7 PE-4",
      isLocked: true,
      pe:1,
    },
    {
      name: "Semester 8 PE-5",
      isLocked: true,
      pe:1,
    },
    {
      name: "Semester 8 OE-2",
      isLocked: true,
      pe:0,
    },
    {
      name: "NPTEL Waiver",
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
      <Grid className={classes.left} item xs={2}>
        <Sidebar
          list={list}
          changeSemesterOnSidebar={changeSemesterOnSidebar}
          sidebarState={sidebarState}
          isProfileSelected={isProfileSelected}
          setIsProfileSelected={setIsProfileSelected}
        />
      </Grid>
      <Grid className={classes.right} item xs={10}>
        {isProfileSelected ? (
          <ProfileItem />
        ) : (
          <DashItem selectedSemester={selectedSemester} />
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
