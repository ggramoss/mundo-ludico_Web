import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import ListCardProdutos from './components/ListCardProdutos';
import FormProdutos from './components/FormProdutos';
import FormEditProdutos from './components/FormEditProdutos';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="produtos" element={<ListCardProdutos />} />
        <Route path="cadastro" element={<FormProdutos />} />
        <Route path="/edit/:documentId" element={<FormEditProdutos />} />
      </Route>
    </Routes>
  );
}
