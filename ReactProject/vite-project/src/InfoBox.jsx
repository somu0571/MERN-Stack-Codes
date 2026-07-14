
import "./Infobox.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1599059021750-82716ae2b661?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>

            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={INIT_URL}
                        title="weather"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Weather Report
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature: {info.temp}°C <br />
                            Feels Like: {info.feelslike}°C <br />
                            Humidity: {info.humidity}% <br />
                            Weather: {info.weather}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}