import './App.css'
import Header from "./components/Header"
import Main from "./components/Main";
import Footer from "./components/Footer";

// 자식
// const Header = () => {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

// 부모
function App() {
  return (
    <>
      <Header /> 
      <Main />
      <Footer />
    </>
  );
}

export default App
