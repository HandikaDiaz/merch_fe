import { Box, Stack, Typography } from "@mui/material"
import { ButtonLink } from "../../../../components/custom-button"
import { Icons8Plus, LineMdMinusCircle } from "../../../../components/icons"

function DetailProduct() {
    return (
        <Stack sx={{ padding: '5px 150px', mt: 7 }}>
            <Stack direction={'row'} gap={5}>
                <img
                    src="https://i.pinimg.com/enabled_hi/564x/39/f0/bb/39f0bb0664cdf534463580ecd4c6a0d9.jpg"
                    alt="item" height={500} style={{ objectFit: 'contain', borderRadius: '10px' }}
                />
                <Stack sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ color: 'primary.main' }}>
                        <Typography variant="h4" sx={{ color: 'secondary.main', mb: 1 }}>Mouse</Typography>
                        <Typography>Stock : 600</Typography>
                        <Typography>- Wireless Mouse</Typography>
                        <Typography>- Wireless Mouse</Typography>
                        <Typography>- Wireless Mouse</Typography>
                        <Typography>- Wireless Mouse</Typography>
                        <Typography>- Wireless Mouse</Typography>
                        <Typography sx={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in adipisci laborum voluptatibus nostrum dolorem id, fugit doloribus vitae. Minima illo eaque distinctio fugit eius soluta ducimus nihil sit omnis?</Typography>
                    </Box>
                    <Stack direction={'row'} justifyContent={'space-between'} sx={{ color: 'secondary.main', borderRadius: '10px', py: 2 }}>
                        <Stack direction={'row'} gap={1.5} alignItems={'center'}>
                            <LineMdMinusCircle />
                            <Typography sx={{ fontSize: '20px' }}>2</Typography>
                            <Icons8Plus />
                        </Stack>
                        <Typography sx={{ fontSize: '20px' }}>Rp.300.000</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <ButtonLink to={''} width={'77.3% !important'} py={1}>
                    Buy
                </ButtonLink>
            </Box>
        </Stack>
    )
}

export default DetailProduct