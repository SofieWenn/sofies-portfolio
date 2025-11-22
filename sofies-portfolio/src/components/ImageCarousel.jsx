import React, { useState } from 'react';

export default function ImageCarousel({ images, altText }) {
    const TOTAL_SLIDES = images.length;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!images || images.length === 0) {
        return <div>Inga bilder tillgängliga.</div>;
    }
    
    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex === TOTAL_SLIDES - 1 ? 0 : prevIndex + 1)
        );
    };

    const goToPrev = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex === 0 ? TOTAL_SLIDES - 1 : prevIndex - 1)
        );
    };

    return (
        <div className="carousel-container">
            
            {/* Navigationsknapp: Föregående */}
            {TOTAL_SLIDES > 1 && ( 
                <button className="carousel-btn prev" onClick={goToPrev}>
                    &#10094; 
                </button>
            )}

            {/* Den aktuella bilden */}
            <img 
                src={images[currentImageIndex]} // Använder bild från props
                className="card-img-top" 
                alt={`${altText} - Bild ${currentImageIndex + 1}`} 
            />

            {/* Navigationsknapp: Nästa */}
            {TOTAL_SLIDES > 1 && ( 
                <button className="carousel-btn next" onClick={goToNext}>
                    &#10095; 
                </button>
            )}
            
            {/* Indikator (Valfritt) */}
            {TOTAL_SLIDES > 1 && (
                <div className="carousel-indicators">
                    {currentImageIndex + 1} av {TOTAL_SLIDES}
                </div>
            )}
        </div>
    );
}