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

export const ContactInputs = () => (
  <Box flex="1" mt={-1}>
    <Grid container width={430} spacing={1}>
      <Grid item xs={6} mt={2}>
        <TextField
          id="filled-basic"
          label="First Name"
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid item xs={6} mt={2}>
        <TextField
          id="filled-basic"
          label="Last Name"
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid item xs={6} mt={2}>
        <TextField id="filled-basic" label="Title" variant="filled" fullWidth />
      </Grid>
      <Grid item xs={6} mt={2}>
        <Autocomplete
          fullWidth
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
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} mt={2}>
        <TextField
          id="filled-basic"
          fullWidth
          label="Email"
          type="email"
          variant="filled"
        />
      </Grid>
      <Grid item xs={6} mt={2}>
        <TextField
          id="filled-basic"
          fullWidth
          label="Phone Number 1"
          variant="filled"
        />
      </Grid>
      <Grid item xs={6} mt={2}>
        <TextField
          id="filled-basic"
          fullWidth
          label="Phone Number 2"
          variant="filled"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} mt={2}>
        <TextField label="Background" variant="filled" multiline fullWidth />
      </Grid>
      <Grid item xs={12} mt={2}>
        <TextField label="Avatar" variant="filled" fullWidth />
      </Grid>
      <Grid item xs={12} mt={2}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Has Newsletter"
        />
      </Grid>
    </Grid>       
  </Box>
);

const Spacer = () => <Box width={20} component="span" />;

// Sample companies data
const companies = [
  { id: 1, name: "Company A" },
  { id: 2, name: "Company B" },
  { id: 3, name: "Company C" },
];
