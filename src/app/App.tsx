import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { useAppSelector } from './store.ts'
import { selectAppStatus } from './app-selectors.ts'

export const App = () => {
  const appStatus = useAppSelector(selectAppStatus)

  return (
    <div>
      {appStatus === 'loading' && <LinearLoader/>}
      <Decks />
      <GlobalError />
      <footer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid architecto at commodi dignissimos eligendi est illo ipsam magni maxime molestias nam nihil nisi nostrum, nulla officia praesentium sequi unde.</footer>
    </div>
  )
}
