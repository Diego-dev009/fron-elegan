"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



const  MenuList = () =>{
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>SOBRE NOSOTROS</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Elegan store
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                     Elegan es un tienda de confianza para su clientes 
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
              ¡Bienvenidos a Elegan Store!
              En Elegan Store, redefinimos la experiencia de compras en línea en Bolivia. Nuestra plataforma ha sido diseñada pensando en ti, combinando elegancia, modernidad y funcionalidad para brindarte una experiencia única. Descubre un catálogo exclusivo de ropa deportiva y moda actual que se adapta a tu estilo de vida dinámico.
              </ListItem>
              <ListItem href="/docs/Productos" title="Productos">
              En Elegan Store, cada producto está cuidadosamente seleccionado para ofrecerte calidad, estilo y funcionalidad. Descubre nuestra amplia colección de ropa deportiva y moda casual diseñada para acompañarte en cada momento de tu día, ya sea en tus entrenamientos, actividades al aire libre o para un look moderno y cómodo.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="">
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>CATEGORIA</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              NUEVOS Y TENDENCIAS
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default MenuList

const components: { title: string; href: string; description: string }[] = [
  {
    title: "HOMBRES",
    href: "/docs/primitives/alert-dialog",
    description:
      "",
  },
  {
    title: "MUJERES",
    href: "/docs/primitives/hover-card",
    description:
      "",
  },
  {
    title: "NIÑOS",
    href: "/docs/primitives/progress",
    description:
      "",
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

