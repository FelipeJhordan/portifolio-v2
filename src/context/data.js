
const ptLanguage = {
    projects: {
        title: "Projetos",
    },
    navbar: {
        home: 'Inicio',
        about: 'Sobre',
        resume: 'Resumo',
        contact: 'Contato'
    },
    header: {
        message: 'Olá, meu nome é',
        name: 'Felipe Jhordan',
        buttonText: 'Olhe meus projetos!'
    },
    about: {
        title: 'Sobre mim',
        text: `Já concluí o ensino médio, e atualmente estou cursando Análise e Desenvolvimento de Sistemas pela IFTM, inclusive também tenho um curso Técnico de Informática pela UFTM.</br>
Possuo experiência fundamentalmente com em Angular2+, Node ( AdonisJS , NestJS e Serverless) e Golang, além de ter conhecimento e práticas no meu github com Kotlin, Java e Python.</br>
Recentemente fiz um investimento nos meus estudos, para conquistar habilidades como desenvolvedor full cycle.`,
        expert: 'Atualmente eu possuo conhecimento ou experiência nas seguintes tecnologias:'

    },
    resume: {
        title: 'Resumo',
        download: "Baixar CV",
        education: {
            title: 'Educação',
            list: [
                {
                    place: 'UFTM - Cefores',
                    title: 'Técnico em Informática',
                    date: ' Março 2017 - Agosto 2018'
                },
                {
                    place: 'IFTM',
                    title: 'Superior em Análise e Desenvolvimento de Sistemas',
                    date: ' Março 2018 - Atual'
                }
            ]
        },
        jobs: {
            title: 'Trabalho',
            list: [
                {
                    title: 'Estagiário',
                    place: 'Printer Magazine LTDA',
                    date: 'Abril 2019 - Outubro 2019',
                    details: 'Manutenção de impressoras e apoio técnico.'
                },
                {
                    title: 'Estagiário em Desenvolvimento',
                    place: 'Cândido Empresarial',
                    date: 'Outubro 2020 - Abril 2021',
                    details: 'Desenvolvimento full-stack utilizando Angular2+/AdonisJS E Postgresql'
                },
                {
                    title: 'Desenvolvedor full-stack',
                    place: 'Usemobile',
                    date: 'Janeiro 2022 - Abril 2022',
                    details: 'Desenvolvimento focado no back-end utilizando o NESTJS.'
                },
                {
                    title: 'Desenvolvedor de software',
                    place: 'Madeira Madeira',
                    date: 'Junho 2022 - Current',
                    details: 'Desenvolvimento focado no back-end, utilizando ferramentas do ambiente node como  NESTJS/Express/Serverless com outras tecnologias como: Golang, Mongodb, Redis, AWS ( S3, SNS, SQS, Lambda), Mongodb e Scrum (Jira).'
                }
            ]
        },
         skills: {
            list: [
                "NodeJS/Typescript",
                "Banco de dados relacional",
                "Banco de dados não relacional",
                "Git/GitFlow",
                "AWS",
                "Teste/TDD",
                "Gof/Solid",
                "Docker",
                "Clean Code",
                "Noções de Spring",
                "Html, CSS e Javascript",
                "Golang",
                "Noções de  React / Angular2+", ]
        }
    },
    contact: {
        title: 'Entrar em contato',
        message: 'Estou atuamente na madeira madeira, porém sinta-se livre para me enviar alguma mensagem ou feedback.',
        contactButtonTitle: 'Contato'

    },
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
    },
    about: {
        title: 'About Me',
        text: `I've already finished high school, and I'm currently studying Systems Analysis and Development at IFTM, and I also have a Computer Technician course at UFTM.</br>
        I have fundamentally experience with Angular2+, Node ( AdonisJS , NestJS and Serverless) and Golang, in addition to having knowledge and practices in my github with Kotlin, Java and Python.</br>
        I recently made an investment in my studies to gain skills as a full cycle developer.`,
        expert: 'I currently have knowledge or experience in the following technologies:'

    },
    resume: {
        title: 'Resume',
        download: "Download CV",
        education: {
            title: 'Education',
            list: [
                {
                    place: 'UFTM - Cefores',
                    title: 'Computer Technician',
                    date: ' March 2017 - August 2018'
                },
                {
                    place: 'IFTM',
                    title: 'Superior in Systems Analysis and Development',
                    date: ' March 2018 - Current'
                }
            ]
        },
        jobs: {
            title: 'Work',
            list: [
                {
                    title: 'Intern',
                    place: 'Printer Magazine LTDA',
                    date: 'April 2019 - October 2019',
                    details: 'Maintenance of printers and  technice suport.'
                },
                {
                    title: 'Intern Dev',
                    place: 'Cândido Empresarial',
                    date: 'October 2020 - April 2021',
                    details: 'Development full-stack with Angular2+/AdonisJS and Postgresql'
                },
                {
                    title: 'Dev full-stack',
                    place: 'Usemobile',
                    date: 'January 2022 - April 2022',
                    details: 'Development focused  in back-end using NESTJS framework.'
                },
                {
                    title: 'Software Developer',
                    place: 'Madeira Madeira',
                    date: 'Junho 2022 - Current',
                    details: 'Development focused  in back-end using node frameworks, like NESTJS/Express/Serverless with others tecnologies like: Golang, Mongodb, Redis, AWS ( S3, SNS, SQS, Lambda), Mongodb and Scrum(Jira) .'
                }
            ]
        },
        skills: {
            list: [
                "NodeJS/Typescript",
                "Relational Database",
                "No Relational Database",
                "Git/GitFlow",
                "AWS",
                "Test/TDD",
                "Gof/Solid",
                "Docker",
                "Clean Code",
                "Notions of Spring",
                "Html, CSS and Javascript",
                "Golang",
                "Notions of  React / Angular2+"]
        }
    },
    contact: {
        title: 'Get in Touch',
        message:` I'm currently at Madeira Madeira, however feel free to send me any messages or feedback.`,
        contactButtonTitle: 'Contact'
    }
}

export const getData = (isPortuguese) => isPortuguese ? ptLanguage : enLanguage
