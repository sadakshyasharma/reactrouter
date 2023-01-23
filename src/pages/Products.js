import {Link} from 'react-router-dom'
import  products  from '../data'
const Products = () => {
  return (
    <section className="section">
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`} style={{ margin: "2rem" }}>
                more info
              </Link>
            </article>
          );
        })}
      </div>
      <hr />
    </section>
  );
};

export default Products;
