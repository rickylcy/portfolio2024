import * as React from "react";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";

import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";

import Grid from "@mui/joy/Grid";

export default function Navigation() {
  return (
    <Grid item xs={0} md={2} lg={2}>
      <List
        size="sm"
        sx={{
          "--ListItem-radius": "var(--joy-radius-sm)",
          "--List-gap": "4px",
        }}
      >
        <ListItem nested>
          <ListSubheader sx={{ letterSpacing: "2px", fontWeight: "800" }}>
            Browse
          </ListSubheader>
          <List
            aria-labelledby="nav-list-browse"
            sx={{
              "& .JoyListItemButton-root": { p: "8px" },
            }}
          >
            <ListItem>
              <ListItemButton selected>
                <ListItemDecorator>
                  <PeopleRoundedIcon fontSize="small" />
                </ListItemDecorator>
                <ListItemContent>People</ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemDecorator sx={{ color: "neutral.500" }}>
                  <AssignmentIndRoundedIcon fontSize="small" />
                </ListItemDecorator>
                <ListItemContent>Managing accounts</ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemDecorator sx={{ color: "neutral.500" }}>
                  <AccountTreeRoundedIcon fontSize="small" />
                </ListItemDecorator>
                <ListItemContent>Org chart</ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemDecorator sx={{ color: "neutral.500" }}>
                  <TodayRoundedIcon fontSize="small" />
                </ListItemDecorator>
                <ListItemContent>Time off</ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemDecorator sx={{ color: "neutral.500" }}>
                  <ArticleRoundedIcon fontSize="small" />
                </ListItemDecorator>
                <ListItemContent>Policies</ListItemContent>
                <Chip variant="soft" color="warning" size="sm">
                  2
                </Chip>
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Grid>
  );
}
