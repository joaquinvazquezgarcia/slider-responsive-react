import "../css/slider.css";
import "../css/swipeModal.css";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { InView } from "react-intersection-observer";
import arrowSlider from "../assets/arrowSlider.png";
import swipe from "../assets/swipe.png";
import compras from "../assets/compras.jpg";

const SwipeModal = ({ inView }) => {
    const [modal, setModal] = useState("active");

    const handleModal = () => {
        setModal(modal == "" ? "active" : "");
    };

    if (inView) {
        handleModal;
    }
    return (
        <div className={"swipeModal " + modal} onClick={handleModal}>
            <div className="swipeModalText">
                <p className="swipeText">Desliza para ver más</p>
                <img src={swipe} alt="" className="swipeModalImg" />
                <p className="closeText">Toca para cerrar</p>
            </div>
            <div className="swipeModalOverlay"></div>
        </div>
    );
};

export const Slider = ({children}) => {

    const [childrenState, setChildrenState] = useState(children)

    const handleLeft = () => {
        setChildrenState(/* que se elimine el 7 y se ponga 1 */)
    };
    const handleRight = () => {
        setChildrenState(/* que se elimine el 1 y se ponga 7 */)
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleLeft,
        onSwipedRight: handleRight,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });


    return (
        <InView threshold={0.5}>
            {({ inView, ref }) => (
                <section className="mainSlider" id="SliderNosotros" ref={ref}>
                    {inView ? <SwipeModal inView={inView} /> : ""}
                    <div {...handlers} className="mainSliderInner">
                        <button className="arrowBtn left" onClick={handleRight}>
                            <img
                                src={arrowSlider}
                                className="arrowSlider left"
                                alt=""
                            />
                        </button>


                        {childrenState.map((currentElement,index)=>{
                            let classOrder; 
                                    if(index == 0){
                                        classOrder = "center";
                                    }
                                
                                    else if(index == 1){
                                        classOrder = "firstRight"
                                    }
                                
                                    else if(index == 2){
                                        classOrder = "secondRight"
                                    }
                                
                                    else if(index == 3){
                                        classOrder = "thirdRight"
                                    }
                                
                                    else if(index == 4){
                                        classOrder = "hidden"
                                    }
                                
                                    else if(index == 5){
                                        classOrder = "thirdLeft"
                                    }
                                
                                    else if(index == 6){
                                        classOrder = "secondLeft"
                                    }
                                
                                    else if(index == 7){
                                        classOrder = "firstLeft"
                                    }
                                    else {
                                        classOrder = "hidden"
                                    }
                                
                            
                            return (
                                <article key={index} className={"sliderArticle" + " " + classOrder}>
                                    {currentElement}
                                </article>
                            )
                        })}


{/* 
                        <article className={"sliderArticle" + " " + "thirdLeft"}>
                            <div className="sliderImgContainer">
                                <img
                                    src={compras}
                                    alt=""
                                    className="sliderItemImg"
                                />
                                <h3 className="sliderItemTitle">GASTOS</h3>
                                <p className="sliderArtDescription">
                                    Registrá todos los gastos de tu negocio.
                                    Además, separarlos en categoría para saber
                                    en qué estás gastando tu plata.
                                </p>
                            </div>
                        </article>
                        <article className={"sliderArticle" + " " + "secondLeft"}>
                            <div className="sliderImgContainer">
                                <img
                                    src={compras}
                                    alt=""
                                    className="sliderItemImg"
                                />
                                <h3 className="sliderItemTitle">CRM</h3>
                                <p className="sliderArtDescription">
                                    Gestioná tus relaciones con clientes y
                                    oportunidades de negocio de manera
                                    eficiente. Organizá y realizá un seguimiento
                                    de tus leads, clientes y
                                    proyectos,aumentando tus tasas de
                                    conversión.
                                </p>
                            </div>
                        </article>
                        <article className={"sliderArticle" + " " + "firstLeft"}>
                            <div className="sliderImgContainer">
                                <img
                                    src={compras}
                                    alt=""
                                    className="sliderItemImg"
                                />
                                <h3 className="sliderItemTitle">TURNOS</h3>
                                <p className="sliderArtDescription">
                                    Ideal para negocios que operan con citas o
                                    reservas. Programá y administrá turnos fácil
                                    y rápido.
                                </p>
                            </div>
                        </article>
                        <article className={"sliderArticle" + " " + "center"}>
                            <div className="sliderImgContainer">
                                <img
                                    src={compras}
                                    alt=""
                                    className="sliderItemImg"
                                />
                                <h3 className="sliderItemTitle">COMPRAS</h3>
                                <p className="sliderArtDescription">
                                    Registrá todas tus compras a proveedores.
                                    Además puedes verificar cuáles están
                                    pagadas.
                                </p>
                            </div>
                        </article>
                        <article className={"sliderArticle" + " " + "firstRight"}>
                            <div className="sliderImgContainer">
                                <img
                                    src={compras}
                                    alt=""
                                    className="sliderItemImg"
                                />
                                <h3 className="sliderItemTitle">VENTAS</h3>
                                <p className="sliderArtDescription">
                                    Creá y gestioná todas tus ventas desde un
                                    solo lugar.
                                </p>
                            </div>
                        </article>
                        <article
                            className={"sliderArticle" + " " + "secondRight"}
                        >
                            <div className="sliderImgContainer">
                                <img
                                    src={compras}
                                    alt=""
                                    className="sliderItemImg"
                                />
                                <h3 className="sliderItemTitle">STOCK</h3>
                                <p className="sliderArtDescription">
                                    Se actualiza con cada compra y venta que
                                    realizas. Además puedes agregar alarmas de
                                    stock mínimo para cada producto.
                                </p>
                            </div>
                        </article>
                        <article className={"sliderArticle" + " " + "thirdRight"}>
                            <div className="sliderImgContainer">
                                <img
                                    src={compras}
                                    alt=""
                                    className="sliderItemImg"
                                />
                                <h3 className="sliderItemTitle">
                                    CUENTAS CORRIENTES
                                </h3>
                                <p className="sliderArtDescription">
                                    Mantené ordenadas las deudas con clientes y
                                    proveedores. Puedes ver el historial de
                                    transacciones y saldos pendientes con cada
                                    contacto.
                                </p>
                            </div>
                        </article>
                        <article className={"sliderArticle" + " " + "hidden"}>
                            <div className="sliderImgContainer">
                                <img
                                    src={compras}
                                    alt=""
                                    className="sliderItemImg"
                                />
                                <h3 className="sliderItemTitle">TESORERÍA</h3>
                                <p className="sliderArtDescription">
                                    Administrá tus flujos de caja con precisión.
                                    Registrá y controlá todos tus cobros y
                                    pagos.
                                </p>
                            </div>
                        </article> */}


                        <button className="arrowBtn right" onClick={handleLeft}>
                            <img
                                src={arrowSlider}
                                className="arrowSlider right"
                                alt=""
                            />
                        </button>
                    </div>
                </section>
            )}
        </InView>
    );
};