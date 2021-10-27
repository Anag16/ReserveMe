import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export default function Search(props) {
  const { searchQuery, setSearchQuery } = props;

  return (
    <form action="/" method="get">
      <label htmlFor="store-Search">
        <span className="hidden">Search stores</span>
      </label>
      {/* <input  */}
        <TextField 
        id="outlined-basic" label="Search..." variant="outlined"
        value={ searchQuery }
        onInput={event => setSearchQuery(event.target.value)}
        type="text"
        placeholder="Search for stores"
        name="search"
        />
        {/* <button type="submit">Search</button> */}
        <Button variant="contained" size="medium">
          Search
        </Button>
    </form>
  )
};