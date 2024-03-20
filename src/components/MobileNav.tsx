import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () =>{

    const {isAuthenticated, loginWithRedirect, user} = useAuth0();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-blue-500"/>
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated ? 
                    (<span className="text-xl flex items-center font-mono font-bold gap-2">
                        <CircleUserRound className="text-blue-500"/>
                        {user?.name}
                    </span>
                    )
                    : 
                    (<span>Welcome to ray's restaurant</span>)}
                </SheetTitle>
                <Separator/>
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated? 
                        <MobileNavLinks/> 
                        :
                        <Button className="flex-1 font-bold bg-blue-500" onClick={async () => await loginWithRedirect()}>Log In</Button>
                    }
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;