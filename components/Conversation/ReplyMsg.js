import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import DotsThree from './DotsThree';

const ReplyMsg = ({ el }) => {
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
                        direction={'column'}
                        spacing={3}
                        alignItems={'center'}
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1
                        }}
                    >
                        <Typography variant='body2' color={theme.palette.text}>
                            {el.message}
                        </Typography>

                    </Stack>
                    <Typography variant='body2' color={el.incoming ? theme.palette.text : "#fff"}>
                        {el.reply}
                    </Typography>
                </Stack>
            </Box>
            <DotsThree/>
        </Stack>
    );
}

export default ReplyMsg;
