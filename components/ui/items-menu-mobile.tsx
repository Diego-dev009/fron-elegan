import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Menu } from "lucide-react";

const ItemMenuMobile = () =>{
    return(
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <p>HOMBRES</p>
                <p>MUJERES</p>
                <p>NUEVOS Y TENDENCIAS</p>
            </PopoverContent>
        </Popover>


    );
}

export default ItemMenuMobile