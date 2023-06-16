import { TitlePortal } from 'react-admin'
import Logo from '../../assets/icons/libro.png'
import { Stack, Typography } from '@mui/material'
import { AppBarCustom, Image, ImageContainer, titleStyles } from './styles'
import { MUI_COMPONENTS_PROPS, titles } from '../../Common'

const {
    stack
} = MUI_COMPONENTS_PROPS;

const AppBar = () => {
    
    return (
        <AppBarCustom>
            <TitlePortal />
            <Stack direction={stack.direction.row} alignItems={stack.alignItems.center} gap='1rem' flex={1}>
                <Typography sx={titleStyles()}>{ titles.primary }</Typography>
                <ImageContainer>
                    <Image src={Logo} alt='logo' />
                </ImageContainer>
                <Typography sx={titleStyles()}>{ titles.secondary }</Typography>
            </Stack>
        </AppBarCustom>
    )
}

export default AppBar