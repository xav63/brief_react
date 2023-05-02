import Footer from './components/footer';
//import Form from './components/form';
import Titre from './components/titre';
import Header from './components/Header';
//import Content from './components/content';
//import Card from './components/card';
import Recipe from './components/recipe';
import './App.css';
import Barre from './components/search';


function App() {
  return (
    <div>
      <Header/>
      <Titre/>
      <Barre/>
      <Recipe/>
      <Footer/>
    </div>
  );
}

export default App;
