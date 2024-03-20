import hero from "../assets/only_hero.jpg"

const Hero = () => {
    return (
        <div className="flex justify-center items-center">
            <img src={hero} className="w-[300px] h-[300px] my-10 rounded-full object-cover"/>
        </div>
    );
};

export default Hero;