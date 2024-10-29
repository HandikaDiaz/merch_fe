import { Menu, MenuItem } from "@mui/material";
import { ButtonLink } from "../../../../components/custom-button";
import { LineMdAccount, LineMdLogout } from "../../../../components/icons";

interface DropDownProps {
    anchorEl: null | HTMLElement;
    handleClose: () => void;
}

const settings = ['Profile', 'Logout'];
const links = ['/profile', '/'];
const profile = [<LineMdAccount />, <LineMdLogout />]

function DropDownNavbar({ anchorEl, handleClose }: DropDownProps) {
    const open = Boolean(anchorEl);

    return (
        <Menu
            sx={{ mt: '55px' }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
        >
            {settings.map((setting, index) => (
                <MenuItem key={setting} onClick={handleClose} sx={{ px: 3, gap: 2 }}>
                    {profile[index]} 
                    <ButtonLink to={links[index]} sx={{ textAlign: 'center', backgroundColor: 'transparent !important' }}>
                        {setting}
                    </ButtonLink>
                </MenuItem>
            ))}
        </Menu>
    );
}

export default DropDownNavbar;
