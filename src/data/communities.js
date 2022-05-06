class Community {
    constructor({code='', name='', description='100', ready=false, href='', imageSrc=''}) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.ready = ready;
        this.href = href;
        this.imageSrc = imageSrc;
    }
}

const communities = [
    new Community({
        code: 'dataScience',
        name: 'Data Science',
        description: 'Already more than 30 data-science and machine-learning specialists are willing to help you in the journey of gathering knowledge and professional insight into the world of data.',
        ready: true,
        href: '/data-science',
        imageSrc: '/images/data-science-lg.png'
    }),
    new Community({
        code: 'blockchain',
        name: 'Blockchain + Web3',
        description: 'Join the group of more than 20 blockchain and web3.0 developers! Get access to verified resources and participte in webinars conducted by top specialists.',
        ready: true,
        href: '/blockchain',
        imageSrc: '/images/blockchain-lg.png'
    }),
    new Community({
        code: 'python',
        name: 'Python',
        description: 'The oldest and most numerous community - over 50 Python language programmers ready to answer your questions and help find the most optimal approach to your projects.',
        ready: true,
        href: '/python',
        imageSrc: '/images/python-lg.png'
    }),
    new Community({
        code: 'webDev',
        name: 'Web Development',
        description: 'We are soon launching the new community for Full-Stack Developers!',
        ready: false,
        href: '/web-dev',
        imageSrc: '/images/front-end-lg.png'
    }),
    new Community({
        code: 'businessIntelligence',
        name: 'Business Intelligence',
        description: 'The Business Intelligence group will soon be ready to launch!',
        ready: false,
        href: '',
        imageSrc: '/images/business-intelligence-lg.png'
    }),
]

export {communities};