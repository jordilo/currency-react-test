import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

type CardProps = {
    title: string;
    subTitle: string;
    description: string;
    image: string;
}

export function CardComponent({ image, description, subTitle, title }: CardProps) {


    return <Card sx={{ maxWidth: 345 }}>
        <CardActionArea> <CardMedia component="img" height="140" image={image} alt="profile image" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"> {title} </Typography>
                <Typography variant="h6" color="text.secondary"> {subTitle} </Typography>
                <Typography variant="body2" color="text.secondary"> {description} </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
}