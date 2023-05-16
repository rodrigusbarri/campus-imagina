import { BrowserRouter } from 'react-router-dom';
import './App.css'
// import Header from './components/Header';
// import { Home } from './pages/home/Home';
import { MyRoutes } from './routers/routes';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <div>
          <Header />
          </div>
          <MyRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
