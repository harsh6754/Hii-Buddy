import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { DownloadSimple, Image } from 'phosphor-react';
import DotsThree from './DotsThree';

const DocMsg = ({ el }) => {
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
                    <Stack p={2}
                        direction={'row'}
                        spacing={3}
                        alignItems={'center'}
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1,
                        }}
                    >
                        <Image size={48} />
                        <Typography variant='caption'> Abstract.png</Typography>
                        <IconButton><DownloadSimple /></IconButton>
                    </Stack>
                    <Typography variant='body2' color={el.incoming ? theme.palette.text : "#fff"}>{el.message}</Typography>
                </Stack>
            </Box>
            <DotsThree/>
        </Stack>
    );
}

export default DocMsg;
