import * as React from 'react';
import Button from '@mui/joy/Button';
import {Alert, AspectRatio, CssVarsProvider, IconButton, LinearProgress, Sheet, styled} from "@mui/joy";
import Typography from '@mui/joy/Typography';
import Close from '@mui/icons-material/Close';
import {useState} from "react";
import {Check} from "@mui/icons-material";

const CenteredContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Height of the container is 100% of the viewport height
    position: 'relative', // Needed for video positioning
    transform: 'translateY(-5%)', // Adjust this value to move the container up

});

const VideoBackground = styled('video')({
    position: 'absolute',
    right: '0',
    bottom: '0',
    minWidth: '100%',
    minHeight: '100%',
    zIndex: '-1', // Ensure it stays in the background
    objectFit: 'cover', // Ensure the aspect ratio is maintained
    filter: 'brightness(50%)', // Darken the video
});

export default function Home() {
    const [showAlert, setShowAlert] = useState(false);
    const handleClose = () => {
        setShowAlert(false);
    };
    return (
        <CssVarsProvider>

            <VideoBackground autoPlay loop muted playsInline>
                <source src="/videos/fishes.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </VideoBackground>
            <CenteredContainer>

                <Sheet
                    sx={{
                        width: 300,
                        mx: 'auto', // margin left & right
                        my: 4, // margin top & bottom
                        py: 3, // padding top & bottom
                        px: 2, // padding left & right
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                        position: 'relative', // Ensure it's above the video
                        backgroundColor: 'background.paper', // Set a background color for readability
                    }}
                >
                    {showAlert && (
                        <Alert
                            size="lg"
                            color="success"
                            variant="solid"
                            invertedColors
                            startDecorator={
                                <AspectRatio
                                    variant="solid"
                                    ratio="1"
                                    sx={{
                                        minWidth: 40,
                                        borderRadius: '50%',
                                        boxShadow: '0 2px 12px 0 rgb(0 0 0/0.2)',
                                    }}
                                >
                                    <div>
                                        <Check fontSize="xl2"/>
                                    </div>
                                </AspectRatio>
                            }
                            endDecorator={
                                <IconButton
                                    variant="plain"
                                    sx={{
                                        '--IconButton-size': '32px',
                                        transform: 'translate(0.5rem, -0.5rem)',
                                    }}
                                    onClick={handleClose}
                                >
                                    <Close/>
                                </IconButton>
                            }
                            sx={{alignItems: 'flex-start', overflow: 'hidden'}}
                        >
                            <div>
                                <Typography level="title-lg">Загружаю игру...</Typography>
                                <Typography level="body-sm">
                                    Но вообще я ее не загружу, так как разработчик ленивый...
                                </Typography>
                            </div>
                            <LinearProgress
                                variant="solid"
                                color="success"
                                value={40}
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    borderRadius: 0,
                                }}
                            />
                        </Alert>
                    )}
                    <div>
                        <Typography level="h4" component="h1">
                            Talent Q тест
                        </Typography>
                        <Typography level="body-sm">
                            Сохрани жизнь рыбкам, ведь рыбки ничего плохого тебе не делали...
                        </Typography>
                    </div>
                    <Button sx={{mt: 1}} onClick={() => setShowAlert(true)}>
                        Попробовать
                    </Button>

                </Sheet>
            </CenteredContainer>
        </CssVarsProvider>
    );
}
