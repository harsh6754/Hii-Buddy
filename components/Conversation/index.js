import { Box, Stack} from '@mui/material';

import React from 'react';
//import { styled, useTheme } from '@mui/material/styles';
//import { LinkSimple, PaperPlaneTilt, Smiley} from 'phosphor-react';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';


const Conversation = () => {
    return (
        <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>
        <Header/>
            {/* Msg */}
            <Box width={'100%'} sx={{ flexGrow: 1,height:"100%",overflowY:"scroll"}}>
            <Message/>
            </Box>
            {/* Footer */}
             <Footer/>
        </Stack>
    );
};

export default Conversation;
