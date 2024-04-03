import * as React from "react";
import {
  TextField,
  Autocomplete,
  Checkbox,
  FormControlLabel,
  Box,
  Divider,
  Grid,
  Switch,
  Button,
} from "@mui/material";

export const CompanyInput = () => (
  <Box flex="1" mt={-1}>
    <Grid container width={796} spacing={1}>
      <Grid item xs={12} mt={2}>
        <TextField id="filled-basic" label="Name" variant="filled" fullWidth />
      </Grid>
      <Grid item xs={3} mt={2}>
        <Autocomplete
          fullWidth
          options={sector}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              id="filled-basic"
              label="sector"
              variant="filled"
            />
          )}
        />
      </Grid>
      <Grid item xs={3} mt={2}>
        <Autocomplete
          fullWidth
          options={Size}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              id="filled-basic"
              label="Size"
              variant="filled"
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} mt={2}>
        <TextField
          id="filled-basic"
          fullWidth
          label="Address"
          type="text"
          variant="filled"
        />
      </Grid>
      <Grid item xs={4} mt={2}>
        <TextField id="filled-basic" fullWidth label="City" variant="filled" />
      </Grid>
      <Grid item xs={4} mt={2}>
        <TextField
          id="filled-basic"
          fullWidth
          label="zipcode"
          variant="filled"
        />
      </Grid>
      <Grid item xs={4} mt={2}>
        <TextField
          id="filled-basic"
          fullWidth
          label="stateAbbr"
          variant="filled"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} mt={2}>
        <TextField label="Website" variant="filled" multiline fullWidth />
      </Grid>
      <Grid item xs={12} mt={2}>
        <TextField label="LinkedIn" variant="filled" fullWidth />
      </Grid>
      <Grid item xs={12} mt={2}>
        <TextField label="Logo" variant="filled" fullWidth />
      </Grid>
      <Grid item xs={3} mt={2}>
        <TextField
          id="filled-basic"
          fullWidth
          label="phone_number"
          variant="filled"
        />
      </Grid>
      <Grid item xs={3} mt={2}>
        <Autocomplete
          fullWidth
          options={Accountmanager}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              id="filled-basic"
              label="Account manager"
              variant="filled"
            />
          )}
        />
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
