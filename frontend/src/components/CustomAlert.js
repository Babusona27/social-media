import React, { useState } from 'react';
import {Alert,Snackbar} from '@mui/material';

const CustomAlert = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success'); // Default severity is 'success'

  const showAlert = (type, msg) => {
    setSeverity(type);
    setMessage(msg);
    setOpen(true);

    // Close the alert after 2 seconds
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const AlertComponent = () => (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity={severity} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );

  return { showAlert, AlertComponent };
};

export default CustomAlert;
