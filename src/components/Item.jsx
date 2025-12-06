import termica25a from '../assets/images/D_NQ_NP_8942001-MLA52282166555_112022-O.webp'

export default function Item(props){
  console.log("Props:", props);
  return (
    <div>
      <h3>Termica Bipolar 25A</h3>
      <img width="220" src={termica25a}></img>
      <p>$2500</p>
      <p>Descripcion del producto</p>
      <button>Ver producto</button>
    </div>
  )
}

export function ItemButtom(){
  return(
    <>
      <h2>Hola ItemButtom</h2>
      <p>Click aqui</p>
    </>
  )
}

export function ItemImage(){}