
import Image from 'next/image';
import genesLogo from '@/images/genesLogo.png';

export const Header = () => {
    return (
        <header className="py-[11px]">
            <nav className="container mx-auto flex flex-wrap justify-between items-center gap-5">
                {/* Logo */}
                <div className="flex-shrink-0">
                    {/* <Image
                        src={genesLogo}
                        alt="GenesPeru"
                        width={75}
                        height={75} 
                    /> */}
                </div>

                {/* Menú */}
                <ul className="flex gap-5 items-center space-x-4 sm:space-x-6">
                    <li><a className="font-semibold text-[#475467]" href="#nosotros">Perfil</a></li>
                    <li><a className="font-semibold text-[#475467]" href="#lineas_accion">Especialización</a></li>
                    <li><a className="font-semibold text-[#475467]" href="#proyectos">Proyectos</a></li>
                    <li><a className="font-semibold text-[#475467]" href="#lineas_accion">Premios</a></li>
                    <li><a className="font-semibold text-[#475467] pr-4 sm:pr-6" href="#contacto">Blog</a></li>
                </ul>
            </nav>
        </header>
    )
}