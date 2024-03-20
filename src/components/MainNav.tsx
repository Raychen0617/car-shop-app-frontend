import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, ScrollText} from "lucide-react";
const MainNav = () => {
    
    const { loginWithRedirect, isAuthenticated } = useAuth0();
  
    return (
      <span className="flex space-x-2 items-center">
        {isAuthenticated ? (
          <div className="flex flex-row items-center">
            <Link to="/order-status" className="flex flex-col items-center justify-center hover:text-blue-500 mx-3">
              <span className="font-mono font-bold text-sm">Orders</span>
              <ScrollText className="p-1" size={50}/>
            </Link>
            <Link to="/cart" className="flex flex-col items-center justify-center hover:text-blue-500">
              <span className="font-mono font-bold text-sm">Cart</span>
              <ShoppingCartIcon className="p-1" size={50}/>
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