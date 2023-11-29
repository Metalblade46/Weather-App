/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import SearchBox from "./SearchBox";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";
export default function WeatherProvider() {
  const [query, setQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [cityInfo, setCityInfo] = useState(null);
  const [ApiKeyInvalid,setApiKeyInvalid] = useState(false);
  const [debounceId, setDebounceId] = useState(0);
  useEffect(() => {
    setCityInfo(null);
    if (query) debounce(query);
  }, [query]);
  function debounce(query) {
    if (debounceId != 0) clearTimeout(debounceId);
    setDebounceId(setTimeout(() => apiCall(query), 1000));
  }
  async function apiCall(text) {
    try {
      let response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${text}&aqi=no`,
      );
      console.log(response.data);
      setNoResults(false);
      setCityInfo(response.data);
    } catch (err) {
      if(err.response.status===403) setApiKeyInvalid(true);
      else
      setNoResults(true);
    }
  }
  return (
    <Box
      width={350}
      mt={4}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <SearchBox query={query} setQuery={setQuery} />
      {noResults && query !== "" && (
        <Box mt={4} sx={{ color: "error.main", fontSize: 24 }}>
          No matching location found.
        </Box>
      )}
      {ApiKeyInvalid && query !== "" && (
        <Box mt={4} sx={{ color: "error.main", fontSize: 24 }}>
          API key has been disabled.
        </Box>
      )}
      {!noResults && cityInfo && (
        <Box mt={4} sx={{ color: "black", fontWeight: "bold", fontSize: 24 }}>
          {cityInfo.location.name + " , " + cityInfo.location.country}
        </Box>
      )}
      {cityInfo && <WeatherCard city={cityInfo} />}
    </Box>
  );
}
