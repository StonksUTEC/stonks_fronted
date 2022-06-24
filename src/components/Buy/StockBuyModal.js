import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormLabel, Input, InputLabel } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

export default function StockBuyModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>Buy</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box component="form" sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Buy order
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Details of order
            </Typography>
            <br></br>
            <br></br>
            
            <FormLabel>Company Ruc</FormLabel>
            <br></br>
            <Input ></Input>
            <br></br>
            <FormLabel>Quantity</FormLabel>
            <br></br>
            <Input></Input>
            <br></br>
            <FormLabel>Price</FormLabel>
            <br></br>
            <Input></Input>
            <br></br>
            <FormLabel>Type</FormLabel>
            <br></br>
            <Input></Input>
            <br></br>
            <br></br>
            <Button variant="contained">New order</Button>
          </Box>
        </Modal>
      </div>
    );
  }