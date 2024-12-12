import { Outlet } from "react-router-dom";
import Carroussel from "./components/CarrousselProduto";
// // import FormProdutos from "./components/FormProdutos";
// import Home from "./components/Home";
// import ListCardProdutos from "./components/ListCardProdutos";
import Menu from "./components/Menu";



function App() {
  return (
    <>
      <Menu />
      <main>
        <div className="w3-container w3-padding-16 w3-margin-top">
          <h1>Minha Loja de Produtos</h1>
        </div>
        <Carroussel />
        <div className="w3-row w3-container w3-margin-top">
          {/* <ListCardProdutos></ListCardProdutos> */}
          {/* <FormProdutos></FormProdutos> */}
          {/* <Home></Home> */}
          <Outlet />
        </div>
      </main>

      <footer className="w3-container w3-margin-top w3-black">
        <p className="w3-center">
          Realizado por Gerson Ramos 
                  </p>
      </footer>
    </>
  );
}

export default App;
