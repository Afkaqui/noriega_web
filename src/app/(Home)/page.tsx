import { Hero } from '@/components/ui/hero/Hero';
import { IndicatorPage } from '@/components/ui/indicator/indicator_page';
import { AboutUs } from '@/components/ui/aboutUs/AboutUs';
import {DirectorComponent} from '@/components/ui/director/director_component';

import { JoinUs } from '@/components/ui/joinUs/JoinUs';
import { Aliados } from '@/components/ui/aliados/Aliados';
import { AreaEspecializacion } from '@/components/ui/especializacion/Especializacion';
import { ContactUs } from '@/components/ui/contactUs/ContactUs';
// Debe revisarse para refactor
import { Trayectoria } from '@/components/ui/trayectoria/Trayectoria';
import {Socios} from '@/components/ui/socios/socios_page'
import {ProjectsGallery1} from '@/components/ui/proyects/Projects1';
import {ProjectsGallery2} from '@/components/ui/proyects/Projects2';
import {ProjectsGallery3} from '@/components/ui/proyects/Projects3';
export default function Home() {
    return (
        <div>
            <Hero />
            <IndicatorPage/>
            <AboutUs />
            <DirectorComponent/>
            <JoinUs />
            <Aliados />
            <AreaEspecializacion/>
            <Trayectoria/>
            <Socios />
            <ProjectsGallery1/>
            <ProjectsGallery2/>
            <ProjectsGallery3/>
            <ContactUs/>
        </div>
    );
}
