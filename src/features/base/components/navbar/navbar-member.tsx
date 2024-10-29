import { Avatar, Badge, IconButton, Input, Stack, Tooltip } from "@mui/material";
import React from "react";
import logo from '../../../../assets/logo.svg';
import { ButtonLink } from "../../../../components/custom-button";
import { LineMdEmail, LineMdEmailAlert, LineMdSearch, MdiLightCart } from "../../../../components/icons";
import DropDownNavbar from "../modal/navbar";
import DropDownCart from "../modal/cart";

function NavbarMember() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [anchorElCart, setAnchorElCart] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenCartMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElCart(event.currentTarget);
    };
    const handleCloseCartMenu = () => {
        setAnchorElCart(null);
    };
    const badgeContent = 10;

    return (
        <Stack direction={'row'} p={2} sx={{ justifyContent: 'space-between' }}>
            <Stack sx={{ ml: 1.5 }} flex={1} direction={'row'} alignItems={'center'} justifyContent={'start'}>
                <img src={logo} alt="logo" width={50} />
                <ButtonLink to={'/'} sx={{ backgroundColor: 'transparent !important', ml: 4, fontSize: '20px' }}>DumbMerch</ButtonLink>
            </Stack>
            <Stack flex={3} direction={'row'} gap={2} sx={{ color: 'primary.main', alignItems: 'center' }} justifyContent={'center'}>
                <LineMdSearch />
                <Input sx={{ px: 1, width: '100%' }} placeholder="Search…" />
            </Stack>
            <Stack direction={'row'} gap={1.6} justifyContent={'end'} sx={{ color: 'primary.main', alignItems: 'center' }} flex={1}>
                <ButtonLink to={'/complain'} sx={{ backgroundColor: 'transparent !important', mr: 2 }}>
                    <Badge color="error" badgeContent={badgeContent}>
                        {badgeContent > 0 ? <LineMdEmailAlert /> : <LineMdEmail />}
                    </Badge>
                </ButtonLink>
                <IconButton onClick={handleOpenCartMenu} sx={{ backgroundColor: 'transparent !important', mr: .5 }}>
                    <Badge color="error" badgeContent={9}>
                        <MdiLightCart />
                    </Badge>
                </IconButton>
                <Tooltip title="Profile">
                    <IconButton onClick={handleOpenUserMenu}>
                        <Avatar src="https://i.pinimg.com/736x/e5/3c/72/e53c729536000bbe560d80be541a4064.jpg" />
                    </IconButton>
                </Tooltip>
                <DropDownNavbar anchorEl={anchorElUser} handleClose={handleCloseUserMenu} />
                <DropDownCart anchorEl={anchorElCart} handleClose={handleCloseCartMenu} />
            </Stack>
        </Stack>
    )
}

export default NavbarMember