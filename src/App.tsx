import { ThemeProvider } from './components/ThemeProvider/ThemeProvider'
import { RoutesComponent } from './Router/RoutesComponent/RoutesComponent'
import { useImages } from './features/images/useImages'

export const App = () => {
  const { images, getImages } = useImages()
  if (!images) getImages()

  return (
    <ThemeProvider>
      <RoutesComponent />
    </ThemeProvider>
  )
}

export default App
