import { Fragment, useState } from "react";
import Link from "next/link";
import {
  Dialog,
  Disclosure,
  Popover,
  Menu,
  Transition,
} from "@headlessui/react";
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

const type = [
  { id: 1, name: "Other" },
  { id: 2, name: "Copywriting" },
  { id: 3, name: "Print project" },
  { id: 4, name: "UI Design" },
  { id: 5, name: "Website design" },
];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: "95vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function DealsHeader() {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <Box className="flex justify-between mb-5">
        <Box className="flex align-middle">
          <Box className="pt-3">
            <TextField
              placeholder="Search"
              id="input-with-icon-textfield"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Box>
          <Box className="px-4 pt-3">
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Only companies I manage"
            />
          </Box>
          <Box>
            <Autocomplete
              sx={{ minWidth: 220 }}
              fullWidth
              options={type}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="filled-basic"
                  label="Type"
                  variant="filled"
                />
              )}
            />
          </Box>
        </Box>
        <Box className="flex pt-2">
          <Box sx={{ minWidth: 120 }}>
            <FormControl
              className="sorting-box flex flex-row items-center"
              fullWidth
            >
              <SortIcon className="primary-color" />
              <Typography
                className="sorting-button primary-color"
                variant="body2"
              ></Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                className="py-0 px-0 sorting-button uppercase primary-color"
                label="Age"
                defaultValue="10"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handleChange}
              >
                <MenuItem value="">Type</MenuItem>
                <MenuItem value={20}>Save current query</MenuItem>
                <MenuItem value={20}>Remove all filters</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Button variant="text" className="primary-color">
              <DownloadIcon /> Export
            </Button>
          </Box>
          <Box>
            <Button
              onClick={handleOpen}
              className="primary-button"
              variant="contained"
            >
              <AddIcon /> New Deal
            </Button>
          </Box>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <NewDealForm />
        </Box>
      </Modal>

      
    </>
  );
}

export default DealsHeader;
