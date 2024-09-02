import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";

const Sidebar = ({ toggleval }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <Box
        height={"100vh"}
        sx={{ width: "100%", maxWidth: 260, bgcolor: "background.paper" }}
        className={`${toggleval ? "hidden" : "block"}
          md:block
          `}
      >
        <Stack component={"div"} p={1}>
          <img
            src="./unikwork.png"
            style={{ height: "3rem" }}
            alt="unikworklogo"
          />
        </Stack>
        <Divider />
        <List component="nav" aria-label="main mailbox folders">
          <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
              sx={{
                "&.Mui-selected": {
                  borderRadius: "1rem",
                },
                "&.Mui-focusVisible": {
                  borderRadius: "1rem",
                },
                ":hover": {
                  borderRadius: "1rem",
                },
              }}
            >
              <ListItemIcon>
                <HomeIcon
                  className={selectedIndex === 1 ? "text-orange-400" : ""}
                />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </Link>

          <Link
            to={"/employee"}
            style={{ color: "black", textDecoration: "none" }}
          >
            {" "}
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <PeopleOutlineIcon
                  className={selectedIndex === 2 ? "text-orange-400" : ""}
                />
              </ListItemIcon>
              <ListItemText>Employee</ListItemText>
            </ListItemButton>
          </Link>

          <Link
            to={"/contact"}
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              {" "}
              <ListItemIcon>
                <FeedOutlinedIcon
                  className={selectedIndex === 3 ? "text-orange-400" : ""}
                />
              </ListItemIcon>
              <ListItemText>Project</ListItemText>
            </ListItemButton>
          </Link>

          <Link
            to={"/about"}
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <CheckCircleOutlineOutlinedIcon
                  className={selectedIndex === 4 ? "text-orange-400" : ""}
                />
              </ListItemIcon>
              <ListItemText>My Task</ListItemText>
            </ListItemButton>
          </Link>
          <Link
            to={"/contact"}
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              {" "}
              <ListItemIcon>
                <AssignmentIndOutlinedIcon
                  className={selectedIndex === 5 ? "text-orange-400" : ""}
                />
              </ListItemIcon>
              <ListItemText>Client</ListItemText>
            </ListItemButton>
          </Link>

          <ListItemButton
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
          >
            {" "}
            <ListItemIcon>
              <CalendarMonthOutlinedIcon
                className={selectedIndex === 6 ? "text-orange-400" : ""}
              />
            </ListItemIcon>
            <ListItemText>Timesheet</ListItemText>
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}
          >
            {" "}
            <ListItemIcon>
              <ListAltOutlinedIcon
                className={selectedIndex === 7 ? "text-orange-400" : ""}
              />
            </ListItemIcon>
            <ListItemText>Project Leads</ListItemText>
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 8}
            onClick={(event) => handleListItemClick(event, 8)}
          >
            <ListItemIcon>
              <PersonOutlineOutlinedIcon
                className={selectedIndex === 8 ? "text-orange-400" : ""}
              />
            </ListItemIcon>
            <ListItemText>Candidate Leads</ListItemText>
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 9}
            onClick={(event) => handleListItemClick(event, 9)}
          >
            {" "}
            <ListItemIcon>
              <StorageOutlinedIcon
                className={selectedIndex === 9 ? "text-orange-400" : ""}
              />
            </ListItemIcon>
            <ListItemText>Assets</ListItemText>
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 10}
            onClick={(event) => handleListItemClick(event, 10)}
          >
            {" "}
            <ListItemIcon>
              <SettingsOutlinedIcon
                className={selectedIndex === 10 ? "text-orange-400" : ""}
              />
            </ListItemIcon>
            <ListItemText>setting</ListItemText>
          </ListItemButton>
        </List>
      </Box>
    </>
  );
};

export default Sidebar;
