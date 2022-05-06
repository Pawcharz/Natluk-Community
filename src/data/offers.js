
class Offer {
    constructor({period='', title='', price=100, previousPrice=null, advantages=[], href=''}) {
        this.period = period;
        this.title = title;
        this.price = price;
        this.previousPrice = previousPrice;
        this.advantages = advantages;
        this.href = href;
    }
}

const offersGeneral = [
    new Offer({
        period: 'Monthly',
        title: 'One Community',
        price: 30,
        advantages: [
            'Access to channels of chosen community',
            'Podcasts + archives',
            'Webinars with experts',
            'Access to our resource base: tools, books and courses',
            `Discounts on our montors' consultations`,
            'Early Access to our Products',
            'Newsletter',
        ],
    }),
    new Offer({
        period: 'Monthly',
        title: 'All Communities',
        price: 80,
        previousPrice: 90,
        advantages: [
            'Everything included in plans for other communities (Data Science, Blockchain and Python)',
        ],
    }),
    new Offer({
        period: 'Yearly',
        title: 'One Community',
        price: 300,
        previousPrice: 360,
        advantages: [
            'Everything included in the monthly variant',
            'You recieves 2 months for free - You save up to 60 EUR.'
        ],
    }),
    new Offer({
        period: 'Yearly',
        title: 'All Communities',
        price: 800,
        previousPrice: 960,
        advantages: [
            'Everything included in the monthly variant',
            'You recieves 2 months for free - You save up to 160 EUR.'
        ],
    }),
]

const offersDataScience = [
    new Offer({
        period: 'Monthly',
        title: 'Monthly subscription',
        price: 30,
        advantages: [
            'Access to all Data Science channels',
            'Podcasts + archives',
            'Webinars with experts',
            'Access to our resource base: tools, books and courses',
            `Discounts on our montors' consultations`,
            'Early Access to our Products',
            'specially designed Data Science newsletter',
        ],
    }),
    new Offer({
        period: 'Yearly',
        title: 'Yearly subscription',
        price: 300,
        previousPrice: 360,
        advantages: [
            'Everything included in the monthly variant',
            'You recieves 2 months for free - You save up to 60 EUR.'
        ],
    }),
]
const offersBlockchain = [
    new Offer({
        period: 'Monthly',
        title: 'Monthly subscription',
        price: 30,
        advantages: [
            'Access to all Blockchain & Web3.0 channels',
            'Podcasts + archives',
            'Webinars with experts',
            'Access to our resource base: tools, books and courses',
            `Discounts on our montors' consultations`,
            'Early Access to our Products',
            'specially designed Blockchain & Web3.0 newsletter',
        ],
    }),
    new Offer({
        period: 'Yearly',
        title: 'Yearly subscription',
        price: 300,
        previousPrice: 360,
        advantages: [
            'Everything included in the monthly variant',
            'You recieves 2 months for free - You save up to 60 EUR.'
        ],
    }),
]
const offersPython = [
    new Offer({
        period: 'Monthly',
        title: 'Monthly subscription',
        price: 30,
        advantages: [
            'Access to all Python channels',
            'Podcasts + archives',
            'Webinars with experts',
            'Access to our resource base: tools, books and courses',
            `Discounts on our montors' consultations`,
            'Early Access to our Products',
            'specially designed Python newsletter',
        ],
    }),
    new Offer({
        period: 'Yearly',
        title: 'Yearly subscription',
        price: 300,
        previousPrice: 360,
        advantages: [
            'Everything included in the monthly variant',
            'You recieves 2 months for free - You save up to 60 EUR.'
        ],
    }),
]

export {offersGeneral, offersDataScience, offersBlockchain, offersPython};