import { Menu, MenuItem } from '@mui/material';
import { DotsThreeVertical } from 'phosphor-react';
import React from 'react';
import { Message_options } from '../../data';

const DotsThree = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <DotsThreeVertical
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                size={20}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {Message_options.map((el, i) => (
                    <MenuItem key={i} onClick={handleClose}>
                        {el.title}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default DotsThree;
