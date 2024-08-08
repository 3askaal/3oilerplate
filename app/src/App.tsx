import { Routes, Route } from 'react-router-dom'
import { RootStyle, theme, ThemeProvider } from '../../src'
import { NavProvider } from './context'
import { ComponentsView, DocsView, HomeView } from './views'
import { Wrapper } from './components'
import { SApp } from './App.styled'

const App = () => {
  return (
    <NavProvider>
      <ThemeProvider theme={{
        ...theme,
        breakpoints: ['480px', '768px', '1024px', '1440px'],
        rootFontSizes: ['12px', '14px', '16px'],
        fonts: {
          ...theme.fonts,
          logo: "'Kaushan Script', Helvetica, Arial, sans-serif"
        },
        components: {
          Box: {
            variants: {
              preview: {
                paddingY: 's',
                paddingX: 'xs',
                bgc: 'primary',
                borderRadius: 's',
                color: 'white',
                textAlign: 'center'
              }
            }
          }
        }
      }}>
        <SApp>
          {/* <ResetStyle /> */}
          <RootStyle />
          <Wrapper>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="docs" element={<DocsView />} />
              <Route path="components" element={<ComponentsView />} />
            </Routes>
          </Wrapper>
        </SApp>
      </ThemeProvider>
    </NavProvider>
  )
}

export default App
