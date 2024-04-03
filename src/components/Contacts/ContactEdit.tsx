import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  TextField,
  Grid,
  Switch,
  Button,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { LogoField } from "../../misc/LogoField";
import { Avatar } from "@/components/Contacts/Avatar";
import { Contact } from "../../misc/types";

import { StatusSelector } from "../../misc/StatusSelector";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ContactInputs } from "@/components/Contacts/ContactInputs";

const getCurrentDate = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, -1);
};

const ContactEdit = () => {
  const [contact, setContact] = useState({
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
  });
  const [text, setText] = useState("");
  const [status, setStatus] = useState();
  const [date, setDate] = useState(getCurrentDate());

  const [text2, setText2] = useState(
    "Id sit culpa dolorum dolorem ut tenetur facere vitae inventore. Omnis odit voluptates sequi ut sit delectus tempora. Eos labore quisquam eligendi. Ut impedit eum sit ipsa qui itaque doloribus. Et ipsum officiis reprehenderit at sint aut non harum ducimus. Id omnis dolore harum maiores eligendi similique iure repudiandae accusantium.Dolor repudiandae nesciunt nihil praesentium perferendis sit provident voluptatem. Magnam reiciendis voluptatem. Earum rerum amet dolorem necessitatibus ducimus ducimus commodi."
  );
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleTextChange = (e: any) => {
    setText2(e.target.value);
  };

  return (
    <Box mt={2} className="container mx-auto">
      <Box className="grid grid-cols-9 gap-4">
        <Box className="col-span-7">
          <Card>
            <CardContent className="pb-0">
              <Box>
                <Box display="flex">
                  <Box mr={2}>
                    <Avatar record={contact} />
                  </Box>
                  <ContactInputs  />
                </Box>
              </Box>
            </CardContent>
            <Grid className="colored-actions" container mt={5} spacing={1}>
              <Grid item py={2} px={2} xs={6}>
                <Button variant="contained" className="primary-button me-3">
                  <SaveIcon />
                  Save
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                py={2}
                px={2}
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Button variant="text" color="error" className="me-3">
                  <DeleteIcon />
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Box>
        <Box className="col-span-2">
          <Box ml={2} width={250} minWidth={250}>
            <Box textAlign="center" mb={2}>
              <Link href="/contacts-show" className="primary-color edit-Button">
                <RemoveRedEyeIcon fontSize="small" className="me-2" />
                Show Contact
              </Link>
            </Box>
            <Typography variant="subtitle2">Personal info</Typography>
            <Divider />
            <Link className="primary-color mt-3" href="mailto:info@example.com">
              info@example.com
            </Link>
            <br />
            <Typography variant="body2" color="textSecondary" component="span">
              947-370-8657
            </Typography>
            <Typography
              marginLeft={1}
              variant="body2"
              color="textSecondary"
              component="span"
            >
              Work
            </Typography>
            <br />
            <Box mb={1}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="span"
              >
                947-370-8657
              </Typography>
              <Typography
                variant="body2"
                marginLeft={1}
                color="textSecondary"
                component="span"
              >
                Home
              </Typography>
            </Box>
            <Typography variant="body2" mb={3}>
              {/* {record.gender === "male" ? "He/Him" : "She/Her"} */}
              He/Him
            </Typography>
            <Typography variant="subtitle2">Background</Typography>
            <Divider />
            <Typography variant="body2" mt={2}>
              {/* {record && record.background} */}
              Nobis sed neque aut sit nemo dolores veniam.
            </Typography>
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
                October 29, 2022
              </Typography>{" "}
              <br />
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                Last seen on
              </Typography>{" "}
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                February 4, 2024
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
            <Box mb={3}>
              <Typography variant="subtitle2">Tags</Typography>
              <Divider />
              <div className="tags__list mt-3">
                <ul>
                  <li>
                    <label className="filter-tags hot-color-light">
                      <span>footbal-fan</span>
                      <input type={"checkbox"} />
                    </label>
                  </li>
                  <li>
                    <label className="filter-tags warm-color-light">
                      <span>holiday-card</span>
                      <input type={"checkbox"} />
                    </label>
                  </li>
                </ul>
              </div>
            </Box>
            <Box mb={3}>
              <Typography variant="subtitle2">Tasks</Typography>
              <Divider />
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                Corporis aliquam aut iusto nemo illo.due 4/12/2023
              </Typography>{" "}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactEdit;
