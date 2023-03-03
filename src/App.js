import './App.css';
import Header from './components/header'
import Main from './components/main';
import Footer from './components/footer';

function App() {
  const portfolioOwner = 'Aidana Serik';
  return (
    <div className="App">
      <Header portfolioOwner = {portfolioOwner}/>
      <Main portfolioOwner = {portfolioOwner}/>
      <Footer />
    </div>
  );
}

export default App;