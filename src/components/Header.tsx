import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
    return (
        <div className="border-b-2 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link 
                    to ="/"
                    className="italic font-serif text-3xl font-bold text-black-500 p-2 rounded-lg hover:bg-blue-50"
                >
                    RayOrder
                    {/* <img src="./src/assets/only_hero.jpg" className="flex items-center w-14 h-auto rounded-full hover:bg-blue-50"/> */}
                </Link>
                <div className="md:hidden">
                    <MobileNav/>
                </div>
                <div className="hidden md:block">
                    <MainNav/>
                </div>
            </div>
        </div>
    )
}

export default Header;