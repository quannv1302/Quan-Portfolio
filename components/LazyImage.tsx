import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ className, containerClassName, alt, src, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${containerClassName}`}>
            {/* Skeleton / Placeholder */}
            <div
                className={`absolute inset-0 bg-slate-200 animate-pulse transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'
                    }`}
            />

            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                {...props}
            />
        </div>
    );
};

export default LazyImage;
