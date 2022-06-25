import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormLabel, Input, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export function SelectVariants() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label"></InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label=""
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>First</MenuItem>
            <MenuItem value={20}>Second</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }

export default function StockSellModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        ruc: data.get('ruc'),
        quantity: data.get('quantity'),
        price: data.get('price'),
        type: data.get('type')
      });
      // SignInPost(data.get('username'), data.get('password'));
    };
    return (
      <div>
      <Button onClick={handleOpen} variant="contained">Sell</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sell Order
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Details of order
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="ruc"
            label="ruc"
            name="ruc"
            autoComplete="ruc"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="quantity"
            label="quantity"
            name="quantity"
            autoComplete="quantity"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="price"
            label="price"
            name="price"
            autoComplete="price"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="type"
            label="type"
            name="type"
            autoComplete="type"
            autoFocus
          />
          <Button type="submit" variant="contained">New sell order</Button>
          <Button variant="contained" onClick={handleClose} sx={{ backgroundColor: 'red', ":hover": { backgroundColor: '#940A00' } }}>Cancel Order</Button>
        </Box>
      </Modal>
    </div>
    );
}