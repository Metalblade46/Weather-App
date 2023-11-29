import AppBar from "./components/Appbar";
import { Box } from "@mui/material";
import WeatherProvider from "./components/WeatherProvider";
import './App.css'

function App() {
  return (
    <>
      <div className="App">
      <AppBar />
      <Box display="flex" justifyContent="center">
        <WeatherProvider />
      </Box>
    </div>
    </>
  )
}

export default App
