import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { DealsCardProps } from "../../misc/types";
import { LogoField } from "../../misc/LogoField";

const DealsCard: React.FC<DealsCardProps> = ({
  companyName,
  imageUrl,
  description,
  revenue,
  type
}) => {
  return (
    <Card className="flex">
      <CardMedia
        className="deals-image"
        component="img"
        height="24"
        width="40"
        image={imageUrl}
        alt={companyName}
        title={companyName}
      />
      <CardContent className="py-3 px-2">
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {revenue} {" "}, 
          {type}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DealsCard;
