import { Parallax } from 'react-parallax';

const Cover = ({img,title}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 45 }}
        bgImage={img}
        bgImageAlt="Elara Tourism"
        strength={-200}
    >
        <div>
            <div className="hero h-[700px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">"Your Gateway to Unforgettable Adventures: Explore Our Services!</p>
                       
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;