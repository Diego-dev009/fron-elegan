"use client"

import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-li";
import ItemMenuMobile from "./ui/items-menu-mobile";
import ToggleTheme from "./toggle-theme";

const Navbar = () =>{
    const router = useRouter()
    return(
        
        <div className="flex  justify-between p-4 mx-auto cursor-pointer sm:max-w-8xl md:max-w-6x1">
            <h1 className="text-3xl" onClick={() =>router.push("/")} >Elegan
                <samp className="font-bold">
                    Store
                </samp>
            </h1>
            <div className="items-center justify-between hiddeb sm:flex">
                <MenuList/>
            </div>
            <div className="flex sm:hidden">
                <ItemMenuMobile/>
            </div>
            <div className="flex intems-center justify-between gap-2 sm:gap-7">
                <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")} />
                <Heart className="cursor-pointer" onClick={() => router.push("/lover-products")}  />

                <User strokeWidth={1} className=" cursor-pointer" />
                
                <ToggleTheme/>
            </div>
        </div>

    );
}

export default Navbar;