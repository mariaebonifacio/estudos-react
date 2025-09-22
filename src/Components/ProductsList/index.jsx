export default function ProductsList(){
    const products = [
        { title: 'Repolho', id: 1 },
        { title: 'Alho', id: 2 },
        { title: 'Maçã', id: 3 },
      ];


      return (
        <>
        <ul>
            {
             products.map(product =>
                <li key={product.id}>
                    {product.title}
                </li>
             )
            }
        </ul>
        </>
      )
}