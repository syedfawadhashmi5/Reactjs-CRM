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
  Typography,  
} from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SortIcon from "@mui/icons-material/Sort";
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function ContactsHeader() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className="flex justify-end mb-3">
      <div>
        <Box sx={{ minWidth: 220 }}>
          <FormControl className="sorting-box flex flex-row items-center" fullWidth>
            <SortIcon className="primary-color" />
            <Typography className="sorting-button primary-color" variant="body2">SORT BY</Typography>
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
              <MenuItem value="">Last name ascending</MenuItem>
              <MenuItem value={20}>Last name descending</MenuItem>
              <MenuItem value={20}>First name ascending</MenuItem>
              <MenuItem value={20}>First name descending</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div>
        <Button variant="text" className="primary-color"><DownloadIcon/> Export</Button>
      </div>
      <div className="pt-1 ml-2">
        <Link href="/new-contact"  className="primary-button py-2 px-5">
          <AddIcon/>
          New Contact
        </Link>
      </div>
    </div>
  );
}

export default ContactsHeader;
