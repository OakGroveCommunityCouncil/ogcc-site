import { Box, styled, Typography } from '@mui/material'

export const AppHeader = () => {
  return (
    <Box>
      <HeaderSection sx={{ background: '#43a102', height: '160px' }}>
        <Box sx={{ width: '160px' }}>Logo Placeholder</Box>
        <Typography variant="h1" sx={{ color: 'white' }}>
          Oak Grove Community Council
        </Typography>
      </HeaderSection>
      <HeaderSection>
        <Typography variant="h4">
          Your Community Planning Organization for Oak Grove, Oregon
        </Typography>
        <Box>FB</Box>
      </HeaderSection>
      <HeaderSection>
        <Box>Friends Placeholder</Box>
        <Box>Heart Placeholder</Box>
      </HeaderSection>
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
