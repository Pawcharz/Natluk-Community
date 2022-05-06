
class Benefit {
    constructor({title='', description='', iconClass='', size="md"}) {
        this.title = title;
        this.description = description;
        this.iconClass = iconClass;
        this.size = size;
    }
}

const benefitsDataScience = [
    new Benefit({
        title: "Mastermind Groups",
        description: "Members of community recieve access to other likeminded people they can brainstorm with and develop their skills together.",
        iconClass: "fas fa-comments",
        size: "lg"
    }),
    new Benefit({
        title: "Live Coding Experience",
        description: "We periodicaly organize live coding meetings in which our collegues can work on solutions together with help of more experienced seniors and dedicated mentors.",
        iconClass: "fas fa-wrench",
        size: "md"
    }),
    new Benefit({
        title: "Verified resources",
        description: "Community members have access to large amount of verified resources, we know how hard it sometimes can be to find well fit solution to the problem - that's why we've already did it for you.",
        iconClass: "fas fa-server",
        size: "sm"
    }),
    new Benefit({
        title: "Informative Webinars",
        description: "Our mentors periodicaly organize webinars and provide verified knowledge to the less expirienced members. You can message them with your problems and surely, they will be glad to help you.",
        iconClass: "fas fa-chalkboard-teacher",
        size: "lg"
    })
]
const benefitsBlockchain = [
    new Benefit({
        title: "Mastermind Groups",
        description: "Members of community recieve access to other likeminded people they can brainstorm with and develop their skills together.",
        iconClass: "fas fa-comments",
        size: "lg"
    }),
    new Benefit({
        title: "Live Coding Experience",
        description: "We periodicaly organize live coding meetings in which our collegues can work on solutions together with help of more experienced seniors and dedicated mentors.",
        iconClass: "fas fa-wrench",
        size: "md"
    }),
    new Benefit({
        title: "Verified resources",
        description: "Community members have access to large amount of verified resources, we know how hard it sometimes can be to find well fit solution to the problem - that's why we've already did it for you.",
        iconClass: "fas fa-server",
        size: "sm"
    }),
    new Benefit({
        title: "Informative Webinars",
        description: "Our mentors periodicaly organize webinars and provide verified knowledge to the less expirienced members. You can message them with your problems and surely, they will be glad to help you.",
        iconClass: "fas fa-chalkboard-teacher",
        size: "lg"
    })
]
const benefitsPython = [
    new Benefit({
        title: "Mastermind Groups",
        description: "Members of community recieve access to other likeminded people they can brainstorm with and develop their skills together.",
        iconClass: "fas fa-comments",
        size: "lg"
    }),
    new Benefit({
        title: "Live Coding Experience",
        description: "We periodicaly organize live coding meetings in which our collegues can work on solutions together with help of more experienced seniors and dedicated mentors.",
        iconClass: "fas fa-wrench",
        size: "md"
    }),
    new Benefit({
        title: "Verified resources",
        description: "Community members have access to large amount of verified resources, we know how hard it sometimes can be to find well fit solution to the problem - that's why we've already did it for you.",
        iconClass: "fas fa-server",
        size: "sm"
    }),
    new Benefit({
        title: "Informative Webinars",
        description: "Our mentors periodicaly organize webinars and provide verified knowledge to the less expirienced members. You can message them with your problems and surely, they will be glad to help you.",
        iconClass: "fas fa-chalkboard-teacher",
        size: "lg"
    })
]

export {benefitsDataScience, benefitsBlockchain, benefitsPython};