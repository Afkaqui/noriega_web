import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import defecto from '@/images/autoridades/img001_Eduardo Noriega.jpeg';
import SANROCCO_01 from '@/images/proyectos/002_1.jpeg';
import SANROCCO_02 from '@/images/proyectos/002_2.jpeg';
import BIO_INCUVA_01 from '@/images/proyectos/003_1.jpeg';
import BIO_INCUVA_02 from '@/images/proyectos/003_2.jpeg';
import ACELERATOR from '@/images/proyectos/005.jpeg';
import PROMPERU from '@/images/proyectos/006.jpeg';
import FUNDACION_CO from '@/images/proyectos/007.jpeg';
import AMAZONIAS from '@/images/proyectos/008.jpeg';
// Tipos para los proyectos
type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  category: string;
  tags: string[];
  slug: string;
  impact?: string; // Campo opcional para mostrar impacto
};

// Datos de ejemplo de proyectos (puedes mover esto a un archivo aparte)
const projectsData: Project[] = [
  {
    id: '1',
    title: 'Gestor de Proyectos de Impacto Sostenible',
    description: 'Entidad: CIBS Fundo San Rocco (Centro de Innovación y Biotecnología AgroTecnológica)',
    imageUrl: SANROCCO_01,
    category: 'Impacto Sostenible',
    tags: ['Innovación', 'Biotecnología', 'Sostenibilidad'],
    slug: 'gestor-proyectos-impacto',
    // impact: '150 familias beneficiadas'
  },
  {
    id: '2',
    title: 'Consultor de Cambio Climático y Economía Circular (Uso de Biomateriales)',
    description: 'Entidad: Bioincuba-UPCH (Universidad Peruana Cayetano Heredia) - Proyecto Mucílago.',
    imageUrl: BIO_INCUVA_01,
    category: 'Cambio Climático',
    tags: ['Economía', 'Biomateriales', 'Circular'],
    slug: 'cambio-climatico-biomateriales',
    // impact: '12 escuelas equipadas'
  },
  {
    id: '3',
    title: 'Líder de Propuesta - Finalista Land Accelerator Perú',
    description: 'Entidad: Land Accelerator Perú (Iniciativa 20x20 del World Resources Institute - WRI) / JEConsulting SAC.',
    imageUrl: ACELERATOR,
    category: 'Propuesta',
    tags: ['Tecnología', 'Innovación'],
    slug: 'lider-propuesta-land-accelerator',
    // impact: '5 toneladas recicladas/mes'
  },
  {
    id: '4',
    title: 'Gestor de Proyectos (PROMPERÚ)',
    description: 'Entidad: Dirección de Promoción de Inversiones Empresariales de PROMPERÚ.',
    imageUrl: PROMPERU,
    category: 'Inversión Empresarial',
    tags: ['Inversion', 'PROMPERÚ', 'Proyectos'],
    slug: 'gestor-proyectos-promperu',
    // impact: '20 hectáreas recuperadas'
  },
  {
    id: '5',
    title: 'Consultor en Sostenibilidad y Emprendimientos de Impacto',
    description: 'Entidad: Fundación Aquí Sí Hay Futuro (Colombia)',
    imageUrl: FUNDACION_CO,
    category: 'Sostenibilidad',
    tags: ['Sostenibilidad', 'Emprendimiento', 'Impacto'],
    slug: 'emprendimientos-impacto',
    // impact: '500+ personas beneficiadas'
  },
  {
    id: '6',
    title: 'Consultor en Sostenibilidad y Triple Impacto',
    description: 'Entidad: Amazonías Símbolos y Sentimientos (Perú)',
    imageUrl: AMAZONIAS,
    category: 'Triple Impacto',
    tags: ['Sostenibilidad', 'Cultura', 'Biodiversidad'],
    slug: 'triple-impacto-amazonias',
    // impact: '300+ emprendedores capacitados'
  }
];

export const ProjectsGallery2 = () => {
  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-900 max-w-3xl mx-auto">
            8 años en proyectos vinculados a cambio climático y/o políticas internacionales sobre reducción de gases de efecto invernadero
          </p>
        </div>

        {/* Galería */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-60 w-full">
                <Image
                  src={project.imageUrl}
                  alt={`Imagen del proyecto ${project.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 bg-[#759C30] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col items-center text-center"> {/* Cambiado a flex-col y items-center */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center w-full"> {/* Añadido text-center y w-full */}
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-center"> {/* Añadido text-center */}
                  {project.description}
                </p>
                
                {project.impact && (
                  <div className="mb-3 text-center"> {/* Añadido text-center */}
                    <span className="text-sm font-semibold text-[#759C30]">Impacto: </span>
                    <span className="text-sm text-gray-600">{project.impact}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4 justify-center"> {/* Añadido justify-center */}
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`https://www.linkedin.com/in/ingeduardonoriegaperu/`}
                  // href={`/proyectos/${project.slug}`}
                  className="inline-flex items-center text-[#759C30] font-medium hover:text-[#5a7a24] transition-colors"
                >
                  Conoce más
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};