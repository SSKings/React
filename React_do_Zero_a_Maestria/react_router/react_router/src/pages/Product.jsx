import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // 4 -rotas dinâmicas
  const { id } = useParams();

  // 5 - carregando dado individual
  const url = `http://localhost:3000/products/${id}`;

  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>ID do Produto: {id}</p>
      {error && <p>Ocorreu um erro.</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          {/* 6 - nested routes */}
          <Link to={`/products/${product.id}/info`}>Mais Informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
