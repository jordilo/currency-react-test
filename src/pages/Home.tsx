import { Button, Card, CardActions, CardContent, CircularProgress, Typography } from "@mui/material"
import { useCurrency } from "../hooks/useCurrency"

export function Home() {

    const { isLoading, curentCurrency, switchCurrency, rate } = useCurrency()


    return <div>
        {isLoading ? <CircularProgress size="3rem" /> :
            (<>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} component="div">
                            Current {curentCurrency} rate is
                        </Typography>
                        <Typography variant="h5">
                            {rate}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={switchCurrency} size="small">Switch currency</Button>
                    </CardActions>
                </Card>
            </>)
        }
    </div>


}