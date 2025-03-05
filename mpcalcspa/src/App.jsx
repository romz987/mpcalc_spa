import './assets/styles/reset.css'
import './assets/styles/global.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MainContent from './components/layout/MainContent'


function App() {
  return <div className="container">
          <Header />
          <MainContent />
          <Footer />
         </div>
}

export default App;
