import { useState } from "react";

export default function CarrousselProduto() {
    const [slideIndex, setSlideIndex] = useState(0);
    const images = [
        "produto1.jpg", 
        "produto2.jpg", 
        "produto3.jpg"
    ]; // Substitua pelos caminhos das imagens reais dos produtos.

    const plusDiv = (n) => {
        let index = slideIndex + n;
        if (index >= images.length) {
            index = 0;
        }
        if (index < 0) {
            index = images.length - 1;
        }
        setSlideIndex(index);
    };

    const showDiv = (index) => {
        setSlideIndex(index);
    };

    return (
        <div
            className="w3-content w3-display-container"
            style={{ maxWidth: "1200px" }}
        >
            {/* Renderizando as imagens do carrossel */}
            {images.map((image, index) => (
                <img
                    key={index}
                    className="mySlides"
                    src={image}
                    alt={`Produto ${index + 1}`}
                    style={{
                        width: "100%",
                        display: slideIndex === index ? "block" : "none",
                    }}
                />
            ))}

            {/* Controles para avançar e voltar */}
            <div
                className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle"
                style={{ width: "100%" }}
            >
                <div
                    className="w3-left w3-hover-text-khaki"
                    onClick={() => plusDiv(-1)}
                >
                    &#10094;
                </div>
                <div
                    className="w3-right w3-hover-text-khaki"
                    onClick={() => plusDiv(1)}
                >
                    &#10095;
                </div>

                {/* Indicadores para trocar slides */}
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`w3-badge demo w3-border w3-transparent ${
                            slideIndex === index ? "w3-white" : "w3-hover-white"
                        }`}
                        onClick={() => showDiv(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
