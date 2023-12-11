import  MyCard  from './componentes/cards/card'
import './App.css'

function App() {
 

  return (
    <main className="container bg-light pt-3" style={{paddingBottom: "4rem"}}>
    <section>
      <div className="d-flex w-75 align-items-center justify-content-center justify-content-lg-between m-auto">
        <h1 className="d-flex fw-bold justify-content-center justify-content-sm-center py-4" style="font-size: 2.3rem">
          Cervezas
        </h1>
      </div>
      <div className="card-wrapper row justify-content-center gap-3 justify-content-lg-center w-75 m-auto">       
        <div className="card" style={{width: "18rem"}}>
          <img src="./assets/images/Image-1.png" className="card-img-top img-fluid" alt="..."/>
          <div className="card-body">
            <p className="card-title fw-semibold fs-5"><strong>Votus Nº 001</strong></p>
            <p className="card-text fw-light">India Pale Ale del año 2019. N1 001 red IPA.</p>
            <span className="fs-2 fw-medium"><b>$75.000</b></span>
            <form action="">
              <input type="hidden" name="item-1" value="1"/>
              <button href="#" className="d-block w-100 btn mt-4 bg-secondary text-light">AGREGAR</button>
            </form>
          </div>
        </div>       
        <div className="card" style={{width: "18rem"}}>
          <img src="./assets/images/Image-1.png" className="card-img-top img-fluid" alt="..."/>
          <div className="card-body">
            <p className="card-title fw-semibold fs-5"><strong>Votus Nº 001</strong></p>
            <p className="card-text fw-light">India Pale Ale del año 2019. N1 001 red IPA.</p>
            <span className="fs-2 fw-medium"><b>$75.000</b></span>
            <form action="">
              <input type="hidden" name="item-2" value="2"/>
              <button href="#" className="d-block w-100 btn mt-4 bg-secondary text-light">AGREGAR</button>
            </form>
          </div>
        </div>       
        <div className="card" style="width: 18rem;">
          <img src="./assets/images/Image-1.png" className="card-img-top img-fluid" alt="..."/>
          <div className="card-body">
            <p className="card-title fw-semibold fs-5"><strong>Votus Nº 001</strong></p>
            <p className="card-text fw-light">India Pale Ale del año 2019. N1 001 red IPA.</p>
            <span className="fs-2 fw-medium"><b>$75.000</b></span>
            <form action="">
              <input type="hidden" name="item-3" value="3"/>
              <button href="#" className="d-block w-100 btn mt-4 bg-secondary text-light">AGREGAR</button>
            </form>
          </div>
        </div>       
        <div className="card" style={{width: "18rem"}}>
          <img src="./assets/images/Image-1.png" className="card-img-top img-fluid" alt="..."/>
          <div className="card-body">
            <p className="card-title fw-semibold fs-5"><strong>Votus Nº 001</strong></p>
            <p className="card-text fw-light">India Pale Ale del año 2019. N1 001 red IPA.</p>
            <span className="fs-2 fw-medium"><b>$75.000</b></span>
            <form action="">
              <input type="hidden" name="item-4" value="4"/>
              <button href="#" className="d-block w-100 btn mt-4 bg-secondary text-light">AGREGAR</button>
            </form>
          </div>
        </div>   
        <MyCard title={"tal tal"} description={'Yb desd'} price={1234}></MyCard>      
        <div className="card" style={{width: "18rem"}}>
          <img src="./assets/images/Image-1.png" className="card-img-top img-fluid" alt="..."/>
          <div className="card-body">
            <p className="card-title fw-semibold fs-5"><strong>Votus Nº 001</strong></p>
            <p className="card-text fw-light">India Pale Ale del año 2019. N1 001 red IPA.</p>
            <span className="fs-2 fw-medium"><b>$75.000</b></span>
            <form action="">
              <input type="hidden" name="item-5" value="5"/>
              <button href="#" className="d-block w-100 btn mt-4 bg-secondary text-light">AGREGAR</button>
            </form>
          </div>
        </div>       
        <div className="card" style={{width: "18rem"}}>
          <img src="./assets/images/Image-1.png" className="card-img-top img-fluid" alt="..."/>
          <div className="card-body">
            <p className="card-title fw-semibold fs-5"><strong>Votus Nº 001</strong></p>
            <p className="card-text fw-light">India Pale Ale del año 2019. N1 001 red IPA.</p>
            <span className="fs-2 fw-medium"><b>$75.000</b></span>
            <form action="">
              <input type="hidden" name="item-6" value="6"/>
              <button href="#" className="d-block w-100 btn mt-4 bg-secondary text-light">AGREGAR</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section className="goto-vinos d-flex justify-content-between bg-white border rounded rounded-1 py-3 px-3 mt-5"
      style={{margin: "0 20px"}}>
      <a href="" className="d-flex justify-content-between align-items-center text-decoration-none w-100">
        <div>
          <span className="d-block text-dark fs-6">Sigue mercando</span>
          <span className="d-block text-dark fs-2 fw-bold">Vinos</span>
        </div>
        <img src="./assets/icons/arrow-right.svg" className="img-fluid" alt="arrow"/>
      </a>
    </section>
  </main>
  )
}

export default App
