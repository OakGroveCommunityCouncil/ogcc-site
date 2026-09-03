import { Outlet, createRootRoute } from '@tanstack/react-router'

import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import '../styles.css'
import { AppHeader } from '#/components/AppHeader'
import { AppFooter } from '#/components/AppFooter'
import { ThemeProvider, useTheme } from '@mui/material'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const theme = useTheme()

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppHeader />
        <Outlet />
        <AppFooter />
      </ThemeProvider>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  )
}
