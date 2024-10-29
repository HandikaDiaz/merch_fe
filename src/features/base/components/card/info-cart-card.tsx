import { Stack, Typography } from "@mui/material"

function InfoCart() {
    return (
        <Stack gap={2} mb={5} px={1}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px', color: 'primary.main' }}>Total items : </Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px', color: 'primary.main' }}>3 </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px', color: 'primary.main' }}>Cart total : </Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px', color: 'primary.main' }}>Rp. 400.000</Typography>
            </Stack>
        </Stack>
    )
}

export default InfoCart