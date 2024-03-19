import React from 'react';
import { Typography, Grid, Stack } from '@mui/material';

const Footer = () => {
    return (
        <Grid container mt={2} justifyContent="center" sx={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            backgroundColor: '#121212',
            padding: '20px'
        }}>
            <Grid item xs={12} sm={6}>
                <Stack>
                    <Typography variant="body2" align="center">La Falda, Córdoba. Argentina.</Typography>
                    <Typography variant="body2" align="center">Phone: (+54)3548-607940</Typography>
                    <Typography variant="body2" align="center">Email: ijnobilta@gmail.com</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack>
                    <Typography variant="body2" align="center">
                        © {new Date().getFullYear()} IJN
                    </Typography>
                    <Typography variant="body2" align="center">ijn.com.ar</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Footer;
