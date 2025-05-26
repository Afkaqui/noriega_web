import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import id1 from '@/images/autoridades/img001_Eduardo Noriega.jpeg';
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
    title: 'Jefe del Equipo de Economía Circular y Finanzas Verdes',
    description: 'Implementación de sistemas de agricultura sostenible en zonas urbanas marginales, capacitando a familias en cultivos orgánicos.',
    imageUrl: id1,
    category: 'Agricultura Sostenible',
    tags: ['Comunidad', 'Autosuficiencia', 'Orgánico'],
    slug: 'huertos-urbanos',
    impact: '150 familias beneficiadas'
  },
  {
    id: '2',
    title: 'Gestor de Proyectos de Impacto Sostenible y Consultor en Economía Circular y Biotecnología',
    description: 'Instalación de paneles solares en escuelas de zonas remotas, mejorando el acceso a energía limpia y educación digital.',
    imageUrl: id1,
    category: 'Energías Renovables',
    tags: ['Educación', 'Tecnología', 'Rural'],
    slug: 'energia-escolar',
    impact: '12 escuelas equipadas'
  },
  {
    id: '3',
    title: 'Consultor de Economía Circular y Cambio Climático (Uso de Biomateriales)',
    description: 'Sistema de gestión de residuos con incentivos económicos para comunidades urbanas, promoviendo la economía circular.',
    imageUrl: id1,
    category: 'Economía Circular',
    tags: ['Tecnología', 'Urbanismo', 'Innovación'],
    slug: 'reciclaje-inteligente',
    impact: '5 toneladas recicladas/mes'
  },
  {
    id: '4',
    title: 'Consultor en Economía Circular y Sostenibilidad',
    description: 'Recuperación de técnicas ancestrales de cultivo en armonía con los ecosistemas de montaña.',
    imageUrl: id1,
    category: 'Agricultura Regenerativa',
    tags: ['Andino', 'Tradicional', 'Biodiversidad'],
    slug: 'agroforesteria-andina',
    impact: '20 hectáreas recuperadas'
  },
//   {
//     id: '5',
//     title: 'Agua Potable para Comunidades',
//     description: 'Sistemas de purificación de agua mediante energía solar para comunidades sin acceso a agua limpia.',
//     imageUrl: '/images/projects/clean-water.jpg',
//     category: 'Salud Comunitaria',
//     tags: ['Agua', 'Salud', 'Tecnología'],
//     slug: 'agua-potable',
//     impact: '500+ personas beneficiadas'
//   }
//   {
//     id: '6',
//     title: 'Talleres de Sostenibilidad',
//     description: 'Programa educativo para emprendedores sobre prácticas comerciales sostenibles y responsabilidad ambiental.',
//     imageUrl: '/images/projects/workshop.jpg',
//     category: 'Educación',
//     tags: ['Capacitación', 'Emprendimiento', 'Sostenibilidad'],
//     slug: 'talleres-sostenibilidad',
//     impact: '300+ emprendedores capacitados'
//   }
];

export const ProjectsGallery1 = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            EXPERIENCIA Y PROYECTOS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            8 años en el sector PIUP y/o gestión de residuos sólidos
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
                  href={`/proyectos/${project.slug}`}
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