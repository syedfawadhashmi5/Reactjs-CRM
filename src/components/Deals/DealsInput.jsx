import * as React from "react";
import {
  TextField,
  Autocomplete,
  Checkbox,
  FormControlLabel,
  Box,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  Grid,
  Switch,
  Button,
  InputAdornment
} from "@mui/material";


const companies = [
  { id: 1, name: "Company 1" },
  { id: 2, name: "Company 2" },
  { id: 3, name: "Company 3" },
];

const stage = [
  { id: 1, name: "Opportunity" },
  { id: 2, name: "Proposal Sent" },
  { id: 3, name: "In Negotiation" },
  { id: 3, name: "Won" },
  { id: 3, name: "Lost" },
  { id: 3, name: "Delayed" },
];

const type = [
  { id: 1, name: "Other" },
  { id: 2, name: "Copywriting" },
  { id: 3, name: "Print project" },
  { id: 4, name: "UI Design" },
  { id: 5, name: "Website design" },
];

export const DealsInput = () => (
  <Box flex="1" mt={-1}>
    <Grid container spacing={1}>
      <Grid item xs={12} mt={2}>
        <TextField
          id="filled-basic"
          label="Deal name"
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} mt={2}>
        <TextField
          id="filled-basic"
          label="Description"
          variant="filled"
          fullWidth
          multiline
          rows={3}
        />
      </Grid>
      <Grid item xs={12} mt={2}>
        <Autocomplete
          options={companies}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              id="filled-basic"
              label="Company"
              variant="filled"
            />
          )}
        />
      </Grid>
      <Grid item xs={12} mt={2}>
        <Autocomplete
          fullWidth
          options={stage}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              id="filled-basic"
              label="Stage"
              variant="filled"
            />
          )}
        />
      </Grid>
      <Grid item xs={12} mt={2}>
        <Autocomplete
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
      </Grid>
      <Grid item xs={12} mt={2}>
        <FormControl fullWidth >
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </Grid>
    </Grid>
  </Box>
);

const Spacer = () => <Box width={20} component="span" />;

// Sample companies data
const Size = [
  { id: 1, name: "1 employee" },
  { id: 10, name: "2-9 employees" },
  { id: 50, name: "10-49 employees" },
  { id: 250, name: "50-249 employees" },
  { id: 500, name: "250 or more employees" },
];

const sector = [
  { id: 1, name: "Communication Services" },
  { id: 2, name: "Consumer Discretionary" },
  { id: 3, name: "Consumer Staples" },
  { id: 4, name: "Energy" },
  { id: 5, name: "Financials" },
  { id: 6, name: "Health Care" },
  { id: 7, name: "Industrials" },
  { id: 8, name: "Information Technology" },
  { id: 9, name: "Materials" },
  { id: 10, name: "Real Estate" },
  { id: 11, name: "Utilities" },
];

const Accountmanager = [
  { id: 1, name: "Account 1" },
  { id: 2, name: "Account 2" },
  { id: 3, name: "Account 3" },
];
