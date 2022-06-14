
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
Possuo experiência fundamentalmente com em Angular2+ e Node ( AdonisJS e NestJS), além de ter conhecimento e práticas no meu github com Kotlin, Java e Python.</br>
No momento estou livre, e portanto estou estudando/treinando e melhorando meu portfólio, para mostrar minhas habilidades e inclusive mostrar que sou apto para desenvolver código limpo e confiável.</br>
Estou focando meus estudos em NodeJS, por ser a tecnologia que mais tenho vivência e experiência, porém posso atuar com outras tecnologias back-end como por exemplo Golang, elixir ou Java.`,
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
                "Noções de  React / Angular2+"]
        }
    },
    contact: {
        title: 'Entrar em contato',
        message: 'Atualmente procurando por uma nova oportunidade, você pode me contactar clicando no botão abaixo e me enviando uma mensagem',
        message2: 'Qualquer outra questão você pode dizer oi, sinta-se livre para me contactar e eu vou tentar dar o meu melhor para você!',
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
        text: `I have already completed high school, and I am currently studying Systems Analysis and Development at IFTM, and I also have a Computer Technician course at UFTM.</br>

I have fundamental experience with Angular2+ and Node (AdonisJS and NestJS), in addition to having knowledge and practices in my github with Kotlin, Java and Python.</br>

At the moment I'm free, so I'm studying/training and improving my portfolio, to show my skills and even show that I'm able to develop clean and reliable code.</br>
I'm focusing my studies on NodeJS, because it's the technology I have the most experience and experience, but I can work with other back-end technologies such as Golang, elixir or Java.`,
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
                "Notions of  React / Angular2+"]
        }
    },
    contact: {
        title: 'Get in Touch',
        message: "Currently looking for a new opportunity, you can contact me by clicking on the button below.",
        message2: 'Whether you have a question or just want to say hi, feel free to contact me and I’ll try my best to get back to you!',
        contactButtonTitle: 'Contact'
    }
}

export const getData = (isPortuguese) => isPortuguese ? ptLanguage : enLanguage
