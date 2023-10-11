import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tarjeta from './components/Tarjeta'
import Redes from './components/redes'
import Layout from './components/Layout'
import Layoutb from './components/Layoutb'

function App() {
  return (
    <div>
    <body class="bg-gradient-to-t from-rose-50">
    <Navbar/>
    <Hero/>

    <Layout titulo="Checa mis proyectos 👁." espacioy="space-y-2" paddingt="pt-3">
      <Tarjeta imagen="/img/pubs.png" titulo="Las desigualdades educativas que ocultan los medalleros de las Olimpiadas científicas"url="https://labtecnosocial.org/articulo-olimpiadas-cientificas/"/>
      <Tarjeta imagen="/img/museos.png" titulo="Mapa de museos en Bolivia" url="https://labtecnosocial.org/mapa-de-museos-en-bolivia/"/>
      <Tarjeta imagen="/img/ilust.png" titulo="Diseño UI de la app Mi Huella" texto="App desarrollada en el Lab TecnoSocial" url="https://play.google.com/store/apps/details?id=org.labtecnosocial.mihuella"/>
    </Layout>

    <Layout>
      <Tarjeta imagen="/img/mapas.png" titulo="Mapa de oferta y demanda de cuidados en el municipio de Cochabamba" texto="Desarrollado con Abi Roque" url="https://labtecnosocial.shinyapps.io/mapa-cuidados-cochabamba/"/>
      <Tarjeta imagen="/img/urbanos.png" titulo="Una exploración bibliométrica y digital a los estudios urbanos en Bolivia" url="https://www.academia.edu/81465997/Una_exploraci%C3%B3n_bibliom%C3%A9trica_y_digital_de_los_estudios_urbanos_en_Bolivia"/>
      <Tarjeta imagen="/img/incendios.png" titulo="Dashboard: 20 años de incendios en la amazonía boliviana" url="https://labtecnosocial.shinyapps.io/incendios-bol/"/>
    </Layout>

    <Layout>
      <Tarjeta imagen="/img/arbu.png" titulo="Diseño UI de la App Arbu" texto="App desarrollada por en el Lab TecnoSocial" url="https://play.google.com/store/apps/details?id=org.labtecnosocial.arbu.android"/>
      <Tarjeta imagen="/img/llamkana.png" titulo="Llamk'ana: un lenguaje de programación en quechua" texto="Co-escrito con Alex Ojeda y Nicaela León" url="https://labtecnosocial.org/llamkana-un-lenguaje-de-programacion-en-quechua/"/>
    </Layout>

    <Layoutb>
      <Redes imagen="/github.png" url="https://github.com/valeipr"/>
      <Redes imagen="/correo-electronico.png" url="mailto:valeria@labtecnosocial.org?"/>
      <Redes imagen="/gorjeo.png" url="https://twitter.com/ValeriaPeredo6"/>
    </Layoutb>

    </body>
    </div>
  )
}

export default App
