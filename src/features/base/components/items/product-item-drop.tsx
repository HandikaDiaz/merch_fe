import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { LineMdMinusCircle, Icons8Plus, LineMdRemove } from '../../../../components/icons'

function ProductItemDropdown() {
    return (
        <Card sx={{ flexShrink: 0, scrollSnapAlign: 'start', bgcolor: 'transparent' }}>
            <Link to={'/detail'} style={{ textDecoration: 'none' }}>
                <Stack direction={'row'} alignItems={'start'}>
                    <img
                        style={{ height: 150}}
                        src="https://i.pinimg.com/enabled_hi/564x/39/f0/bb/39f0bb0664cdf534463580ecd4c6a0d9.jpg"
                        title="cart"
                    />
                    <CardContent sx={{ width: '100%', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography sx={{ color: 'secondary.main', fontSize: '18px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
                                Mouse <LineMdRemove />
                            </Typography>
                            <Typography sx={{ color: 'primary.main', fontSize: '16px', mt: 1 }}>Rp.400.000</Typography>
                        </Box>
                        <Stack direction={'row'} gap={1.5} alignItems={'center'} justifyContent={'start'} mt={5}>
                            <Stack direction={'row'} border={'1px solid white'} sx={{ borderRadius: '10px', p: 1 }}>
                                <Box sx={{ ml: 1.3, borderRight: '1px solid white', pr: 1.9 }}>
                                    <LineMdMinusCircle />
                                </Box>
                                <Typography sx={{ fontSize: '18px', px: 8.5, color: 'primary.main' }}>2</Typography>
                                <Box sx={{ mr: 1.3, borderLeft: '1px solid white', pl: 1.9 }}>
                                    <Icons8Plus />
                                </Box>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Stack>
            </Link>
        </Card>
    )
}

export default ProductItemDropdown