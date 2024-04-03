import * as React from 'react';
import { Box } from '@mui/material';

import { Company } from './types';

const sizeInPixel = {
    medium: 42,
    small: 20,
};

export const LogoField = ({
    size = 'medium',
}: {
    size?: 'small' | 'medium';
}) => {    
    // if (!record) return null;
    return (
        <Box
            component="img"
            src={'/assets/images/29.png'}
            // alt={record.name}
            // title={record.name}
            width={sizeInPixel[size]}
            height={sizeInPixel[size]}
            sx={{ objectFit: 'contain' }}
        />
    );
};
