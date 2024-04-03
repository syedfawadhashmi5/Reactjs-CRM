import * as React from "react";
import { Card, CardContent, Box, Avatar } from "@mui/material";

import { ContactInputs } from "./ContactInputs";


export const ContactCreate = () => (
  <>
    <Box mt={2} display="flex">
      <Box flex="1">
        
          <Card>
            <CardContent>
              <Box>
                <Box display="flex">
                  <Box mr={2}>
                    <Avatar />
                  </Box>
                  <ContactInputs />
                </Box>
              </Box>
            </CardContent>
            
          </Card>        
      </Box>
    </Box>
  </>
);
