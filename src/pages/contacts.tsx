import React, { useState } from "react";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";

import Header from "@/components/Header";
import ContactsSidebar from "@/components/Contacts/ContactsSidebar";
import ContactsHeader from "@/components/Contacts/ContactsHeader";
import ContactsListItem from "@/components/Contacts/ContactsListItem";
import { Contact } from "../misc/types";
import { Status } from "../misc/Status";
import { Avatar } from "@/components/Contacts/Avatar";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import { Typography } from "@mui/material";


import { Drawer, IconButton,  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function contacts() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
  };

  const [checked, setChecked] = useState([1]);
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

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <ContactsSidebar />
        <div className="col-span-3 contacts__list">
          <ContactsHeader />
          <div className="contacts__list__items">
            <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
              {contacts.map((contact) => {
                const labelId = `checkbox-list-secondary-label-${contact.id}`;
                return (
                  <ListItem className="py-2" key={contact.id} disablePadding>
                    <ListItemButton>
                      <Checkbox
                        edge="start"
                        className="me-5"
                        // onChange={handleToggle(contact.id)}
                        // checked={checked.indexOf(contact.id) !== -1}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
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
                        <Typography variant="body2" color="textSecondary">
                          last activity 6 days ago{" "}
                          <Status status={contact.status} />
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}
