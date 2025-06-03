import Image from 'next/image';
import MODELO from '@/images/especializacion/001.jpeg';
import MENTORIA from '@/images/especializacion/002.jpeg';
import ALIANZAS from '@/images/especializacion/003.jpeg';
export const AreaEspecializacion = () => {
    return (
        <section id='lineas_accion' className="bg-gray-100 px-6 sm:px-12 md:px-20 py-16 sm:py-20 md:py-24">
            <div className="mx-auto px-4 sm:px-8 md:px-16">
                <div className="flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20 justify-start">
                    
                    {/* Título y descripción */}
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-[240px] sm:max-w-[300px] tracking-tighter mb-4 sm:mb-0">
                            AREAS DE ESPECIALIZACIÓN
                        </h2>
                        {/* <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-[444px] sm:max-w-[500px]">
                            Nuestras líneas de acción están preparadas para resolver diversas áreas.
                        </p> */}
                    </div>

                    {/* Contenedor de las tarjetas */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-8 sm:gap-12 md:gap-16">
                        
                        {/* Tarjeta 1 */}
                        <div className="rounded-lg p-6 flex flex-col items-center sm:items-start justify-start bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[250px] md:w-[400px]">
                            <Image
                                src={MODELO}
                                alt="Servicios sostenibles"
                                className="mb-4 bg-center bg-cover w-full sm:h-[200px] rounded-lg"
                            />
                            <h3 className="text-lg sm:text-xl text-[#101828] font-semibold mb-2 leading-7 text-center sm:text-left">
                                Modelos de Negocio de Impacto
                            </h3>
                            <p>Diseña y escala modelos de negocio que generen valor económico, social y ambiental, atrayendo inversión de impacto </p>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="rounded-lg p-6 flex flex-col items-center sm:items-start justify-start bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[250px] md:w-[400px]">
                            <Image
                                src={MENTORIA}
                                alt="Servicios sostenibles"
                                className="mb-4 bg-center bg-cover w-full sm:h-[300px] rounded-lg"
                            />
                            <h3 className="text-lg sm:text-xl text-[#101828] font-semibold mb-2 leading-7 text-center sm:text-left max-w-[300px]">
                                Mentoría y Capacitación
                            </h3>
                            <p>Fortalece tus habilidades en sostenibilidad, finanzas sostenibles y liderazgo con programas personalizados </p>
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="rounded-lg p-6 flex flex-col items-center sm:items-start justify-start bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[250px] md:w-[400px]">
                            <Image
                                 src={ALIANZAS}
                                alt="Servicios sostenibles"
                                className="mb-4 bg-center bg-cover w-full sm:h-[300px] rounded-lg"
                            />
                            <h3 className="text-lg sm:text-xl text-[#101828] font-semibold mb-2 leading-7 text-center sm:text-left">
                                Alianzas Estratégicas y Networking
                            </h3>
                            <p>Conecta con inversionistas, organizaciones y líderes del ecosistema sostenible para impulsar tu crecimiento </p>
                            </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
