import * as React from "react";
import { Box } from "@mui/material";

const statusColors = (status: string) =>
  status === "cold"
    ? "#631363"
    : status === "warm"
    ? "#27272D"
    : status === "hot"
    ? "#6D6D6D"
    : status === "in-contract"
    ? "#40F440"
    : "#000";

export const Status = ({ status }: { status: string }) => (
  <Box
    marginLeft={0.5}
    width={10}
    height={10}
    display="inline-block"
    borderRadius="5px"
    bgcolor={statusColors(status)}
    component="span"
  />
);
