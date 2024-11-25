import { link } from "fs";

const dataFooter =[
    {
        id:1,
        name:"Sobre Nosotros",
        link:"#"

    },
    {
        id:2,
        name:"Productos",
        link:"#"

    },
    {
        id:3,
        name:"Mi cuenta",
        link:"#"

    },
    {
        id:4,
        name:"Piliticas de privacidad",
        link:"#"

    },

]



const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="w-full max-w-screen-xl mx-auto p-6 md:py-10">
                <div className="sm:flex sm:items-center sm:justify-between">
                    {/* Nombre de la tienda */}
                    <p className="text-lg font-bold text-gray-200">
                        Elegan Store
                    </p>

                    {/* Lista de enlaces */}
                    <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-400 sm:gap-6">
                        {dataFooter.map((data) => (
                            <li key={data.id}>
                                <a
                                    href={data.link}
                                    className="hover:text-gray-200 hover:underline transition-all"
                                >
                                    {data.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Derechos reservados */}
                <div className="mt-8 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Elegan Store. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;