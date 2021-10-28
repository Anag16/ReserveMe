import React, { Fragment, useState, useEffect } from "react";
import Search from "./search";
import StoreListItem from "./store-list-item";
import axios from 'axios';

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
    <Fragment>
      <div className="List">
        <h1>Store List</h1>
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ul>
          {filteredStores.map((store) => (
            // <li key={store.id}> {store.name}</ li>
            <StoreListItem
              key={store.store_id}
              store_id = {store.store_id}
              name={store.name}
              desciption={store.desciption}
              img={store.image}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
}