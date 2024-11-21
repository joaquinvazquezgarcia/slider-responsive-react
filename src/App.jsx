import { Slider } from "./component/Slider"
import { Slide } from "./component/Slide"

/*  */
import compras from "./assets/compras.jpg";
/*  */

function App() {
  return (
    <Slider>
      <Slide imgSrc={compras} slideTitle={"Compras"} slideDescription={"Registra todas tus compras a proveedores. además puedes verificar cuales están pagadas."}></Slide>
      <Slide imgSrc={compras} slideTitle={"ventas"} slideDescription={"Registra todas tus compras a proveedores. además puedes verificar cuales están pagadas."}></Slide>
      <Slide imgSrc={compras} slideTitle={"Compras"} slideDescription={"Registra todas tus compras a proveedores. además puedes verificar cuales están pagadas."}></Slide>
      <Slide imgSrc={compras} slideTitle={"Compras"} slideDescription={"Registra todas tus compras a proveedores. además puedes verificar cuales están pagadas."}></Slide>
      <Slide imgSrc={compras} slideTitle={"Compras"} slideDescription={"Registra todas tus compras a proveedores. además puedes verificar cuales están pagadas."}></Slide>
      <Slide imgSrc={compras} slideTitle={"Compras"} slideDescription={"Registra todas tus compras a proveedores. además puedes verificar cuales están pagadas."}></Slide>
      <Slide imgSrc={compras} slideTitle={"Compras"} slideDescription={"Registra todas tus compras a proveedores. además puedes verificar cuales están pagadas."}></Slide>
      <Slide imgSrc={compras} slideTitle={"Compras"} slideDescription={"Registra todas tus compras a proveedores. además puedes verificar cuales están pagadas."}></Slide>
    </Slider>
  )
}

export default App
