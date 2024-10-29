import { Box, Stack } from "@mui/material"
import UserItem from "../components/items/user-item"
import ComplainCard from "../components/card/complain-card"

function Complain() {
    return (
        <Stack direction={'row'}>
            <Box flex={1} height={'85vh'} sx={{ overflowY: 'auto', borderRight: '1px solid #252525', borderTop: '1px solid #252525' }}>
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
            </Box>
            <Box flex={3} height={'85vh'} sx={{ borderTop: '1px solid #252525', overflowY: 'auto' }}>
                <ComplainCard />
            </Box>
        </Stack>
    )
}

export default Complain