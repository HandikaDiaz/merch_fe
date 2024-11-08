import { Avatar, Box, Stack, Typography } from "@mui/material"

function UserItem({ username, lastMessage }: any) {
    return (
        <Stack direction={'row'} gap={2} alignItems={'center'} mx={4} mt={2} mb={4} justifyContent={'left'}>
            <Avatar alt={username} src="https://i.pinimg.com/enabled_hi/564x/85/30/49/85304998efcd1abb394635b9d334b5b5.jpg" />
            <Box>
                <Typography sx={{ fontSize: '14px', color: 'primary.main' }}>{username}</Typography>
                <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>{lastMessage}</Typography>
            </Box>
        </Stack>
    );
}

export default UserItem