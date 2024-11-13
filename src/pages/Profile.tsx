import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { title } from "process";

export function Profile() {

    const user = {
        imageUrl: 'https://th.bing.com/th/id/OIP.v-ctpndIoNd6VnKgMefYcwHaE8?rs=1&pid=ImgDetMain',
        name: 'Lasy',
        title: 'Dog',
        description: 'A super dog hero'
    }

    return <Card sx={{ maxWidth: 345 }}>
        <CardActionArea> <CardMedia component="img" height="140" image={user.imageUrl} alt="profile image" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"> {user.name} </Typography>
                <Typography variant="h6" color="text.secondary"> {user.title} </Typography>
                <Typography variant="body2" color="text.secondary"> {user.description} </Typography>
            </CardContent>
        </CardActionArea>
    </Card>

}