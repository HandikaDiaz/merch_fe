import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../../../../components/custom-button'

function ProductItem() {
  return (
    <Card sx={{ width: '300px', flexShrink: 0, scrollSnapAlign: 'start' }}>
      <Link to={'/detail'} style={{ textDecoration: 'none' }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://i.pinimg.com/enabled_hi/564x/39/f0/bb/39f0bb0664cdf534463580ecd4c6a0d9.jpg"
          title="green iguana"
        />
        <CardContent sx={{ backgroundColor: 'background.paper' }}>
          <Typography sx={{ color: 'secondary.main', fontSize: '20px', fontWeight: 'bold' }}>Mouse</Typography>
          <Stack direction={'row'} justifyContent={'space-between'} mt={3}>
            <Typography sx={{ color: 'primary.main' }}>Rp.400.000</Typography>
            <Typography sx={{ color: 'primary.main' }}>Stock : 600</Typography>
          </Stack>
        </CardContent>
      </Link>
      <Stack direction={'row'} width={'100%'} gap={.5}>
        <ButtonLink sx={{ width: '100%', fontSize: '18px', py: 1, bgcolor: 'primary.main', color: 'secondary.main', ":hover": { bgcolor: 'secondary.main', color: 'primary.main' } }} to={'/detail'}>View product</ButtonLink>
        <ButtonLink sx={{ width: '100%', fontSize: '18px', py: 1 }} to={''}>Add to cart</ButtonLink>
      </Stack>
    </Card>
  )
}

export default ProductItem