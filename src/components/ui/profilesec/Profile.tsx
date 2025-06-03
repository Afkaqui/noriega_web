import Image from 'next/image';
import Link from 'next/link';

import profilenoriega from '@/images/autoridades/img001_Eduardo Noriega.jpeg' ;
export const ProfileSection = () => {
  return (
    <section id="perfil" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Contenedor principal */}
        <div className="md:flex">
          {/* Sección de imagen (opcional) */}
          <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-6">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#759C30]">
              <Image
                src= {profilenoriega} // Reemplaza con tu imagen
                alt="Eduardo José Noriega Campos"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Sección de contenido */}
          <div className="p-8 md:w-2/3">
            {/* Encabezado */}
            <div className="mb-6">
              <span className="text-sm font-semibold text-[#759C30]">PERFIL</span>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                Eduardo José Noriega Campos
              </h1>
            </div>

            {/* Descripción */}
            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-gray-600">
                Soy Eduardo José Noriega Campos y mi misión es impulsar la sostenibilidad en América Latina. 
                He tenido el privilegio de colaborar con empresas y gobiernos en la creación de estrategias 
                de impacto, modelos de negocio regenerativos y proyectos que integran la economía circular 
                y las finanzas sostenibles.
              </p>
            </div>

            {/* Enlaces de contacto */}
            <div className="space-y-4">
              <Link 
                href="https://www.linkedin.com/in/ingeduardonoriegaperu/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </Link>

              <Link 
                href="https://wa.link/28whm8" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-600 hover:text-green-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29 3.617c-.173.075-.347.124-.52.124-.173 0-.347-.05-.495-.148-.148-.099-.587-.405-.832-.653-.421-.396-.702-.661-.939-.991-.198-.273-.396-.579-.446-.694-.05-.115-.05-.198.05-.396.1-.198.495-.578.669-.744.173-.165.248-.165.446-.074.198.099.793.396 1.09.644.297.248.446.322.644.322.198 0 .347-.024.495-.173.149-.148.644-.644.818-.868.173-.223.347-.248.495-.173.149.075.941.56 1.104.66.163.1.272.149.322.248.05.099.05.56-.099 1.09-.149.529-.868 1.143-1.238 1.243-.371.099-.693.074-.941-.05-.248-.124-.446-.272-1.04-.941-.396-.42-.662-.694-.843-.843-.173-.148-.297-.198-.446-.124-.149.075-.297.223-.347.323-.05.099-.099.272-.025.421.075.149.322.644.446.868.124.223.173.372.124.471-.05.099-.173.149-.397.074zM12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24z"/>
                </svg>
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};