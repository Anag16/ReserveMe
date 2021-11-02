import { TextField, InputBase } from "@mui/material";
import { createTheme } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';

import './search.css'

export default function Search(props) {
  const { searchQuery, setSearchQuery } = props;

  const useStyles = createTheme({
    root: {
      backgroundColor: 'none',
      borderRadius: '10px',
      border: '2px solid rgba(61, 61, 61, 0.8)',
      padding: '1px 3px',
      // color: 'white',
      typography: {
        fontFamily: 'Helvetica Neue'
      },
      adornedStart: {
        fontSize: 20,
      },
      width: '360px',
    }});

// const classes = useStyles();

  return (
    <form action="/" method="get">
      <label htmlFor="store-Search">
        <span className="hidden">Search stores</span>
      </label>
      {/* <input  */}
      <InputBase
        id={'search-controls'}
        // className={useStyles.root}
        startAdornment={<SearchIcon />}
        // onChange={handleChange}
        placeholder="Search..."
        value={ searchQuery }
        // onKeyPress={(event) =>
        //   event.key === "Enter" ? setSearchQuery(event.target.value) : null
        // }
        onChange={event => setSearchQuery(event.target.value)}
        sx={useStyles.root}
      />

        {/* <TextField 
        id="outlined-basic" label="Search..." variant="outlined"
        value={ searchQuery }
        onInput={event => setSearchQuery(event.target.value)}
        type="text"
        placeholder="Search for stores"
        name="search"
        fullWidth
        /> */}
        {/* <button type="submit">Search</button> */}
        {/* <Button variant="contained" size="medium">
          Search
        </Button> */}
    </form>
  )
};


// const formSubmit = (event) => {
//   event.preventDefault();
//   setSearchTerm(val);
//   setVal("");
// };

// function handleChange(evt) {
//   setVal(evt.target.value);
// }