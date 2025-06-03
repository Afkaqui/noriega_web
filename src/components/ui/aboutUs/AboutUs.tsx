import Image from 'next/image';

import rect2 from '@/images/rect2.png'

export const AboutUs = () => {
    return (
        <section id='nosotros' className="relative">
            <div className="py-4 px-6 bg-white">
                <div className="container mx-auto flex flex-col  items-center">
                    {/* Texto de la izquierda */}
                    <div className="text-center  mb-6">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 mx-auto md:mx-0">
                            Conoce más de mi
                        </h2>
                        <p className= "mb-6 text-lg leading-7  mx-auto md:mx-0 text-black">{/* revisar bold */}
                            Como experto en Gestion de la Sostenibilidad, soy un líder visionario en latino américa 
                            con más de 24 años de experiencia en el sector. Mi pasión por la sostenibilidad me ha llevado 
                            a trabajar en una amplia gama de proyectos, desde la formulación de políticas públicas hasta la 
                            inversión en empresas sostenibles.
                        </p>
                        {/* <p className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-700 mb-4 mx-auto md:mx-0">
                            Como experto en Gestion de la Sostenibilidad, soy un líder visionario en latino américa 
                            con más de 24 años de experiencia en el sector. Mi pasión por la sostenibilidad me ha llevado 
                            a trabajar en una amplia gama de proyectos, desde la formulación de políticas públicas hasta la 
                            inversión en empresas sostenibles.
                        </p> */}
                        <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-700 mb-4 mx-auto md:mx-0">
                            Experto en economía regenerativa, finanzas sostenibles y economía circular
                        </h3>
                        <p className= "mb-6 text-lg leading-7  mx-auto md:mx-0 text-black">{/* revisar bold */}
                            Soy ingeniero industrial y cuento con un máster en finanzas, un MBA y una especialidad 
                            en coaching. Esta combinación de formación académica y experiencia práctica me permite 
                            ofrecer una perspectiva única y holística sobre la sostenibilidad, además de especializaciones 
                            certificadas por los principales impulsores del ecosistema sostenible.
                        </p>
                        <p className= "mb-6 text-lg leading-7  mx-auto md:mx-0 text-black">{/* revisar bold */}
                            Comprometido con el cumplimiento de los ODS de la ONU a través de la Agenda 2030 Creo 
                            que la sostenibilidad es la clave para crear un futuro más justo, equitativo y sostenible para todos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
