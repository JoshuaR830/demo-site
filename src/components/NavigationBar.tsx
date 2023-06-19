import { AppBar, Box, Container, Icon, Paper, SvgIcon, Toolbar, Typography } from "@mui/material";

export default function NavigationBar() {
    return (
        <AppBar position='static'>
            <Container>
                <Toolbar disableGutters>
                    <Typography>Demo Site</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}