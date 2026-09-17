import { Box, styled, Typography, Link as MuiLink, Button } from '@mui/material'
import { Link } from '@tanstack/react-router'

export const AppHeader = () => {
  return (
    <Box>
      <HeaderSection sx={{ background: '#43a102' }}>
        {/* TODO: Add logo */}
        <Box sx={{ width: '160px' }}>Logo Placeholder</Box>
        <Typography variant="h1" sx={{ color: 'white' }}>
          Oak Grove Community Council
        </Typography>
      </HeaderSection>
      <HeaderSection>
        <Typography variant="h4">
          Your Community Planning Organization for Oak Grove, Oregon
        </Typography>
        <MuiLink href="https://www.facebook.com/Oakgrovecommunitycouncil/">
          {/* <Box>FB</Box> */}
          <img
            src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e316f544f9094143b9eac01f1f19e697.png"
            alt="Facebook Page"
          />
        </MuiLink>
      </HeaderSection>
      <HeaderSection>
        {/* TODO:  Add images to MuiLinks */}
        <MuiLink href="https://friendsofogcc.org/" target="_blank">
          <Box>Friends Placeholder</Box>
        </MuiLink>
        <MuiLink
          href="https://friendsofogcc.org/heart-of-the-community-campaign/"
          target="_blank"
        >
          <Box>Heart Placeholder</Box>
        </MuiLink>
      </HeaderSection>
      <HeaderSection>
        {/* TODO: Add hrefs to sherrif dept and newsletter */}
        <Button href="" variant="contained" color="error">
          Sheriff's Dept. Statistics
        </Button>
        <Button href="" variant="outlined">
          Sign Up for OGCC's Email Newsletter
        </Button>
        <Button
          href="https://www.clackamas.us/dm/publicalerts"
          target="_blank"
          variant="contained"
          color="error"
        >
          Sign Up for Emergency Alerts
        </Button>
      </HeaderSection>
      <NavSection>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/meetings">Meetings</Link>
        <Link to="/links">Links</Link>
      </NavSection>
    </Box>
  )
}

const HeaderSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  padding: '16px',
})

const NavSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '16px',
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
})
