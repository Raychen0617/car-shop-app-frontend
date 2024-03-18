import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-mono flex items-center px-3 font-bold hover:text-blue-500 gap-2">
        <CircleUserRound className="border-4 border-transparent hover:border-gray-300 p-1 hover:text-blue-500" size={60} />
        {/* {user?.email} */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[220px]">
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-mono font-bold hover:text-blue-500">
            User Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/order-status" className="font-mono font-bold hover:text-blue-500">
            Customer Order Status
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            to="/manage-restaurant"
            className="font-mono font-bold hover:text-blue-500"
          >
            Restaurant Manager
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="font-mono flex flex-1 font-bold bg-blue-500"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;