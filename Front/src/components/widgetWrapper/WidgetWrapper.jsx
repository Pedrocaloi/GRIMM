import React from 'react'
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const WidgetWrapper = styled(Box)(({ theme }) => ({
    paddig: '1.75rem 1.75rem 0.75rem 1.5rem',   
    backgroundColor: theme.palette.background.alt,
    borderRadius: '0.75rem'
}))  

export default WidgetWrapper; 