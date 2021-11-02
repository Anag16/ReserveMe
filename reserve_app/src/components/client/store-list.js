import React, { useState, useEffect } from "react";
import Search from "./search";
import StoreListItem from "./store-list-item";
import axios from 'axios';
import { Grid, Box, Stack, Typography } from '@mui/material';

import './store-list.css';
import { blue } from "@mui/material/colors";

export default function StoreList(props) {
  const [isLoading, setLoading] = useState(true);
  const [stores, setStores] = useState();
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filterStores = (stores, query) => {
    if (!query) {
      return stores;
    }

    return stores.filter((store) => {
      const storeName = store.name.toLowerCase();
      return storeName.includes(query);
    });
  };

  useEffect(() => {
    axios.get(`/api/stores`)
      .then(res => {
        if (res.status === 200) {
          setStores(res.data);
          setLoading(false);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error. Please try again');
      });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const filteredStores = filterStores(stores, searchQuery)

  return (
    <div className="List">
      <Stack spacing={2} direction="column" sx={{alignItems: "center", justifyContent: "center"}}>
        <Box sx={{ 
          backgroundColor: blue[200], 
          padding: 2, 
          width: '100%', 
          display: "flex", 
          // flexDirection: "column",
          justifyContent: "center", 
          alignItems: "center"
          }}>
          <Typography variant="h5" sx={{padding:2}}> Search stores: </Typography>
          <Search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Box>
        <Grid
          container
          rowSpacing={1.5}
          columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}
          direction="row"
          wrap
          sx={{ padding: 3, alignItems: "center", justifyContent: "center" }}
        >
          {filteredStores.map((store) => (
            <Grid item xs={4}>
              <StoreListItem
                key={store.store_id}
                store_id={store.store_id}
                name={store.name}
                desciption={store.desciption}
                img={store.image}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
}