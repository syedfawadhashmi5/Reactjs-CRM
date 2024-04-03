import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  TextField,
} from "@mui/material";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import { Avatar } from "@/components/Contacts/Avatar";
import { Contact } from "../misc/types";
import { LogoField } from "../misc/LogoField";
import { Status } from "../misc/Status";
import Checkbox from "@mui/material/Checkbox";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CompanyDetails = () => {
  const [value, setValue] = React.useState(0);
  const contacts: Contact[] = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      title: "CEO",
      company_id: 1,
      email: "john.doe@example.com",
      avatar: "https://example.com/avatar1.jpg",
      first_seen: "2023-01-01",
      last_seen: "2023-12-31",
      has_newsletter: true,
      tags: [1, 2],
      gender: "male",
      sales_id: 1,
      nb_notes: 3,
      status: "hot",
      background: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      title: "CFO",
      company_id: 1,
      email: "jane.smith@example.com",
      avatar: "https://example.com/avatar2.jpg",
      first_seen: "2022-06-15",
      last_seen: "2023-11-30",
      has_newsletter: false,
      tags: [3, 4],
      gender: "female",
      sales_id: 2,
      nb_notes: 2,
      status: "cold",
      background: "Sed ut perspiciatis unde omnis iste natus error.",
    },
    {
      id: 3,
      first_name: "Michael",
      last_name: "Johnson",
      title: "CTO",
      company_id: 2,
      email: "michael.johnson@example.com",
      first_seen: "2023-03-10",
      last_seen: "2023-12-20",
      has_newsletter: true,
      tags: [5, 6],
      gender: "male",
      sales_id: 3,
      nb_notes: 1,
      status: "cold",
      background: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    },
    {
      id: 4,
      first_name: "Emily",
      last_name: "Brown",
      title: "Marketing Manager",
      company_id: 2,
      email: "emily.brown@example.com",
      first_seen: "2023-02-20",
      last_seen: "2023-12-25",
      has_newsletter: false,
      tags: [7],
      gender: "female",
      sales_id: 4,
      nb_notes: 0,
      status: "cold",
      background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      first_name: "Alex",
      last_name: "Lee",
      title: "Developer",
      company_id: 3,
      email: "alex.lee@example.com",
      avatar: "https://example.com/avatar5.jpg",
      first_seen: "2023-05-05",
      last_seen: "2023-12-10",
      has_newsletter: true,
      tags: [],
      gender: "male",
      sales_id: 5,
      nb_notes: 5,
      status: "cold",
      background: "Nulla facilisi. Ut fringilla.",
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />
      <Box mt={2} className="container mx-auto">
        <Box className="grid grid-cols-9 gap-4">
          <Box className="col-span-7">
            <Card>
              <CardContent>
                <Box display="flex ">
                  <LogoField />
                  <Box ml={2} flex="1">
                    <Typography variant="h5">Becker Group</Typography>
                    <Typography variant="body2">
                      Materials 250 or more employees
                    </Typography>
                  </Box>
                </Box>
                <Box mt={2} sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="1 Contact" {...a11yProps(0)} />
                      <Tab label="1 Deal" {...a11yProps(1)} />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                    <List
                      dense
                      sx={{ width: "100%", bgcolor: "background.paper" }}
                    >
                      {contacts.map((contact) => {
                        const labelId = `checkbox-list-secondary-label-${contact.id}`;
                        return (
                          <ListItem
                            className="py-2"
                            key={contact.id}
                            disablePadding
                          >
                            <ListItemButton>
                              <Link
                                className="flex flex-row items-center"
                                href={`/contacts-show/`}
                              >
                                <ListItemAvatar>
                                  <Avatar record={contact} />
                                </ListItemAvatar>
                                <ListItemText
                                  className="ml-3"
                                  primary={`${contact.first_name} ${contact.last_name}`}
                                  secondary={
                                    <>
                                      {contact.title} at {}
                                      {contact.nb_notes &&
                                        `- ${contact.nb_notes} notes`}
                                      &nbsp;&nbsp;
                                      <span className="tag-item hot-color-light me-2">
                                        footbal-fun
                                      </span>
                                      <span className="tag-item cold-color-light me-2">
                                        musician
                                      </span>
                                    </>
                                  }
                                />
                              </Link>

                              <ListItemSecondaryAction>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                >
                                  last activity 6 days ago{" "}
                                  <Status status={contact.status} />
                                </Typography>
                              </ListItemSecondaryAction>
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <Typography variant="body2" color="textSecondary">
                      1 Deal
                    </Typography>
                  </CustomTabPanel>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box className="col-span-2">
            <Box ml={2} width={250} minWidth={250}>
              <Box textAlign="center" mb={2}>
                <Link
                  href="/contact-edit"
                  className="primary-color edit-Button"
                >
                  <ModeEditIcon fontSize="small" className="me-2" />
                  Edit Company
                </Link>
              </Box>
              <Typography variant="subtitle2">Company info</Typography>
              <Divider />
              <br />

              <Typography
                variant="body2"
                color="textSecondary"
                component="span"
              >
                Website:
              </Typography>
              <Link className="primary-color mt-3" href="http://trey.org/">
                <Typography
                  marginLeft={1}
                  variant="body2"
                  color="textSecondary"
                  component="span"
                  className="primary-color"
                >
                  http://trey.org/
                </Typography>
              </Link>
              <br />
              <Typography
                variant="body2"
                color="textSecondary"
                component="span"
              >
                Linkedin:
              </Typography>
              <Link
                className="primary-color mt-3"
                href="https://www.linkedin.com/company/becker_group"
              >
                <Typography
                  className="primary-color"
                  marginLeft={1}
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  Linkedin
                </Typography>
              </Link>
              <br />
              <Box mb={1}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  (746) 574-4244 x6888
                </Typography>
                <Typography
                  marginLeft={1}
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  Main
                </Typography>
              </Box>
              <Typography variant="body2">16811 Iva Radial</Typography>
              <br />
              <Typography variant="body2" mb={3}>
                East Darrinland 40399-8381 WA
              </Typography>
              <Typography variant="subtitle2">Background</Typography>
              <Divider />
              <Box mt={1} mb={3}>
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  Added on
                </Typography>{" "}
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  March 9, 2021
                </Typography>{" "}
                <br />
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  Followed by
                </Typography>{" "}
                <Typography
                  component="strong"
                  variant="body2"
                  color="textSecondary"
                >
                  Jane Doe
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CompanyDetails;
