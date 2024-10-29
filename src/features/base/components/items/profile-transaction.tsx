import { Box, Stack, Typography } from "@mui/material"
import logo from '../../../../assets/logo.svg'

function ProfileTransaction() {
    return (
        <>
            <Stack direction={'row'} gap={3} sx={{ backgroundColor: 'background.paper', borderRadius: '5px', p: 2, mb: 2 }}>
                <img
                    src="https://i.pinimg.com/enabled_hi/564x/39/f0/bb/39f0bb0664cdf534463580ecd4c6a0d9.jpg"
                    alt="item" height={150} style={{ objectFit: 'contain', borderRadius: '5px 0 0 5px' }}
                />
                <Stack direction={'column'} justifyContent={'space-between'} sx={{ backgroundColor: 'background.paper' }}>
                    <Box sx={{ backgroundColor: 'background.paper' }}>
                        <Typography sx={{ color: 'secondary.main', fontWeight: 'bold' }}>Mouse</Typography>
                        <Typography sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                            Saturday
                            <Typography variant="caption" sx={{ fontSize: '15px' }}>
                                , 15 March 2022
                            </Typography>
                        </Typography>
                        <Typography sx={{ color: 'text.primary' }}>Price : Rp.500.000</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: 'background.paper' }}>
                        <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>Sub Total : Rp.500.000</Typography>
                    </Box>
                </Stack>
                <img src={logo} alt="logo" width={50} style={{ objectFit: 'contain', backgroundColor: 'transparent' }}/>
            </Stack>
        </>
    )
}

export default ProfileTransaction