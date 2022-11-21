import './App.css';
import { Calculate } from './components/calculate/Calculate';
import { Header } from './components/header/Header';

export const App = () => {
  return(
    <div className='App'>
      <Header/>
      <Calculate/>
    </div>
  )
}
