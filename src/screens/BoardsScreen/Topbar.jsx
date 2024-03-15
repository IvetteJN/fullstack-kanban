import { AppBar, Toolbar, Button, Stack } from '@mui/material'
import LogoImg from '../../assets/KANBANBoardTopbar.png';
import ImageEl from '../../components/utils/ImageEl';
import LogoutIcon from '@mui/icons-material/ExitToApp';

const Topbar = ({ openModal }) => {
    return (
        <AppBar position='static'>
            <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: '#121212' }}>
                <ImageEl sx={{ width: 100 }} src={LogoImg} alt='LogoKanban' />
                <Stack direction='row' spacing={2}>
                    <Button onClick={openModal} variant='contained'> Create Board </Button>
                    <Button startIcon={<LogoutIcon />} color='inherit'>Logout</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar