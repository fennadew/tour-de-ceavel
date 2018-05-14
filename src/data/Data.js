export const data = [
    {
        name: 'Biogasboat',
        imgUrl: require('../images/biogasboot.jpeg'),
        link: '/overview/biogasboat',
        previousLink: '/overview/cafe-de-ceuvel',
        previousName: 'Cafe de Ceuvel',
        previousImgUrl: require('../images/cafe.jpg'),
        nextLink: '/overview/metabolic-lab',
        nextName:  'Metabolic lab',
        nextImgUrl: require('../images/metabolic.jpg')
    },
    {
        name: 'Metabolic lab',
        imgUrl: require('../images/metabolic.jpg'),
        link: '/overview/metabolic-lab',
        previousLink: '/overview/biogasboat',
        previousName: 'Biogasboat',
        previousImgUrl: require('../images/biogasboot.jpeg'),
        nextLink: '/overview/de-ceuvel-community',
        nextName: 'Community',
        nextImgUrl: require('../images/community.jpg')
    },
    {
        name: 'Community',
        imgUrl: require('../images/community.jpg'),
        link: '/overview/de-ceuvel-community',
        previousLink: '/overview/metabolic-lab',
        previousName: 'Metabolic lab',
        previousImgUrl: require('../images/greenhouse.png'),
        nextLink: '/overview/greenhouse',
        nextName: 'Greenhouse',
        nextImgUrl: require('../images/community.jpg')
    },
    {
        name: 'Greenhouse',
        imgUrl: require('../images/greenhouse.png'),
        link: '/overview/greenhouse',
        previousLink: '/overview/de-ceuvel-community',
        previousName: 'Community',
        previousImgUrl: require('../images/community.jpg'),
        nextLink: '/overview/urban-biorefinery',
        nextName:  'Urban biorefinery',
        nextImgUrl: require('../images/bio.png')
    },
    {
        name: 'Urban biorefinery',
        imgUrl: require('../images/bio.png'),
        link: '/overview/urban-biorefinery',
        previousLink: '/overview/greenhouse',
        previousName: 'Greenhouse',
        previousImgUrl: require('../images/greenhouse.png'),
        nextLink: '/overview/cafe-de-ceuvel',
        nextName: 'Cafe de Ceuvel',
        nextImgUrl: require('../images/cafe.jpg')
    },
    {
        name: 'Cafe de Ceuvel',
        imgUrl: require('../images/cafe.jpg'),
        link: '/overview/cafe-de-ceuvel',
        previousLink: '/overview/urban-biorefinery',
        previousName: 'Urban biorefinery',
        previousImgUrl: require('../images/bio.png'),
        nextLink: '/overview/biogasboat',
        nextName: 'Biogasboat',
        nextImgUrl: require('../images/biogasboot.jpeg')
    }
]
