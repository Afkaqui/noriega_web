import HeroBackLogo from '@/images/HeroBackLogo.png';
import portada_img from '@/images/photos_background/003img_PORTADA_NOR.png';

export const Hero = () => {
    return (
        <section
            style={{ backgroundImage: `url(${portada_img.src})` }}
            className="bg-no-repeat bg-cover bg-center"
        >
            <div className="p-8 sm:p-60">
                <div className="text-left">
                    <h1 className="text-white font-bold text-[40px] sm:text-[72px] mb-4 sm:mb-6 leading-[48px] sm:leading-[88px] max-w-full sm:max-w-3xl">
                        Eduardo José Noriega Campos
                    </h1>
                    <p className="text-white text-lg sm:text-xl max-w-full sm:max-w-[974px] mb-1 sm:mb-4 leading-[24px] sm:leading-[30px]">
                    Impulsando ecosistemas de innovación sostenible
                    </p>

                    <p className="text-white text-lg sm:text-xl max-w-full sm:max-w-[974px] mb-6 sm:mb-12 leading-[24px] sm:leading-[30px]">
                    Desarrollando la estrategia territorial sostenible de Perú
                    </p>

                    <a 
                        className="bg-[#759C30] text-white rounded-[20px] block w-fit px-5 py-3" 
                        href="https://wa.link/1okcxk"
                    >
                        Contáctame
                    </a>

                </div>
            </div>
        </section>
    );
}
