import { Avatar, Box, IconButton, Menu, MenuItem, Stack, Tooltip } from "@mui/material";
import React from "react";
import logo from '../../../../assets/logo.svg';
import { ButtonLink } from "../../../../components/custom-button";

const settings = ['Profile', 'Dashboard', 'Logout'];
const link = ['/profile', '/dashboard', '/']

function NavbarAdmin() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Stack direction={'row'} p={2} sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ ml: 1.5 }}>
                <img src={logo} alt="logo" width={50} />
            </Box>
            <Stack direction={'row'} gap={5} sx={{ color: 'primary.main', alignItems: 'center' }}>
                <ButtonLink to={'/complain'} sx={{ backgroundColor: 'transparent !important', mr: 2 }}>Complain</ButtonLink>
                <ButtonLink to={'/dashboard/list-category'} sx={{ backgroundColor: 'transparent !important' }}>Category</ButtonLink>
                <ButtonLink to={'/dashboard/list-product'} sx={{ backgroundColor: 'transparent !important' }}>Product</ButtonLink>
                <Tooltip title="Profile">
                    <IconButton onClick={handleOpenUserMenu}>
                        <Avatar src="https://i.pinimg.com/736x/e5/3c/72/e53c729536000bbe560d80be541a4064.jpg" />
                    </IconButton>
                </Tooltip>
                <Menu sx={{ mt: '55px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}>
                    {settings.map((setting, index) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <ButtonLink to={link[index]} sx={{ textAlign: 'center', backgroundColor: 'transparent !important' }}>{setting}</ButtonLink>
                        </MenuItem>
                    ))}
                </Menu>
            </Stack>
        </Stack>
    )
}

export default NavbarAdmin