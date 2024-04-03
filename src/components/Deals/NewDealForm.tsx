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
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { LogoField } from "../../misc/LogoField";
import { Avatar } from "@/components/Contacts/Avatar";
import { Contact } from "../../misc/types";

import { StatusSelector } from "../../misc/StatusSelector";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DealsInput } from "@/components/Deals/DealsInput";

const getCurrentDate = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, -1);
};

const NewDealForm  = () => {
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

  const handleTextChange = (e:any) => {
    setText2(e.target.value);
  };

  return (
    <Box mt={2} className="container mx-auto">
      <Box className="grid grid-cols-9 gap-4">
        <Box className="col-span-9 mb-4">
          <Card>
            <CardContent className="pb-0">
              <Box>
                <Box display="flex">                  
                  <DealsInput />
                </Box>
              </Box>
            </CardContent>
            <Grid  container mt={5} spacing={1}>
              <Grid item  xs={6}>
                <Button  variant="contained" className="primary-button ml-3 mb-3">
                  <SaveIcon />
                  Save
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default NewDealForm;
