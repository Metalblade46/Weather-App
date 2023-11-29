/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardActionArea,
  Typography,
  CardContent,
} from "@mui/material";
export default function WeatherCard({ city }) {
  return (
    <Card sx={{ mt: 4 }} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Box sx={{ display: "flex" }}>
            <img src={city.current.condition.icon} />
          </Box>
          <Typography
            sx={{ display: "flex", justifyContent: "space-between" }}
            gutterBottom
            variant="body1"
            fontWeight="bold"
            component="div"
          >
            <span>Temperature</span>
            <span>
              {city.current.temp_c}°C / {city.current.temp_f}°F
            </span>
          </Typography>
          <Typography
            sx={{ display: "flex", justifyContent: "space-between" }}
            gutterBottom
            variant="body1"
            fontWeight="bold"
            component="div"
          >
            <span>Condition</span>
            <span>{city.current.condition.text}</span>
          </Typography>
          <Typography
            sx={{ display: "flex", justifyContent: "space-between" }}
            gutterBottom
            variant="body1"
            fontWeight="bold"
            component="div"
          >
            <span>WindSpeed</span>
            <span>{city.current.wind_kph} km/h</span>
          </Typography>
          <Typography
            sx={{ display: "flex", justifyContent: "space-between" }}
            gutterBottom
            variant="body1"
            fontWeight="bold"
            component="div"
          >
            <span>Humidity</span>
            <span>{city.current.humidity}%</span>
          </Typography>
          <Typography
            sx={{ display: "flex", justifyContent: "space-between" }}
            gutterBottom
            variant="body1"
            fontWeight="bold"
            component="div"
          >
            <span>Cloud Coverage</span>
            <span>{city.current.cloud}%</span>
          </Typography>
          <Typography
            sx={{ display: "flex", justifyContent: "space-between" }}
            gutterBottom
            variant="body1"
            fontWeight="bold"
            component="div"
          >
            <span>Last Updated</span>
            <span>{city.current.last_updated}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
