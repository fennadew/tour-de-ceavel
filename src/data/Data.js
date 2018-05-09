export const data = [
    {
        name: 'Biogasboat',
        imgUrl: require('../images/biogasboot.jpeg'),
        link: '/overview/biogasboat',
        previousLink: '/overview/cafe-de-ceuvel',
        previousName: 'Cafe de Ceuvel',
        nextLink: '/overview/metabolic-lab',
        nextName:  'Metabolic lab'
    },
    {
        name: 'Metabolic lab',
        imgUrl: require('../images/metabolic.jpg'),
        link: '/overview/metabolic-lab',
        previousLink: '/overview/biogasboot',
        previousName: 'Biogasboat',
        nextLink: '/overview/de-ceuvel-community',
        nextName: 'De Ceuvel community'
    },
    {
        name: 'De Ceuvel community',
        imgUrl: require('../images/community.jpg'),
        link: '/overview/de-ceuvel-community',
        previousLink: '/overview/metabolic-lab',
        previousName: 'Metabolic lab',
        nextLink: '/overview/greenhouse',
        nextName: 'Greenhouse',
    },
    {
        name: 'Greenhouse',
        imgUrl: require('../images/greenhouse.png'),
        link: '/overview/greenhouse',
        previousLink: '/overview/de-ceuvel-community',
        previousName: 'De Ceuvel community',
        nextLink: '/overview/urban-biorefinery',
        nextName:  'Urban biorefinery'
    },
    {
        name: 'Urban biorefinery',
        imgUrl: require('../images/bio.png'),
        link: '/overview/urban-biorefinery',
        previousLink: '/overview/greenhouse',
        previousName: 'Greenhouse',
        nextLink: '/overview/cafe-de-ceuvel',
        nextName: 'Cafe de Ceuvel'
    },
    {
        name: 'Cafe de Ceuvel',
        imgUrl: require('../images/cafe.jpg'),
        link: '/overview/cafe-de-ceuvel',
        previousLink: '/overview/urban-biorefinery',
        previousName: 'Urban biorefinery',
        nextLink: '/overview/metabolic-lab',
        nextName: 'Biogasboat',
    }
]