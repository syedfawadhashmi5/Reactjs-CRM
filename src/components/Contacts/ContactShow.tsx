import React, { useState } from "react";
import Link from "next/link";
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

import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { LogoField } from "../../misc/LogoField";
import { Status } from "../../misc/Status";
import { Avatar } from "@/components/Contacts/Avatar";
import { Contact } from "../../misc/types";
import { StatusSelector } from "../../misc/StatusSelector";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const getCurrentDate = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, -1);
};

const ContactShow = () => {
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
            <CardContent>
              <Box display="flex">
                <Avatar record={contact} />
                <Box ml={2} flex="1">
                  <Typography variant="h5">John Doe</Typography>
                  <Typography variant="body2">
                    Developer at{" "}
                    <Link href="#" className="primary-color">
                      Company Name
                    </Link>
                  </Typography>
                </Box>
                <Box>
                  <Link href="#">
                    <LogoField />
                  </Link>
                </Box>
              </Box>
              <Box className="pe-5">
                <TextField
                  className="w-full mx-3 mt-6"
                  id="filled-multiline-flexible"
                  label="Add a note"
                  rows={4}
                  multiline
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setText(event.target.value)
                  }
                  variant="filled"
                />
                <Box display="flex" justifyContent="space-between" mt={1}>
                  <span>
                    {text ? (
                      <>
                        {/* {showStatus && ( */}
                        <StatusSelector
                          status={status}
                          setStatus={setStatus}
                          sx={{
                            marginRight: "1em",
                            "& .MuiFilledInput-input": {
                              paddingTop: "10px",
                            },
                            width: 150,
                          }}
                        />
                        {/* )} */}
                        <TextField
                          type="datetime-local"
                          variant="filled"
                          size="small"
                          // value={date}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setDate(event.target.value);
                          }}
                          sx={{
                            marginRight: "1em",
                            "& .MuiFilledInput-input": {
                              paddingTop: "10px",
                            },
                          }}
                        />
                      </>
                    ) : null}
                  </span>
                  <Button variant="contained" className="primary-button">
                    Add this note
                  </Button>
                </Box>
              </Box>
              <Box className="px-5">
                <Typography className="notes__date" variant="body2" mt={2}>
                  Lee added a note on Friday, January 26, 2024 at 1:43 PM{" "}
                  <Status status={contact.status} />
                </Typography>
              </Box>
              <Box className="notes__box px-5">
                {isEditable ? (
                  <TextField
                    className="w-full mx-3 mt-6"
                    id="filled-multiline-flexible"
                    label="Add a note"
                    rows={4}
                    multiline
                    value={text2}
                    onChange={handleTextChange}
                    variant="filled"
                  />
                ) : (
                  <Typography
                    className="notes__readonly"
                    variant="body2"
                    mt={2}
                  >
                    {text2}
                  </Typography>
                )}
                {isEditable ? (
                  <div className="flex w-full justify-end mt-2">
                    <div>
                      <Button onClick={handleEditClick} variant="text">
                        Cancel
                      </Button>
                    </div>
                    <div>
                      <Button
                        onClick={handleEditClick}
                        variant="contained"
                        className="primary-button"
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="notes__box__edit">
                    <IconButton onClick={handleEditClick}>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                )}
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box className="col-span-2">
          <Box ml={2} width={250} minWidth={250}>
            <Box textAlign="center" mb={2}>
              <Link href="/contact-edit" className="primary-color edit-Button">
                <ModeEditIcon fontSize="small" className="me-2" />
                Edit Contact
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
                marginLeft={1}
                variant="body2"
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

export default ContactShow;
