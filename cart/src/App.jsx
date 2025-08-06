
import { RecoilRoot, useRecoilState } from 'recoil';

import { ProductAtomFamily } from './atoms';


function App() {
  return <RecoilRoot>
    <Product id={1}/>
     <Product id={1}/>
    

  </RecoilRoot>
}

function Product({id}) {
   const [product, setproduct] = useRecoilState(ProductAtomFamily(id));
   

  return (
    <>
      Product Name:{product.title} <br />

      Quantity{product.quantity} <br /> <br />

      <button onClick={() => {
setproduct({
  ...product,
  quantity: product.quantity + 1
});

     }}>Increase</button>
    COST {product.price * product.quantity}
   
      <br />
    </>
  )
}


export default App