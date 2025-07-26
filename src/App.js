// import logo from './logo.svg';
// import './App.css';

// import './component/Button/Button';
// import './component/HeroSection/HeroSection';
// import Navbar from './component/NavBar/Navbar';
// import  './component/SearchBar/SearchBar';
// import './component/Logo/Logo';
// import './component/Section/Section';
// import './component/Card/Card';
import Navbar from './component/NavBar/Navbar';
import HeroSection from './component/HeroSection/HeroSection';
import Section from './component/Section/Section';
import SongsSection from './component/SongsSection/SongsSection';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="/asset/qtify_logo.png" className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section
        title="Top Albums"
        fetchUrl="https://qtify-backend-labs.crio.do/albums/top"
      />
      <Section
        title="New Albums"
        fetchUrl="https://qtify-backend-labs.crio.do/albums/new"
      />
      <SongsSection />
    </>
  );
}
export default App;
