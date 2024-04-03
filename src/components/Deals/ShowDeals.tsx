import React,{useState} from "react";
import Link from "next/link";
import { DealsCardProps } from "../../misc/types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SortIcon from "@mui/icons-material/Sort";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import InputAdornment from "@mui/material/InputAdornment";
import NewDealForm from "@/components/Deals/NewDealForm";
import { StatusSelector } from "../../misc/StatusSelector";
import { Status } from "../../misc/Status";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { LogoField } from "../../misc/LogoField";
import {
  Box,
  Modal,
  Typography,
  Autocomplete,
  Card,
  CardContent,
  CardMedia,
  TextField,
  FormControlLabel,
  FormControl,
  Switch,
  Button,
  Avatar,
  Divider,
} from "@mui/material";

function ShowDeals() {

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


  const getCurrentDate = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, -1);
  };

  const [status, setStatus] = useState();
  const [date, setDate] = useState(getCurrentDate());
  const [text, setText] = useState("");
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
    <>
      <Box className="flex">
        <Box minWidth={150} className="text-center me-5 ">
          <Avatar className="popup-avatar" alt="Remy Sharp" src="/assets/images/29.png"  />
          <Link className="primary-color mt-3 " href="#">
            Renner, Kris and Dickinson
          </Link>
        </Box>
        <Box>
          <Box className="mt-3">
            <Typography variant="h5">Reiciendis sit numquam</Typography>
            <Box className="flex mb-5">
              <Box className="me-5">
                <Typography variant="body2" className="color-grey" >Start</Typography>
                <Typography variant="body1">Jun 18, 2024</Typography>
              </Box>
              <Box className="me-5">
                <Typography variant="body2" className="color-grey" >Budget</Typography>
                <Typography variant="body1">$95.8K</Typography>
              </Box>
              <Box className="me-5">
                <Typography variant="body2" className="color-grey" >Type</Typography>
                <Typography variant="body1">UI Design</Typography>
              </Box>
              <Box>
                <Typography variant="body2" className="color-grey" >Stage</Typography>
                <Typography variant="body1">Proposal Sent</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="mt-5">
            <Typography variant="body1">Contacts</Typography>
            <Link className="primary-color mt-3" href="/">
              Dianna Weimann
            </Link>
          </Box>
          <Box className="my-5">
            <Typography variant="body1">Description</Typography>
            <Typography variant="body2">
              Accusamus praesentium nam. Ipsam reprehenderit quae et et cumque
              qui dolores. Et et quo amet sed reprehenderit laboriosam quas. Et
              voluptatum enim doloremque cumque eum dolorum. Eos eligendi
              pariatur qui expedita ut.
            </Typography>
          </Box>
          <Divider />

          <Box className="pe-5">
            <TextField
              className="w-full  mt-6"
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
          <Box className="pe-5">
            <Typography className="notes__date" variant="body2" mt={2}>
              Lee added a note on Friday, January 26, 2024 at 1:43 PM{" "}
              <Status status={contact.status} />
            </Typography>
          </Box>
          <Box className="notes__box pe-5">
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
              <Typography className="notes__readonly" variant="body2" mt={2}>
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
          <Box></Box>
        </Box>
      </Box>
    </>
  );
};

export default ShowDeals;
