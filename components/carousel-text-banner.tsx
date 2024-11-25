"use client"
import { link } from "fs";
import { title } from "process";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Car, Route } from "lucide-react";
import router from "next/router";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouseltop = [
    {
        id:1,
        title : "Envios en 24/48 h",
        description: "Como cliente VIP. Obten mas info",
        link: ""
    },
    {
        id:1,
        title : "Envios en 24/48 h",
        description: "Como cliente VIP. Obten mas info",
        link: ""
    },
    {
        id:1,
        title : "Envios en 24/48 h",
        description: "Como cliente VIP. Obten mas info",
        link: ""
    },
    {
        id:1,
        title : "Envios en 24/48 h",
        description: "Como cliente VIP. Obten mas info",
        link: ""
    },
]



const CarouselTextBanner = () =>{
    return(
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
            plugins={[
                Autoplay({
                    delay:2500
                })
            ]}          
            >
                <CarouselContent>
                {dataCarouseltop.map(({id,title,description,link}) =>(
                    <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                        <div>
                            <Card className="shadow-none border-nome bg-transpare">
                                <CardContent className="flex flex-col justify-center p-2 itmes-center text-center">
                                    <p className="sm:text-lg text-wrap dark:text-secondary ">{title}</p>
                                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>

        </div>
    );
}

export default CarouselTextBanner

