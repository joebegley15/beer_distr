import React, { useEffect, useMemo, useState } from "react";
import "./Carousel.scss";

const ImageCarousel = ({ images = [], autoPlay = true, interval = 3500 }) => {
    const validImages = useMemo(() => images.filter(Boolean), [images]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!autoPlay || validImages.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % validImages.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, validImages.length]);

    useEffect(() => {
        if (currentIndex > validImages.length - 1) {
            setCurrentIndex(0);
        }
    }, [currentIndex, validImages.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? validImages.length - 1 : prev - 1
        );
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % validImages.length);
    };

    if (!validImages.length) return null;

    return (
        <section className="image-carousel" aria-label="Homepage image carousel">
            <div className="image-carousel__frame">
                <button
                    type="button"
                    className="image-carousel__arrow image-carousel__arrow--left"
                    onClick={goPrev}
                    aria-label="Previous image"
                >
                    &#8249;
                </button>

                <div className="image-carousel__slides">
                    {validImages.map((image, index) => (
                        <div
                            key={`${image.src}-${index}`}
                            className={`image-carousel__slide ${index === currentIndex ? "is-active" : ""
                                }`}
                            aria-hidden={index !== currentIndex}
                        >
                            <img src={image.src} alt={image.alt || ""} />
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="image-carousel__arrow image-carousel__arrow--right"
                    onClick={goNext}
                    aria-label="Next image"
                >
                    &#8250;
                </button>
            </div>

            {validImages.length > 1 && (
                <div className="image-carousel__dots">
                    {validImages.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`image-carousel__dot ${index === currentIndex ? "is-active" : ""
                                }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ImageCarousel;