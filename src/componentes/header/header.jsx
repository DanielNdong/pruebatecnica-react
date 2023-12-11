import "../../index.css";

export default function Header() {
  return (
    <header className="position-relative">
      <nav className="navbar navbar-expand-lg position-relative py-3" style={{ background: "var(--gray-gray-900, #0F0F0F)"}}>
        <div className="container-fluid">
          <ul className="m-0 d-none d-lg-flex gap-3 align-items-center">
            <li className="list-unstyled text-white fw-bold ">Inicio</li>
            <li className="list-unstyled text-white fw-bold ">Vinos</li>
          </ul>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <img src="./../../assets/icons/menu.svg" style={{ width: "40px", height: "40px" }} alt="" />
            </span>
          </button>
          <a className="navbar-brand  position-absolute start-0 end-0 m-auto lh-1" href="#" style={{ width: "max-content" }}>
            <img src="./../../assets/logo/symbol.svg" className="display-3" alt="Cervezas Agilia" width="30" height="24" />
          </a>
          <div className="d-flex gap-3">
            <form className="d-flex gap-3 d-lg-none" action="" style={{ maxWidth: "600px" }}>
              <button className="btn btn-outline rounded-1 bg-dark" type="button">
                <span className="text-white">Filtrar</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M3.83162 3.62294C3.69751 3.45196 3.7323 3.20834 3.90932 3.07881C3.97921 3.02767 4.06448 3 4.15216 3H14.5979C14.82 3 15 3.17389 15 3.3884C15 3.47308 14.9713 3.55544 14.9184 3.62294L10.3803 9.40861V13.8616C10.3803 13.9382 10.3568 14.0132 10.3128 14.077C10.1896 14.2555 9.93994 14.3037 9.75515 14.1847L8.54875 13.4079C8.43687 13.3359 8.36968 13.2146 8.36968 13.0848V9.40861L3.83162 3.62294Z"
                    fill="white" />
                </svg>
              </button>
            </form>
            <img src="./../../assets/icons/search-2.svg" alt="search-2" />
            <img src="./../../assets/icons/filters.svg" alt="cart-2" />
          </div>
        </div>
      </nav>
      <nav className="p-4 border border-bottom d-none d-lg-block">
        <form className="d-flex gap-3 " action="" style={{ maxWidth: "600px", margin: "auto" }}>
          <div className="d-flex w-75">
            <input type="search" className="form-control form-control-md rounded-1" name="search" id="search" placeholder="Vinos, Licores, etc" />
            <button className="btn btn-primary rounded-1" type="button" id="inputGroupFileAddon03">Buscar</button>
          </div>
          <div className="btn-group">
            <button type="button" className="btn border-0" id="dropdownMenuClickable" data-bs-toggle="dropdown"
              data-bs-auto-close="false" aria-expanded="false">
              <span className="fw-medium fs-5">Filtros</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M3.83162 3.62294C3.69751 3.45196 3.7323 3.20834 3.90932 3.07881C3.97921 3.02767 4.06448 3 4.15216 3H14.5979C14.82 3 15 3.17389 15 3.3884C15 3.47308 14.9713 3.55544 14.9184 3.62294L10.3803 9.40861V13.8616C10.3803 13.9382 10.3568 14.0132 10.3128 14.077C10.1896 14.2555 9.93994 14.3037 9.75515 14.1847L8.54875 13.4079C8.43687 13.3359 8.36968 13.2146 8.36968 13.0848V9.40861L3.83162 3.62294Z"
                  fill="black" />
              </svg>
            </button>
            <div className="dropdown-menu w-100 top-50 p-4" aria-labelledby="dropdownMenuClickables">
              <div className="d-flex align-items-center justify-content-between">
                <span className="d-block fw-medium fs-3 mb-3">Filtros</span>
                <span className="d-block float-end">X</span>
              </div>
              <div className="d-grid" role="group" aria-label="Basic checkbox toggle button group">
                <label className="border-top border-bottom border-1 py-3 fs-5 fw-medium" htmlFor="btncheck1">
                  Rubia
                  <input type="checkbox" className="btn-check-1 float-end" name="filter" id="btncheck1"
                    autoComplete="off" />
                </label>
                <label className="border-bottom border-1 py-3 fs-5 fw-medium" htmlFor="btncheck2">
                  Morena
                  <input type="checkbox" className="btn-check-1 float-end" name="filter" id="btncheck2" autoComplete="off" />
                </label>
                <label className="border-bottom border-1 py-3 fs-5 fw-medium" htmlFor="btncheck3">
                  Roja
                  <input type="checkbox" className="btn-check-1 float-end" name="filter" id="btncheck3" autoComplete="off" />
                </label>
              </div>
              <div className="d-flex mt-3 gap-3">
                <button type="submit" className="limpiar btn w-75 py-2">LIMPIAR</button>
                <button type="submit" className="filtrar btn w-75 py-2" style={{ backgroundColor: " #0000A3" }}>
                  <span className="text-white">FILTRAR</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M3.83162 3.62294C3.69751 3.45196 3.7323 3.20834 3.90932 3.07881C3.97921 3.02767 4.06448 3 4.15216 3H14.5979C14.82 3 15 3.17389 15 3.3884C15 3.47308 14.9713 3.55544 14.9184 3.62294L10.3803 9.40861V13.8616C10.3803 13.9382 10.3568 14.0132 10.3128 14.077C10.1896 14.2555 9.93994 14.3037 9.75515 14.1847L8.54875 13.4079C8.43687 13.3359 8.36968 13.2146 8.36968 13.0848V9.40861L3.83162 3.62294Z"
                      fill="white" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </nav>
      <div className="collapse navbar-collapse" id="navbarSupportedContent"
        style={{ background: "var(--gray-gray-900, #0F0F0F)"}}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link  text-white" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white" href="#">Vinos</a>
          </li>
        </ul>
      </div>
      <div className="position-absolute -bottom-0 -bottom-0 bg-success" style={{ maxWidth: "800px" }}>

      </div>
    </header>
  )
}
