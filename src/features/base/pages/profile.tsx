import { Box, Stack, Typography } from "@mui/material"
import ProfileCard from "../components/card/profile-card"
import ProfileTransaction from "../components/items/profile-transaction"

function Profile() {
    return (
        <Stack direction={'row'} sx={{ padding: '10px 70px' }}>
            <Box flex={1.7}  sx={{ overflowY: 'auto' }} width={'100%'}>
                <Typography variant="h4" sx={{ color: 'secondary.main', mb: 2 }}>Profile</Typography>
                <ProfileCard />
            </Box>
            <Box flex={1} sx={{ overflowY: 'auto', height: '80vh' }}>
                <Typography variant="h4" sx={{ color: 'secondary.main', mb: 2, position: 'sticky', top: '0', backgroundColor: 'black', height: '55px' }}>My Transaction</Typography>
                <ProfileTransaction />
                <ProfileTransaction />
                <ProfileTransaction />
                <ProfileTransaction />
                <ProfileTransaction />
                <ProfileTransaction />
            </Box>
        </Stack>
    )
}

export default Profile