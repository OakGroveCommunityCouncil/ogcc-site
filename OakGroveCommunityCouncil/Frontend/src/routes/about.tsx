import { Box, Link, List, ListItem, styled, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <AboutContainer>
        <Box sx={{ gridColumn: 1 }}>
          <ContentContainer>
            <Typography variant="h5" color="primary">
              About Oak Grove
            </Typography>
            <Typography>
              Oak Grove is an historic unincorporated community in Clackamas
              County and part of the greater Portland metropolitan area. For
              statistical purposes, the United States Census Bureau has defined
              Oak Grove as a census-designated place (CDP). The population was
              16,629 at{' '}
              <Link
                href="https://en.wikipedia.org/wiki/Oak_Grove,_Oregon"
                target="_blank"
                rel="noopener noreferrer"
              >
                the 2010 census
              </Link>
              .
            </Typography>
            <Box
              component="img"
              // TODO: alt
              // TODO: src
              sx={{
                float: 'right',
                width: 150,
                height: 150,
              }}
            ></Box>
            <Typography sx={{ marginTop: '8px' }}>
              Oak Grove is bordered to the north by the city of Milwaukie, to
              the east by unincorporated Oatfield Ridge, to the south by
              unincorporated Jennings Lodge, and to the west by the Willamette
              River. Oregon Route 99E runs through Oak Grove as McLoughlin
              Boulevard; it leads north eight miles to downtown Portland and
              south four miles through Jennings Lodge and Gladstone to Oregon
              City.{' '}
              <Link
                href="https://en.wikipedia.org/wiki/Oak_Grove,_Oregon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more on Wikipedia
              </Link>
              .
            </Typography>
          </ContentContainer>
          <ContentContainer>
            <Typography variant="h5" color="primary">
              "I thought I lived in Milwaukie..."
            </Typography>
            <Typography>
              Since Oak Grove is not a city, the U.S. Postal Service allows
              residents to list their addresses as Oak Grove, Milwaukie or
              Portland, OR. If you are new to the area, you may have been told
              you moved into or purchased a property in Milwaukie or Portland,
              when in fact it is in unincorporated Oak Grove. Oak Grove zip
              codes include 97222, 97267 and 97268 (P.O. boxes). Check CMap to
              find out in which CPO you reside.
            </Typography>
          </ContentContainer>
          <ContentContainer>
            <Typography variant="h5" color="primary">
              Government, Services and Taxes
            </Typography>
            <Box
              component="img"
              // TODO: alt
              // TODO: src
              sx={{
                float: 'right',
                width: 150,
                height: 150,
              }}
            ></Box>
            <Typography>
              Living in an unincorporated area means Oak Grove residents receive
              their services and government oversight from{' '}
              <Link
                href="https://www.clackamas.us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clackamas County
              </Link>
              , its agencies and departments. Oak Grove property owners pay
              taxes just like neighboring city residents, with rates based on
              their taxing district.
            </Typography>
            <List>
              Those services currently include:
              <ListItem>Public safety (Sheriff, Fire)</ListItem>
              <ListItem>
                Library (Clackamas County - Oak Lodge Library)
              </ListItem>
              <ListItem>
                Schools (North Clackamas Schools and Clackamas Community
                College)
              </ListItem>
              <ListItem>Clackamas County Extension and 4H</ListItem>
              <ListItem>Soil and Conservation Services</ListItem>
              <ListItem>Water Environmental Services</ListItem>
              <ListItem>
                Metro (urban growth boundary, region-wide planning and
                coordination)
              </ListItem>
            </List>
            <Typography>
              See here for more information on{' '}
              <Link
                href="https://www.clackamas.us/at/taxingdistrictexplanation.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tax Districts and Property Tax Breakdowns
              </Link>
            </Typography>
          </ContentContainer>
        </Box>
        <Box sx={{ gridColumn: 2 }}>
          <ContentContainer>
            <Typography variant="h5" color="primary">
              The Oak Grove Community Council
            </Typography>
            <Typography>
              The Oak Grove Community Council (OGCC), like other community
              planning organizations (CPOs) in Clackamas County, advises the
              Planning Division, Planning Commission and BCC on local land-use
              issues.
            </Typography>
            <Typography sx={{ marginTop: '8px' }}>
              The county notifies CPOs of proposed land use actions and
              legislative changes within or near their boundaries. CPOs may
              review these applications and recommend approval or denial or
              provide input and ask questions.
            </Typography>
          </ContentContainer>
          <ContentContainer>
            <Typography variant="h5" color="primary">
              Oak Grove History
            </Typography>
            <Box
              component="img"
              // TODO: alt
              // TODO: src
              sx={{
                float: 'right',
                width: 150,
                height: 150,
              }}
            ></Box>
            <Typography>
              The Oak Grove town site was first platted in 1890 from the
              original Creighton and Crow donation land claims (DLCs) of the
              1830s and 1840s. Subsequent additions and subdivisions of the Oak
              Grove plat show clear evidence that the area was marked for
              investment and growth as a result of the introduction of the
              Portland Traction Co. trolley line from Portland to Oregon City
              through Oak Grove and Jennings Lodge that began service in early
              1893. After years of citizen lobbying, the trolley line was
              re-imagined as today's{' '}
              <Link
                href="https://ncprd.com/parks/trolley-trail"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trolley Park
              </Link>
              , a six-mile linear park and safe spine through the community. To
              learn more about local history, visit the{' '}
              <Link
                href="https://www.oaklodgehistory.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oak Lodge History Detectives website
              </Link>
            </Typography>
          </ContentContainer>
          <ContentContainer>
            <Typography variant="h5" color="primary">
              Place Name
            </Typography>
            <Typography>
              The author of Oregon Geographic Names credits a member of the
              survey team for suggesting the name Oak Grove, based on an area
              they came upon for lunch -- "a fine grove of oak trees in the
              northwest part of the tract." The name "Oak Lodge" is frequently
              used for businesses, organizations or entities that serve both the
              communities of Oak Grove and Jennings Lodge (such as the Oak Lodge
              Library). For details, read more here.
            </Typography>
          </ContentContainer>
          <ContentContainer>
            <Typography variant="h5" color="primary">
              Post Office
            </Typography>
            <Typography>
              The Oak Grove Post Office, currently located at 3860 SE Naef Road,
              first opened in 1904 as "Creighton Station" due to the duplicate
              use of the name "Oak Grove" as a stop on the old trolley line. The
              name was changed permanently to "Oak Grove" in 1907 when the
              confusion was sorted out and corrected.
            </Typography>
          </ContentContainer>
        </Box>
      </AboutContainer>
    </Box>
  )
}

const AboutContainer = styled(Box)({
  backgroundColor: 'white',
  border: '1px solid #157cd1',
  borderRadius: '8px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '16px',
  width: '80%',
  margin: '24px',
  padding: '16px',
})

const ContentContainer = styled(Box)({
  padding: '8px',
})
