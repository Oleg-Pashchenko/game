import React from 'react';
import { styled } from '@mui/system';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import {
    AspectRatio,
    Box,
    Card,
    CardActions,
    CardContent, CardOverflow,
    Chip,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemDecorator
} from "@mui/joy";
import {Add, Check, KeyboardArrowRight} from "@mui/icons-material";
import Button from "@mui/joy/Button";

// Стилизованный контейнер для страницы
const GameContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    height: '100vh', // Высота во весь экран
    backgroundColor: '#14053C', // Темно-синий фон
});


export default function Game() {
    return (
        <GameContainer>
            <Box
                sx={{
                    width:'100%',
                    margin: 5
            }}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Card orientation="horizontal" variant="outlined" sx={{ width: '35'  }}>

                        <CardOverflow>
                            <AspectRatio ratio="1" sx={{ width: 150 }}>
                                <img
                                    src="https://w.forfun.com/fetch/f8/f8fc6d0ae6980e3a6b525148cd8f11b3.jpeg"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>

                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                <Typography fontWeight="md" textColor="success.plainColor">
                                    Желтая рыба
                                </Typography>
                            <Button startDecorator={<Add />}>add</Button>
                            <Button endDecorator={<KeyboardArrowRight />} color="success">
                                close
                            </Button>
                            </Box>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <Card variant="soft">
                        <CardContent>
                            <Typography level="title-md">Soft card</Typography>
                            <Typography>Description of the card.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </Box>
        </GameContainer>
    );
}
