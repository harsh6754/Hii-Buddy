import { Box, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles'
import DotsThree from './DotsThree';


const LinkMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack direction={'row'} justifyContent={el.incoming ? "start " : " end"}>
            <Box p={1.5}
                sx={{
                    backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content",
                }}
            >
                <Stack spacing={2}>
                    <Stack
                        p={2}
                        spacing={3}
                        alignItems={'start'}
                        direction={'column'}
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1
                        }}
                    >
                        <img src={el.preview} alt={el.message} style={{
                            maxHeight: 210, borderRadius: "10px"
                        }}
                        />
                        <Stack spacing={2}>
                            <Typography variant='subtitle2'>
                                Creating Chat App
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                sx={{
                                    color: theme.palette.primary.main
                                }}
                                component={Link}
                                to="//https://www.youtube.com"
                            >
                                www.youtube.com
                            </Typography>
                        </Stack>
                        <Typography variant='body2' color={el.incoming ? theme.palette.text : "#fff"}>
                            {el.message}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
            <DotsThree/>
        </Stack>
    );
}

export default LinkMsg;
