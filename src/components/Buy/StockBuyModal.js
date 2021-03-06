import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import cookies from '../../libs/CookiesApp';
import { SERVER_HOST } from '../../libs/ServerConnection';

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

export default function StockBuyModal({ stock }) {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const new_order = {
      company_ruc: data.get('ruc'),
      quantity: data.get('quantity'),
      price: data.get('price'),
      transaction_type: data.get('type')
    }
    const config = {
      'data': new_order,
    }
    const headers = {
      'headers': { Authorization: "Token " + cookies.get("Token") }
    }
    
    await axios.post(SERVER_HOST + '/api/stocks/new-order/', new_order, headers).then(
      window.location.replace('/orders')
    );
  };
  return (
    <div>
      <Button onClick={handleOpen} variant="contained">New order</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New order
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
            defaultValue={stock.ruc}
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
            defaultValue={stock.lastest_price}
            autoFocus
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              margin="normal"
              required
              fullWidth
              label="type"
              name="type"
              autoComplete="type"
              autoFocus
              onChange={handleChange}
            >
              <MenuItem value={"BM"}>BM</MenuItem>
              <MenuItem value={"BL"}>BL</MenuItem>
              <MenuItem value={"BS"}>BS</MenuItem>
              <MenuItem value={"SL"}>SL</MenuItem>
              <MenuItem value={"SS"}>SS</MenuItem>
              <MenuItem value={"SM"}>SM</MenuItem>
            </Select>
          </FormControl>
          {/* Divider */}
          <hr></hr>
          <Button type="submit" variant="contained">New order</Button>
          <Button variant="contained" onClick={handleClose} sx={{ backgroundColor: 'red', ":hover": { backgroundColor: '#940A00' } }}>Cancel Order</Button>
        </Box>
      </Modal>
    </div>
  );
}