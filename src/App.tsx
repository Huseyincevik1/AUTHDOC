import './App.css';
import Navbar from '../src/components/layout/Navbar/Navbar.jsx';
import Header from '../src/components/layout/Header/Header.jsx';

function App() {
  return (
    <>
      <div className='App sm:overflow-x-hidden'>
        <Navbar />
        <Header />
      </div>
    </>
  );
}

export default App;
