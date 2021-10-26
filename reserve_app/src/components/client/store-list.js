import React, { Fragment, useState } from "react";
import Search from "./search";
import StoreListItem from "./store-list-item";

export default function StoreList(props) {
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

  const sampleStores = [
    { id: '1', name: 'Walmart', desciption: "Leverage agile frameworks to provide a robust synopsis for high level overviews.", image: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1209106512%2FDaily-Life-During-Coronavirus-Epidemic-In-Toronto%2F960x0.jpg%3Ffit%3Dscale" },
    { id: '2', name: 'Zara', desciption: "Bring to the table win-win survival strategies to ensure proactive domination.", image: "https://www.retail4growth.com/public/uploads/editor/2020-09-02/1599025250.jpg" },
    { id: '3', name: 'Home Depot', desciption: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.", image: "https://i.cbc.ca/1.3942287.1484794922!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/home-depot.jpg" },
    { id: '4', name: 'Michael Kors', desciption: "Podcasting operational change management inside of workflows to establish a framework.", image: "https://images.businessoffashion.com/site/uploads/2017/11/shutterstock_495261979.jpg?auto=format%2Ccompress&crop=top&fit=crop&h=426&w=764" },
    { id: '5', name: 'Pet Smart', desciption: "Collaboratively administrate empowered markets via plug-and-play networks.", image: "https://i.insider.com/5ba41783ea4002250a8b4567?width=1300&format=jpeg&auto=webp" },
  ];

  const filteredStores = filterStores(sampleStores, searchQuery)

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
              key={store.id}
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