import 'bootswatch/dist/cerulean/bootstrap.min.css';

import Home from './containers/Home'

import Navbar from './components/Navbar'


function App() {
  return (
    <div className='container' >
      <Navbar />
      <Home />
    </div>
  )
}

export default App;
