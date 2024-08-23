// src/DisplayPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, Grid } from '@mui/material';

const DisplayPage = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, black, #333)',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          p: 3,
          maxWidth: 800,
          mx: 'auto',
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // semi-transparent background for the form
          borderRadius: '10px',
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          {formData.placeName || 'Submitted Data'}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6">Photos:</Typography>
            {formData.photoPreviews?.[0] && (
              <img
                src={formData.photoPreviews[0]}
                alt="Uploaded"
                style={{
                  maxHeight: '200px',
                  maxWidth: '100%',
                  borderRadius: '5px',
                  objectFit: 'cover',
                }}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Location on Map:</Typography>
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(formData.address)}`}
              style={{
                width: '100%',
                height: '200px',
                borderRadius: '5px',
                border: '0',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Address:</Typography>
            <Typography>{formData.address}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h6">Phone Number:</Typography>
            <Typography>{formData.phone}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Email Address:</Typography>
            <Typography>{formData.email}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Category:</Typography>
            <Typography>{formData.category}</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DisplayPage;
