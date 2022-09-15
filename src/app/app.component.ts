import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS } from './users';
import { TranslationValue, User } from './interfaces';
import { LABELS } from './labels';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  lang: string = '';
  user: User | undefined;
  users!: { value: string; label: string }[];
  username: string = 'danielboggiano';
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
  ];
  profileTitle = {
    es: 'Perfil',
    en: 'Profile',
  };
  habilitiesTitle = {
    es: 'Habilidades',
    en: 'Habilities',
  };
  personalDataTitle = {
    es: 'Datos Personales',
    en: 'Personal Data',
  };
  aboutMeTitle = {
    es: 'Sobre Mí',
    en: 'About Me',
  };
  contactTitle = {
    es: 'Contacto',
    en: 'Contact',
  };
  languagesTitle = {
    es: 'Lenguajes',
    en: 'Languages',
  };
  dataBaseTitle = {
    es: 'BBDD',
    en: 'Databases',
  };
  managementTitle = {
    es: 'Gestión',
    en: 'Management',
  };
  employmentTitle = {
    es: 'Historial de Empleo',
    en: 'Employment History',
  };
  educationTitle = {
    es: 'Educación',
    en: 'Education',
  };
  certificateTitle = {
    es: 'Certificados',
    en: 'Certificates',
  };
  referenceTitle = {
    es: 'Referencias',
    en: 'References',
  };
  viewTag = {
    es: 'ver',
    en: 'view',
  };
  currentYear: number = new Date().getFullYear();
  LABELS!: { [key: string]: TranslationValue };

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.getParams();
    this.users = this.usersService.getUsersList()
    this.LABELS = LABELS;
  }

  getTranslation(html: any) {
    return html[this.lang];
  }

  getParams() {
    this.route.queryParams.subscribe((p) => {
      this.lang = p.lang || 'es';
      this.user = this.usersService.getUserData(p.username);
    });
  }
}
