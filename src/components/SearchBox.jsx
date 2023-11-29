import { TextField } from "@mui/material";
export default function SearchBox({ query, setQuery }) {
  return (
    <>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter Location"
        variant="outlined"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </>
  );
}
