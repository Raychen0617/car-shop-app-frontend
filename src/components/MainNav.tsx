import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, Star } from "lucide-react";
const MainNav = () => {
    
    const { loginWithRedirect, isAuthenticated } = useAuth0();
  
    return (
      <span className="flex space-x-2 items-center">
        {isAuthenticated ? (
          <div className="flex flex-row items-center">
            <Link to="/favorite">
              <Star className="border-4 border-transparent hover:border-gray-300 m-3 p-1 hover:text-blue-500" size={60} fill="yellow"/>
            </Link>
            <Link to="/cart">
              <ShoppingCartIcon className="border-4 border-transparent hover:border-gray-300 p-1 hover:text-blue-500" size={60}/>
            </Link>
            <UsernameMenu />
          </div>
        ) : (
          <Button
            variant="ghost"
            className="font-mono font-bold hover:text-blue-500 hover:bg-white"
            onClick={async () => await loginWithRedirect()}
          >
            Log In
          </Button>
        )}
      </span>
    );
  };
  
  export default MainNav;