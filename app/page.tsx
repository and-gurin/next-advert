import Materials from "@/components/materials/Materials";
import Slogan from "@/components/slogan/Slogan";
import Promotion from "@/components/promotions/Promotion";
import Gallery from "@/components/gallery/Gallery";
import img1 from "@/public/akashi-kaikyo-bridge.jpg"
import img2 from "@/public/golden-gate-bridge.jpg"
import img3 from "@/public/ponte-vecchio.jpg"
import img4 from "@/public/sydney-harbour-bridge.jpg"
import img5 from "@/public/tower-bridge.jpg"
import img6 from "@/public/the-brooklyn-bridge.jpg"
import Form from "@/components/form/Form";

const advantages = [
    {
        title: 'advantage N1',
        description: 'advantage description',
    },
    {
        title: 'advantage N2',
        description: 'advantage description',
    },
    {
        title: 'advantage N3',
        description: 'advantage description',
    },
    {
        title: 'advantage N4',
        description: 'advantage description',
    },
    {
        title: 'advantage N5',
        description: 'advantage description',
    },
]

const leistungen = [
    {
        title: 'Grafik & Design',
        description: 'description',
    },
    {
        title: 'Sicht- und Sonnenschutz',
        description: 'description',
    },
    {
        title: 'Druckproduckten',
        description: 'description',
    },
    {
        title: 'Autobeschriftung',
        description: 'description',
    },
    {
        title: 'Schilder',
        description: 'description',
    },
    {
        title: 'Textil',
        description: 'description',
    },
    {
        title: 'Vitrinen & Fassaden',
        description: 'description',
    },
    {
        title: 'Flags, Banner, Rollups',
        description: 'description',
    },
    {
        title: 'Demontage',
        description: 'description',
    },
]

const images = [
    {id: '1', src: img1, tag: 'all'},
    {id: '2', src: img2, tag: 'all'},
    {id: '3', src: img3, tag: 'all'},
    {id: '4', src: img4, tag: 'all'},
    {id: '5', src: img5, tag: 'all'},
    {id: '6', src: img6, tag: 'all'},
    ]

const tabs = [
    {tag: 'all', title: 'All'},
    {tag: 'wardrobe', title: 'Autobeschriftung'},
    {tag: 'hallway', title: 'Schilder'},
    {tag: 'sliding', title: 'Textil'},
    {tag: 'bedroom', title: 'Druckproduckten'},
]

const partners = [
    {
        title: '',
    },
    {
        title: '',
    },
    {
        title: '',
    },
    {
        title: '',
    },
    {
        title: '',
    },
]

export default function Home() {
    return (
        <>
            <Slogan/>
            <Materials title={'advantages'} materials={advantages}/>
            <Promotion/>
            <Materials href={'services'} title={'leistungen'} materials={leistungen}/>
            <Gallery height={''} images={images} tabs={tabs} defaultTag={'all'}/>
            <Form/>
            <Materials href={'team'} title={'partners'} materials={partners}/>
        </>
    );
}
