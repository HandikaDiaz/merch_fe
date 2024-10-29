import { Box, Stack, Typography } from "@mui/material"

function ProfileCard() {
    return (
        <Stack direction={'row'} gap={5}>
            <img
                src="https://i.pinimg.com/736x/86/01/b1/8601b1511b1986fc1e52410a9daa7e87.jpg"
                alt="item" height={400} style={{ objectFit: 'contain', borderRadius: '10px' }}
            />
            <Box>
                <Box sx={{ mb: 1.5 }}>
                    <Typography sx={{ color: 'secondary.main' }}>Name</Typography>
                    <Typography sx={{ color: 'primary.main' }}>Handika</Typography>
                </Box>
                <Box sx={{ mb: 1.5 }}>
                    <Typography sx={{ color: 'secondary.main' }}>Email</Typography>
                    <Typography sx={{ color: 'primary.main' }}>Handika@gmail.com</Typography>
                </Box>
                <Box sx={{ mb: 1.5 }}>
                    <Typography sx={{ color: 'secondary.main' }}>Phone</Typography>
                    <Typography sx={{ color: 'primary.main' }}>0858204027</Typography>
                </Box>
                <Box sx={{ mb: 1.5 }}>
                    <Typography sx={{ color: 'secondary.main' }}>Gender</Typography>
                    <Typography sx={{ color: 'primary.main' }}>Male</Typography>
                </Box>
                <Box sx={{ mb: 1.5 }}>
                    <Typography sx={{ color: 'secondary.main' }}>Address</Typography>
                    <Typography sx={{ color: 'primary.main' }}>Lorem ipsum</Typography>
                </Box>
            </Box>
        </Stack>
    )
}

export default ProfileCard