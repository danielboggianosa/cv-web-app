import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Hability {
  name: string,
  icon: string
}

export interface MultiLanguage {
  es: string,
  en?: string,
  fr?: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lang: string = 'es';
  months = [
    { es: '', en: '' },
    { es: 'enero', en: 'january' },
    { es: 'febrero', en: 'february' },
    { es: 'marzo', en: 'march' },
    { es: 'abril', en: 'april' },
    { es: 'mayo', en: 'may' },
    { es: 'junio', en: 'june' },
    { es: 'julio', en: 'july' },
    { es: 'agosto', en: 'august' },
    { es: 'septiembre', en: 'september' },
    { es: 'octubre', en: 'october' },
    { es: 'noviembre', en: 'november' },
    { es: 'diciembre', en: 'december' },
  ]
  profileTitle = {
    es: 'Perfil',
    en: 'Profile',
  }
  habilitiesTitle = {
    es: 'Habilidades',
    en: 'Habilities',
  }
  personalDataTitle = {
    es: 'Datos Personales',
    en: 'Personal Data'
  }
  aboutMeTitle = {
    es: 'Sobre Mí',
    en: 'About Me'
  }
  contactTitle = {
    es: 'Contacto',
    en: 'Contact'
  }
  languagesTitle = {
    es: 'Lenguajes',
    en: 'Languages'
  }
  dataBaseTitle = {
    es: 'BBDD',
    en: 'Databases'
  }
  managementTitle = {
    es: 'Gestión',
    en: 'Management'
  }
  employmentTitle = {
    es: 'Historial de Empleo',
    en: 'Employment History'
  }
  educationTitle = {
    es: 'Educación',
    en: 'Education'
  }
  certificateTitle = {
    es: 'Certificados',
    en: 'Certificates'
  }
  referenceTitle = {
    es: 'Referencias',
    en: 'References'
  }
  viewTag = {
    es: 'ver',
    en: 'view'
  }
  userName = 'Daniel Boggiano Sáenz';
  userProfession = { es: 'Desarrollador Full Stack', en: 'Front End Developer' };
  userPicture = '/assets/daniel-boggiano.jpg';
  mainHabilities: Array<Hability> = [
    { name: 'Angular', icon: 'devicon-angularjs-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'NodeJs', icon: 'devicon-nodejs-plain' },
    { name: 'PHP', icon: 'devicon-php-plain' },
    { name: 'CSharp', icon: 'devicon-csharp-plain' },
  ]
  profileDescription = {
    es: `Desarrollador de software experimentado, experto en diseño, instalación, prueba y mantenimiento de sistemas de software. Equipado con un conjunto de habilidades diverso y prometedor. Competente en diversas plataformas, lenguajes y sistemas integrados. Experiencia con las últimas herramientas y procedimientos de desarrollo de vanguardia. Capaz de autogestionarse eficazmente durante proyectos independientes, así como de colaborar como parte de un equipo productivo.`,
    en: `Experienced Front End Software Developer adept to bringing forth expertise in design, more than 3 years working with Angular, installation, testing and maintenance of software systems. Equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and embedded systems. Experienced with the latest cutting Edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.​`
  };
  birthday = { es: '6 de marzo de 1987', en: 'March 6, 1987' };
  age = { es: '35 años', en: '35 years old' };
  nationality = { es: 'peruano', en: 'peruvian' };
  location = 'San Miguel, Lima, Peru';
  phone = '+51 991885514'
  email = 'dev@danielboggiano.com';
  github = '/danielboggianosa';
  languages = [
    { nombre: { es: 'Español', en: 'Spanish' }, nivel: 100, color: 'success' },
    { nombre: { es: 'Inglés', en: 'English' }, nivel: 100, color: 'success' },
    { nombre: { es: 'Portugués', en: 'Portugese' }, nivel: 75, color: 'primary' },
    { nombre: { es: 'Francés', en: 'French' }, nivel: 50, color: 'primary' },
    { nombre: { es: 'Italiano', en: 'Italian' }, nivel: 50, color: 'primary' },
    // {nombre: 'Alemán', nivel: 25, color: 'warning'}
  ];
  lenguajes = [
    { nombre: 'Javascript', nivel: 100, color: 'success' },
    { nombre: 'Typescript', nivel: 100, color: 'success' },
    { nombre: 'PHP', nivel: 75, color: 'success' },
    { nombre: 'C#', nivel: 50, color: 'primary' },
    { nombre: 'Java', nivel: 25, color: 'primary' },
  ];
  frameworks = [
    { nombre: 'Angular', nivel: 100, color: 'success' },
    { nombre: 'React', nivel: 75, color: 'success' },
    { nombre: 'Node Js', nivel: 100, color: 'success' },
    { nombre: 'Vue', nivel: 50, color: 'primary' },
    { nombre: 'React Native', nivel: 50, color: 'primary' },
  ];
  bases = [
    { nombre: 'MySQL', nivel: 100, color: 'success' },
    { nombre: 'DynamoDB', nivel: 100, color: 'success' },
    { nombre: 'PostgreSQL', nivel: 75, color: 'success' },
    { nombre: 'SQL Server', nivel: 75, color: 'success' },
    { nombre: 'MongoDB', nivel: 75, color: 'success' },
  ]
  gestion = [
    { nombre: 'SCRUM', nivel: 75, color: 'success' },
    { nombre: 'KANBAN', nivel: 75, color: 'success' },
    { nombre: 'JIRA', nivel: 75, color: 'success' },
    { nombre: 'ZOHO CRM', nivel: 75, color: 'success' },
  ]
  empleos = [
    {
      cargo: {
        es: 'Senior Web UI Developer',
        en: 'Senior Web UI Developer'
      },
      empresa: 'Globant Peru',
      ciudad: 'Lima',
      inicio: { month: 11, year: 2021 },
      fin: { month: 4, year: 2022 },
      descripcion: {
        es: [
          'Trabajar de manera productiva con el equipo de desarrollo a través de metodologías ágiles para comprender los requisitos y las especificaciones comerciales.',
          'Cambios y alteraciones de software codificados de manera efectiva basados en instrucciones de diseño específicas.',
          'Trabajé con distintos frameworks y librerías de terceros para el desarrollo de aplicaciones web.',
          'Tales como: Angular, React, Vue Js, Next JS, Nuxt JS',
          'Tecnologías de la nube: AWS, Azure, Firebase, Google Cloud',
        ],
        en: [
          'Working productively with the Development Team, using agile methodologies to understand the requirements and commercial specifications',
          'Effectively coded software changes and alterations based on specific design specifications.​',
          'I worked with different frameworks and third party libraries to develop web applications.',
          'Such as: Angular, React, Vue Js, Next JS, Nuxt JS',
          'Cloud technologies: AWS, Azure, Firebase, Google Cloud',
        ]
      },
    },
    {
      cargo: {
        es: 'Ingeniero de Software Senior (Frontend)',
        en: 'Senior Software Engineer (Frontend)'
      },
      empresa: 'Distillery',
      ciudad: 'Lima',
      inicio: { month: 7, year: 2021 },
      fin: { month: 10, year: 2021 },
      descripcion: {
        es: [
          'Trabajar de manera productiva con el equipo de desarrollo a través de metodologías ágiles para comprender los requisitos y las especificaciones comerciales.',
          'Cambios y alteraciones de software codificados de manera efectiva basados en instrucciones de diseño específicas.',
          'Desarrollo de front-end con Angular.',
        ],
        en: [
          'Working productively with the Development Team, using agile methodologies to understand the requirements and commercial specifications',
          'Effectively coded software changes and alterations based on specific design specifications.​',
          'Front end development with Angular​',
        ]
      },
    },
    {
      cargo: {
        es: 'Systems Engineer III (Backend)',
        en: 'Systems Engineer III (Backend)'
      },
      empresa: 'Indra Company',
      ciudad: 'Lima',
      inicio: { month: 5, year: 2021 },
      fin: { month: 7, year: 2021 },
      link: 'https://utpedupe-my.sharepoint.com/:b:/g/personal/1011316_utp_edu_pe/EQIYzEd0SO1NlTEIeYPusicBd5hHcL3UL_ZZcksdqjsFKA?e=a9XUiw',
      descripcion: {
        es: [
          'Trabajar de manera productiva con el equipo de desarrollo a través de metodologías ágiles para comprender los requisitos y las especificaciones comerciales en torno a la cotización y emision de seguros de vida vía web.',
          'Cambios y alteraciones de software codificados de manera efectiva basados en instrucciones de diseño específicas.',
          'Desarrollo de back-end con Node Js y Serverless Framework.',
          'Gestión de base de datos: DynamoDB y Mysql',
          'Almacenamiento: Amazon S3 a través de CLI y mediante programación.',
          'Otros Sevicios AWS: EC2, ApiGateway, Lambda, Cloudwatch, Cognito',
        ],
        en: [
          'Working productively with the Development Team, using agile methodologies to understand the requirements and commercial specifications around life and car ensurance products',
          'Effectively coded software changes and alterations based on specific design specifications.​',
          'Back end development with Node Js and Serverless Framework​',
          'Database management: DynamoDB and Mysql',
          'Storage: Amazon S3 via CLI and programmatically​',
          'Other AWS services as: EC2, ApiGateway, Lambda Functions, Cloudwathc, SNS, Cognito, SES',
        ]
      },
    },
    {
      cargo: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
      empresa: 'IT Data Consulting',
      ciudad: 'Lima',
      inicio: { month: 3, year: 2021 },
      fin: { month: 5, year: 2021 },
      link: 'https://utpedupe-my.sharepoint.com/:b:/g/personal/1011316_utp_edu_pe/EY07Ph9fb4dIpBH5-ASKrhMBd1zueOt5RnG1MKwl8u6lTw?e=2Oif8A',
      descripcion: {
        es: [
          'Trabajar de manera productiva con el equipo de productos para comprender los requisitos y las especificaciones comerciales en torno a la gestión de carteras, análisis y riesgos.',
          'Cambios y alteraciones de software codificados de manera efectiva basados en especificaciones de diseño específicas.',
          'Desarrollo de front-end con React',
          'Desarrollo de back-end con Node Js, Sequelize, Express.',
          'Desarrollo móvil con React Native y Java',
          'Gestión y creación de Docker Containers',
          'Gestión de base de datos: PostgreSQL',
          'Almacenamiento: Amazon S3 a través de CLI y mediante programación'
        ],
        en: [
          'Working productively with Product Team to understand requirements and business specifications around Portfolio Management, Analytics and Risk.​',
          'Effectively coded software changes and alterations based on specific design specifications.​',
          'Front end development with React​',
          'Back end development with Node Js, Sequelize, Express.​',
          'Mobile development with React Native and Java​',
          'Database management: PostgreSQL​',
          'Storage: Amazon S3 via CLI and programmatically​',
        ]
      }
    },
    {
      cargo: {
        es: 'Desarrollador Full Stack',
        en: 'Front End Developer'
      },
      empresa: 'Panacea Consultores',
      ciudad: 'Lima',
      inicio: { month: 2, year: 2019 },
      fin: { month: 2, year: 2021 },
      descripcion: {
        es: [
          'Cambios y alteraciones de software codificados basados en especificaciones de diseño.',
          'Trabajé con éxito a nivel independiente, al mismo tiempo que se desempeñaba como un colaborador eficaz y entusiasta.',
          'Tareas de prueba automatizadas y desarrollé funciones complejas de forma rutinaria.',
          'Desarrollo de front-end con Angular y React',
          'Desarrollo de back-end con Node Js, Sequelize, Express, Mongoose',
          'Gestión de bases de datos: MongoDB y MySQL',
        ],
        en: [
          'Effectively coded software changes and alterations based on specific design specifications.​',
          'Successfully worked at an independent level, while also serving as an effective and enthusiastic collaborator.',
          'Performed automated testing tasks and developed complex features routinely.',
          'Front end development with Angular and React​',
          'Back end development with Node Js, Sequelize, Express.',
          'Database management: MongoDB and MySQL​',
        ]
      }
    },
    {
      cargo: { es: 'Empresario', en: 'Business Owner' },
      empresa: 'Pasajeros Del Mundo S.A.C.',
      ciudad: 'Lima',
      inicio: { month: 12, year: 2015 },
      fin: { month: 3, year: 2021 },
      descripcion: {
        es: [
          'Exploré con éxito la gestión empresarial, las negociaciones, las estrategias de marketing, las finanzas y la gestión de la cadena de suministro.',
          'Dirigí una agencia de viajes en Lima que se encargaba de gestionar las solicitudes de viajes de los clientes para el turismo en Perú y también otros destinos fuera del país.',
          'Desarrollo de habilidades de resolución de problemas de alto nivel.',
          'Desarrollé sitios web de Wordpress para fines de marketing.',
          'Implementé con éxito CRM en wordpress usando PHP como lenguaje de programación y MySQL como base de datos.',
          'Implementé con éxito un servidor web y de correo en Ubuntu Linux usando un VPS Digital Ocean.'
        ],
        en: [
          'Successfully Explored business management, negotiations, marketing strategies, finances and supply chain management.',
          'Directed a travel agency in Lima which was responsible of managing customer travel requests for tourism in Peru and also other destinations outside the country.​',
          'Developed high level problem resolutions skills. ',
          'Developed Wordpress websites for marketing porpuses.​',
          'Successfully implemented CRM in wordpress using PHP as a programming language and MySQL as database.​',
          'Successfully implemented a web and mail server on Ubuntu Linux using a Digital Ocean VPS.​'
        ]
      }
    },
    {
      cargo: { es: 'NOC Engineer', en: 'NOC Engineer' },
      empresa: 'BT Latam',
      ciudad: 'Lima',
      inicio: { month: 4, year: 2012 },
      fin: { month: 12, year: 2014 },
      descripcion: {
        es: [
          'Resolví eficazmente los problemas de la red de datos como parte de un equipo para diferentes empresas que operaban en BT Services',
          'Realicé una rápida resolución de problemas de última milla y problemas en el sitio para restaurar las conexiones cuando se perdieron.',
          'Realicé configuraciones y pruebas remotas a través de CLI de enrutadores y conmutadores.',
          'Experiencia adquirida a nivel de usuario de MySharePoint , Active Directory , Citrix, Solarwings , Vantive y Expedio'
        ],
        en: [
          'Effectively solved data network problems as part of a team for different companies which operated on BT Services.​',
          'Performed rapid troubleshooting last mile and on site issues to restore connections when they were lost.​',
          'Performed remote configuration and tests via CLI of routers and switches.​',
          'Acquired user level experience of MySharePoint, Active Directory, Citrix, Solarwings, Vantive and Expedio.​'
        ]
      }
    },
  ];
  estudios = [
    { titulo: 'Ingeniería Electrónica', institucion: 'Universidad Tecnológica del Perú', ciudad: 'Lima', inicio: { month: 1, year: 2010 }, fin: { month: 12, year: 2012 } },
    { titulo: 'Traducción de Idiomas', institucion: 'Headway College', ciudad: 'Lima', inicio: { month: 3, year: 2005 }, fin: { month: 12, year: 2007 } },
    // { titulo: 'Secundaria', institucion: 'G.U.E. José Granda', ciudad: 'Lima', inicio: '1999', fin: '2003' },
  ];
  referencias = [
    { nombre: 'Micaela Carrión', empresa: 'Globant Peru', email: 'micaela.carrion@globant.com' },
    { nombre: 'Ana Canuto', empresa: 'Distillery', email: 'ana.canuto@distillery.com' },
    { nombre: 'Ricardo Vilchez', empresa: 'Rimac Seguros', telefono: '+51 995 981 202' },
    { nombre: 'Frank Yupanki', empresa: 'Indra Company', telefono: '+51 954 161 870' },
    { nombre: 'Kevin Martel', empresa: 'IT Data Consulting', telefono: '+51 959 218 801' },
    { nombre: 'Ivan Navarro', empresa: 'Panacea Consultores', telefono: '+51 996 499 845' },
    { nombre: 'Alfredo Matías', empresa: 'CBE Industrial', telefono: '+51 972 138 691' },
  ];
  certificaciones = [
    {
      titulo: 'Angular Intermediate',
      fecha: { month: 8, year: 2021 },
      codigo: 'b447a9a33075',
      link: 'https://www.hackerrank.com/certificates/b447a9a33075'
    },
    {
      titulo: 'C# Intermediate: Clases, Interfaces and OOP',
      fecha: { month: 8, year: 2021 },
      codigo: 'UC-1e6eeb87-4e1d-4d70-afbe-3349c67b1482',
      link: 'https://ude.my/UC-1e6eeb87-4e1d-4d70-afbe-3349c67b1482'
    },
    {
      titulo: 'C# Basics for Beginners: Learn C# Fundamentals by Coding',
      fecha: { month: 7, year: 2021 },
      codigo: 'UC-ee616c36-c0e9-4897-a90a-cbaf9963b0ed',
      link: 'https://ude.my/UC-ee616c36-c0e9-4897-a90a-cbaf9963b0ed'
    },
    {
      titulo: 'Serverless en Español con AWS y Serverless Framework',
      fecha: { month: 6, year: 2021 },
      codigo: 'UC-e92f2975-8157-4d3b-a0a8-d5d5f16624a5',
      link: 'https://ude.my/UC-e92f2975-8157-4d3b-a0a8-d5d5f16624a5'
    },
    {
      titulo: 'Node JS: APIs Poderosas con TypeScript + Repository Pattern',
      fecha: { month: 6, year: 2021 },
      codigo: 'UC-3f026bdf-382e-420a-903c-0e20d669f76b',
      link: 'https://ude.my/UC-3f026bdf-382e-420a-903c-0e20d669f76b'
    },
    {
      titulo: 'SCRUM con JIRA - Metodología Agile',
      fecha: { month: 6, year: 2021 }, codigo:
        'UC-3856a987-668a-4436-881e-333117d8896f',
      link: 'https://ude.my/UC-3856a987-668a-4436-881e-333117d8896f'
    },
    {
      titulo: 'Clean Code',
      fecha: { month: 5, year: 2021 },
      codigo: 'UC-4a0d8efd-8fc3-4c45-9e23-e73fe24ba7d6',
      link: 'https://ude.my/UC-4a0d8efd-8fc3-4c45-9e23-e73fe24ba7d6'
    },
    {
      titulo: 'CCNA Routing and Switching, Cisco',
      fecha: { month: 9, year: 2016 },
      codigo: 'CSCO12382578',
      link: 'https://utpedupe-my.sharepoint.com/:i:/g/personal/1011316_utp_edu_pe/EaC3FXMXmp9BoR_lYRuqbrgBOAyzm_wnPeclWqz7WgvXGA?e=NZzJ6m'
    },
    {
      titulo: 'Lector de Alto Rendimiento',
      fecha: { month: 4, year: 2016 },
      codigo: '',
      link: 'https://utpedupe-my.sharepoint.com/:i:/g/personal/1011316_utp_edu_pe/EST0F4uM5YJEgztqYNUIOjIBhMGWNOpqR_YuXZlsrRMa5w?e=tK4s9M'
    },
    {
      titulo: 'ITIL Foundation V3',
      fecha: { month: 9, year: 2014 },
      codigo: '515532.20317386',
      link: 'https://utpedupe-my.sharepoint.com/:i:/g/personal/1011316_utp_edu_pe/Ea_GeCv79_ROplZnCMJoH6MBxy0hpuQaqFtX9cPuuvx5PA?e=BuM23L'
    },
    {
      titulo: 'DELF B2',
      fecha: { month: 8, year: 2007 },
      codigo: '051014007570',
      link: 'https://utpedupe-my.sharepoint.com/:i:/g/personal/1011316_utp_edu_pe/EQRTwIrp2sFNjNtEhM8O_0UB2CW13v70fe0XvBSyYk2b2g?e=18ktlt'
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getLanguage()
  }

  getTranslation(html: any) {
    return html[this.lang]
  }

  async getLanguage() {
    await this.route.queryParams.subscribe(p => {
      this.lang = p.lang
    })
  }
}
