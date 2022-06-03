
const ptLanguage = {
    projects: {
        title: "Projetos",
    },
    navbar: {
        home: 'Ínicio',
        about: 'Sobre',
        resume: 'Resumo',
        contact: 'Contato'
    },
    header: {
        message: 'Olá, meu nome é',
        name: 'Felipe Jhordan',
        buttonText: 'Olhe meus projetos!'
    }
}

const enLanguage = {
    projects: {
        title: "Projects"
    },
    navbar: {
        home: 'Home',
        about: 'About',
        resume: 'Resume',
        contact: 'Contact'
    },
     header: {
        message: 'Hello, my name is',
        name: 'Felipe Jhordan',
        buttonText: 'Check out my Projects !'
    }
}

export const getData = (isPortuguese) => isPortuguese ? ptLanguage : enLanguage
