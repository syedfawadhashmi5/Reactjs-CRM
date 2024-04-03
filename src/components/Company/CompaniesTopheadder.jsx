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


function ContactsHeader() {
  
  
  return (
    <div className="flex justify-end mb-3">
      <div>
        <Button variant="text" className="primary-color"><DownloadIcon/> Export</Button>
      </div>
      <div className="pt-1 ml-2">
        <Link href="/CompanyForm"  className="primary-button py-2 px-5">
          <AddIcon/>
          New Company
        </Link>
      </div>
    </div>
  );
}

export default ContactsHeader;
