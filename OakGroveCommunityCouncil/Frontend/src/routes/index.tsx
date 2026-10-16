import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  styled,
  Typography,
} from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <HomeContainer>
        <Box
          sx={{
            gridColumn: 1,
            textAlign: 'center',
            border: '1px solid black',
            borderRadius: '8px',
            padding: '16px',
          }}
        >
          <ContentSection>
            <Typography>Welcome to the official website of the</Typography>
            <Typography sx={{ fontWeight: 600 }}>
              Oak Grove Community Council
            </Typography>
            <Typography>often called the "Oak Grove CPO" or OGCC</Typography>
          </ContentSection>
          <List>
            <Typography sx={{ fontWeight: 600 }}>
              Our Purpose and Goals:
            </Typography>
            <ListItem>
              To bring together persons who share a common concern for the Oak
              Grove Community.
            </ListItem>
            <ListItem>
              To inform Citizens in the Oak Grove Community of all proposed
              developments and/or changes in land use that will affect the area,
              and to provide an opportunity for Citizen input.
            </ListItem>
            <ListItem>
              To make recommendations to Clackamas County regarding land use,
              including zoning, conditional use permits, residential and/or
              industrial development.
            </ListItem>
            <ListItem>
              To organize Citizens in the Oak Grove Community to establish their
              own priorities for land use.
            </ListItem>
            <ListItem>
              To provide the Oak Grove Community with a vehicle for establishing
              an organized two-way communication channel with public agencies
              and governmental organizations.
            </ListItem>
            <ListItem>
              To aid the Oak Grove Community in preserving and enhancing
              neighborhoods.
            </ListItem>
            <ListItem>
              To advise County, Regional, State, and Federal agencies about the
              Oak Grove Community's concerns and problems, and suggest solutions
              for same.
            </ListItem>
            <ListItem>
              To provide opportunities for Service Districts to update, and
              receive feedback from, the Oak Grove Community on services
              offered.
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            gridColumn: 1,
            textAlign: 'center',
            border: '1px solid black',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'rgb(21, 124, 209)',
            color: 'white',
          }}
        >
          <ContentSection>
            <Typography variant="h6">Need help? Have a question?</Typography>
          </ContentSection>
          <ContentSection>
            Contact us by clicking the icon or link below, or by copying and
            pasting our email address into the "TO" line in an email.
          </ContentSection>
          <ContentSection>
            <IconButton
              href="mailto:contact@oakgrovecpo.org"
              target="_self"
              sx={{ color: '#E6EB0F' }}
            >
              <EmailOutlinedIcon fontSize="large" />
            </IconButton>
          </ContentSection>
          <Link
            href="mailto:contact@oakgrovecpo.org"
            target="_self"
            sx={{ color: 'white' }}
          >
            contact@oakgrovecpo.org
          </Link>
        </Box>
        <Box
          sx={{
            gridColumn: 2,
            gridRow: '1 / 3',
            textAlign: 'center',
            border: '1px solid black',
            borderRadius: '8px',
            padding: '16px',
          }}
        >
          <ContentSection>
            <Typography sx={{ fontWeight: 600 }}>
              Regular Council Business Meetings
            </Typography>
            <Typography>
              The Community Council meets on the fourth Wednesday of each month.
              Note that some months have (5) Wednesdays.
            </Typography>
          </ContentSection>
          <ContentSection>
            <Typography sx={{ fontWeight: 600 }}>
              Monthly meetings take place in person and via Zoom.
            </Typography>
            <Typography>In person meetings are held at the</Typography>
            <Typography sx={{ fontWeight: 600 }}>
              Oak Lodge Water Services Building
            </Typography>
            <Typography>14611 SE River Road</Typography>
            <Typography>
              Corner of SE River Road and SE Oak Grove Blvd.
            </Typography>
            <Typography>
              We encourage members to join us by Zoom if they are feeling
              unwell.
            </Typography>
          </ContentSection>
          <ContentSection>
            <Typography>Everyone is welcome to attend.</Typography>
            <Typography>
              Additional meetings are also scheduled as needed.
            </Typography>
            <Typography>
              We enthusiastically urge you to attend the meetings, join in the
              dialogue and meet your neighbors.
            </Typography>
          </ContentSection>
          <StyledHr />
          <ContentSection>
            <Typography sx={{ fontWeight: 600 }}>
              Upcoming OGCC Meetings for 2026:
            </Typography>
            <Typography>September 23, October 28, December 2</Typography>
          </ContentSection>
          <ContentSection>
            <Link
              href="https://us06web.zoom.us/j/83585393446?pwd=RFLO1BArRalbJVMoaIl4nRuY6LAz4R.1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recurring Zoom link / call-in number for OGCC Meetings
            </Link>
            <Typography>Meeting ID: 835 8539 3446 Passcode: OGCC</Typography>
          </ContentSection>
          <StyledHr />
          <ContentSection>
            <Typography sx={{ fontWeight: 600 }}>
              OGCC Board Meetings
            </Typography>
            <Typography>
              The Executive Board of the OGCC meets every other month on the
              first Monday of the month, to review the previous months'
              meetings, set agendas for our next meeting and to discuss
              community events, land-use decisions and relevant issues affecting
              the Oak Grove community.
            </Typography>
          </ContentSection>
          <ContentSection>
            <Typography>Board meetings are open to the public</Typography>
          </ContentSection>
          <ContentSection>
            <Typography sx={{ fontWeight: 600 }}>
              Upcoming OGCC Board Meetings for 2026:
            </Typography>
            <Typography>September 14, November 2 6:45 pm via Zoom</Typography>
            <Link
              href="https://us02web.zoom.us/j/89874153791?pwd=R3h6NTg4RkpQKy9UNXpuNEpOWDZLdz09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recurring Zoom link for OGCC Board Meetings
            </Link>
            <Typography>
              Meeting ID: 898 7415 3791 Passcode: 1stMonday
            </Typography>
          </ContentSection>
        </Box>
      </HomeContainer>
    </Box>
  )
}

const HomeContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '16px',
  width: '80%',
  margin: '24px',
})

const ContentSection = styled(Box)({
  marginBottom: '8px',
})

const StyledHr = styled('hr')({
  marginBottom: '16px',
})
