import "../../index.css";

export default function Footer() {
    return (
        <footer>
            <section className="anotherContact d-flex align-items-center justify-content-center"
                style={{height: "300px", background: "var(--gray-gray-900, #0F0F0F)"}}>
                <div className="anotherContact-link h-50 ">
                    <span className="d-block fw-bold text-white text-center">¿Podemos ayudarte</span>
                    <div className="anotherContact-icons d-flex mt-3 gap-5">
                        <a className="d-flex flex-column align-items-center text-decoration-none cursor-pointer">
                            <div className="d-flex bg-white rounded-circle justify-content-center" style={{width: "65px", height: "65px"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="65" viewBox="0 0 33 32" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M23.1687 5.33331C24.6403 5.33331 25.8333 6.52185 25.8333 7.99519V21.6714C25.8333 21.733 25.8312 21.794 25.8271 21.8544L25.8211 26.765L20.1946 24.3333H9.83119C8.35959 24.3333 7.16663 23.1448 7.16663 21.6714V7.99519C7.16663 6.52507 8.36271 5.33331 9.83119 5.33331H23.1687ZM10.8172 18.7234C10.3293 18.275 10.0244 18.584 9.86313 18.7894C9.70188 18.9947 9.70786 19.3603 9.8531 19.6334C9.99834 19.9066 12.9392 21.6559 16.5984 21.6559C20.2575 21.6559 22.9747 19.9429 23.2031 19.6334C23.4316 19.324 23.5087 19.101 23.2031 18.8182C22.8976 18.5353 22.7779 18.6512 22.3817 18.83C21.9856 19.0089 19.3886 20.5539 16.5419 20.5277C13.6953 20.5014 11.3052 19.1719 10.8172 18.7234Z"
                                        fill="#0F0F0F" />
                                </svg>
                            </div>
                            <span className="fw-bold text-white mt-3">CHAT</span>
                        </a>
                        <a className="d-flex flex-column align-items-center text-decoration-none  cursor-pointer">
                            <div className="d-flex bg-white rounded-circle justify-content-center" style={{width: "65px", height: "65px"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="65" viewBox="0 0 33 32" fill="none">
                                    <path
                                        d="M24.6596 19.9999C28.8094 21.4391 28.9241 19.3853 28.0562 15.875C26.189 9.09205 7.4615 9.09334 5.60311 15.9132C4.79267 19.3888 4.77105 21.4393 9.00629 19.9871C11.9068 19.0008 11.7623 18.8661 11.7645 16.2572C11.7926 14.3928 14.5427 14.4366 16.8242 14.4035L16.8806 14.4038C19.1973 14.4155 21.856 14.4289 21.8727 16.2306C21.8705 18.8394 21.7358 18.9839 24.6596 19.9999Z"
                                        fill="#0F0F0F" />
                                </svg>
                            </div>
                            <span className="fw-bold text-white mt-3">LLAMAR</span>
                        </a>
                    </div>
                </div>
            </section>
            <div className="w-100 py-5">
                <ul className="d-flex flex-column align-items-center justify-content-center m-auto">
                    <li className="list-unstyled fw-bold py-2">
                        SOBRE NOSOTROS
                    </li>
                    <li className="list-unstyled fw-bold py-2 bg-dark-hover icon-link-hover">
                        MEDIDAS DE SEGURIDAD (COVID 19)
                    </li>
                    <li className="list-unstyled fw-bold py-2">
                        CÓMO MERCAR
                    </li>
                    <li className="list-unstyled fw-bold py-2">
                        PROVEEDORES
                    </li>
                    <li className="list-unstyled fw-bold py-2">
                        CONTÁCTENOS
                    </li>
                    <li className="list-unstyled fw-bold py-2">
                        ZONA DE COBERTURA
                    </li>

                </ul>
                <hr className="m-auto my-4" style={{width: "50px"}}/>
                <div className="d-flex flex-column align-items-center">
                    <div className="rounded-circle d-flex p-2" style={{backgroundColor: "#0000A3", width: "fit-content"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M11.4999 5.02412C13.4512 5.02412 13.6823 5.03153 14.4529 5.0666C15.1654 5.09903 15.5524 5.21778 15.8099 5.31758C16.151 5.44981 16.3945 5.6078 16.6502 5.86286C16.9059 6.11793 17.0643 6.36078 17.1968 6.701C17.2969 6.95789 17.4159 7.34385 17.4484 8.05453C17.4836 8.82319 17.491 9.05372 17.491 11.0001C17.491 12.9464 17.4836 13.177 17.4484 13.9456C17.4159 14.6563 17.2969 15.0423 17.1968 15.2991C17.0643 15.6394 16.9059 15.8822 16.6502 16.1373C16.3945 16.3923 16.151 16.5503 15.8099 16.6825C15.5524 16.7824 15.1654 16.9011 14.4529 16.9336C13.6825 16.9686 13.4513 16.976 11.4999 16.976C9.54855 16.976 9.31744 16.9686 8.54697 16.9336C7.83447 16.9011 7.44752 16.7824 7.19002 16.6825C6.84891 16.5503 6.60544 16.3923 6.34973 16.1373C6.09402 15.8822 5.93563 15.6394 5.80309 15.2991C5.70301 15.0423 5.58396 14.6563 5.55145 13.9456C5.51629 13.177 5.50886 12.9464 5.50886 11.0001C5.50886 9.05372 5.51629 8.82319 5.55145 8.05456C5.58396 7.34385 5.70301 6.95789 5.80309 6.701C5.93563 6.36078 6.09402 6.11793 6.34973 5.86286C6.60544 5.6078 6.84891 5.44981 7.19002 5.31758C7.44752 5.21778 7.83447 5.09903 8.54694 5.0666C9.31755 5.03153 9.54866 5.02412 11.4999 5.02412ZM11.4999 3.71069C9.51524 3.71069 9.26641 3.71908 8.48695 3.75456C7.70909 3.78998 7.17789 3.91318 6.71303 4.09339C6.23248 4.27967 5.82494 4.52892 5.41867 4.93416C5.01241 5.3394 4.76253 5.74591 4.57578 6.22525C4.39511 6.68893 4.27159 7.2188 4.23609 7.99469C4.20052 8.77215 4.19214 9.02039 4.19214 11.0001C4.19214 12.9798 4.20052 13.228 4.23609 14.0055C4.27159 14.7814 4.39511 15.3112 4.57578 15.7749C4.76253 16.2542 5.01241 16.6608 5.41867 17.066C5.82494 17.4712 6.23248 17.7205 6.71303 17.9068C7.17789 18.087 7.70909 18.2102 8.48695 18.2456C9.26641 18.2811 9.51524 18.2894 11.4999 18.2894C13.4846 18.2894 13.7335 18.2811 14.5129 18.2456C15.2908 18.2102 15.822 18.087 16.2869 17.9068C16.7674 17.7205 17.175 17.4712 17.5812 17.066C17.9875 16.6608 18.2374 16.2542 18.4241 15.7749C18.6048 15.3112 18.7283 14.7814 18.7638 14.0055C18.7994 13.228 18.8078 12.9798 18.8078 11.0001C18.8078 9.02039 18.7994 8.77215 18.7638 7.99469C18.7283 7.2188 18.6048 6.68893 18.4241 6.22525C18.2374 5.74591 17.9875 5.3394 17.5812 4.93416C17.175 4.52892 16.7674 4.27967 16.2869 4.09339C15.822 3.91318 15.2908 3.78998 14.5129 3.75456C13.7335 3.71908 13.4846 3.71069 11.4999 3.71069ZM11.4999 13.4299C10.1546 13.4299 9.06399 12.342 9.06399 11.0001C9.06399 9.65815 10.1546 8.57027 11.4999 8.57027C12.8453 8.57027 13.9359 9.65815 13.9359 11.0001C13.9359 12.342 12.8453 13.4299 11.4999 13.4299ZM11.5 7.25687C9.4275 7.25687 7.74736 8.93277 7.74736 11.0001C7.74736 13.0674 9.4275 14.7433 11.5 14.7433C13.5726 14.7433 15.2527 13.0674 15.2527 11.0001C15.2527 8.93277 13.5726 7.25687 11.5 7.25687ZM16.2778 7.10899C16.2778 7.59209 15.8852 7.98373 15.4009 7.98373C14.9166 7.98373 14.5239 7.59209 14.5239 7.10899C14.5239 6.62588 14.9166 6.23428 15.4009 6.23428C15.8852 6.23428 16.2778 6.62588 16.2778 7.10899Z"
                                fill="white" />
                        </svg>
                    </div>

                    <span className="d-block mt-4 fw-bold">POLITCA DE TRATAMIENTO DE DATOS PERSONALES</span>
                </div>
            </div>
            <div className="d-flex justify-content-center pb-4 align-items-start"
                style={{background: "var(--gray-gray-900, #0F0F0F)"}}>
                <button className="btn text-white px-4" id="footer-btn-filter" style={{backgroundColor: "#0000A3"}}>
                    <span className="fw-medium">FILTRAR</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M3.83162 3.62294C3.69751 3.45196 3.7323 3.20834 3.90932 3.07881C3.97921 3.02767 4.06448 3 4.15216 3H14.5979C14.82 3 15 3.17389 15 3.3884C15 3.47308 14.9713 3.55544 14.9184 3.62294L10.3803 9.40861V13.8616C10.3803 13.9382 10.3568 14.0132 10.3128 14.077C10.1896 14.2555 9.93994 14.3037 9.75515 14.1847L8.54875 13.4079C8.43687 13.3359 8.36968 13.2146 8.36968 13.0848V9.40861L3.83162 3.62294Z"
                            fill="white" />
                    </svg>
                </button>

            </div>
        </footer>
    )
}
