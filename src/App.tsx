import { ThemeProvider } from './components/ThemeProvider/ThemeProvider'
import { RoutesComponent } from './Router/RoutesComponent/RoutesComponent'
import { useImages } from './features/images/useImages'
import { useEffect } from 'react'

export const App = () => {
  const { images, getImages } = useImages()

  useEffect(() => {
    if (!images) getImages()
  }, [images])
  
  return (
    <ThemeProvider>
      <RoutesComponent />
    </ThemeProvider>
  )
}
