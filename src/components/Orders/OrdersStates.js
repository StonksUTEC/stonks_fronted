import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { OrderBox, OrderBoxCompleted } from './OrderBox';
import { useEffect } from 'react';
import { getCompletedOrders, getOrders } from '../../connections/orders/Order';
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function OrdersStates() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [orders, setOrders] = useState([])
  const [completedOrders, setCompletedOrders] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOrders();
      setOrders(data);
    }
    const fetchData2 = async () => {
      const data = await getCompletedOrders();
      setCompletedOrders(data);
    }
    fetchData();
    fetchData2();
  }, []);
  let incompleted_orders = 0;
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="In process" {...a11yProps(0)} />
          <Tab label="Completed" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        {
        orders.map((order) => (
          order.completeorder == null ? <OrderBox key={incompleted_orders++} order={order}>{order}</OrderBox> : null
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {
          completedOrders.map((order) => (
            <OrderBoxCompleted key={incompleted_orders++} order={order}>{order}</OrderBoxCompleted>
          ))
        }
      </TabPanel>
    </Box>
  );
  
}
