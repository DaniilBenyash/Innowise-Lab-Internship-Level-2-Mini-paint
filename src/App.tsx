import { ThemeProvider } from './components/ThemeProvider/ThemeProvider'
import { RoutesComponent } from './Router/RoutesComponent/RoutesComponent'
import { usePaintsData } from './features/paintsData/usePaintsData'

export const App = () => {
  const { pictures, getPictures } = usePaintsData()
  if (!pictures) getPictures()

  return (
    <ThemeProvider>
      <RoutesComponent />
    </ThemeProvider>
  )
}

export default App
