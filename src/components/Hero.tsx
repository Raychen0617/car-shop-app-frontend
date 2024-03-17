import hero from "../assets/hero.jfif"

const Hero = () => {
    return (
        <div className="flex justify-center items-center">
            <img src={hero} className="max-w-[1000px] max-h-[600px] object-cover"/>
        </div>
    );
};

export default Hero;