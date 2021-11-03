import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

import DayReservationItem from './day-reservations-item';

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

const navItems = [
  { id: 0, label: "Reservations" },
  { id: 1, label: "Details & Hours" },
  { id: 2, label: "Safety Info" }
]

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function StoreTabs(props) {
  const [value, setValue] = useState(0);
  const { description, location, capacity, customer_count, reservation_capacity, safety_measures, opening_hour, closing_hour, store_id, store_name, user_id, reservationDay } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {
            navItems.map((item) => {
              return (
              <Tab label={item.label} {...a11yProps(item.id)} />
              )
            })
          }
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DayReservationItem
        store_id={store_id}
        store_name={store_name}
        store_capacity={capacity}
        user_id={user_id}
        dateString={reservationDay}
        opening_hour={opening_hour}
        closing_hour={closing_hour}
      ></DayReservationItem>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack direction="column" spacing={2}>
        <div>{ description }</div>
        <div>Located at: { location }</div>
        <Typography variant="overline">  
        {
          daysOfWeek.map(day => {
            return (
              <Stack direction="row"
              spacing={2}
              >
              <div>{ day }</div>
              <div>{opening_hour}:00 AM - { closing_hour}:00 PM</div>
            </Stack>
            )
          })
        }
        </Typography>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>Current safety measures: { safety_measures }</div>
        <div>Max capacity allowed: {capacity} </div>
        <div>There are currently {customer_count} people inside </div>
      </TabPanel>
    </Box>
  );
}
