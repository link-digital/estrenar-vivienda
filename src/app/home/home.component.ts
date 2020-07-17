import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  public response: any;

  constructor(public Service: HomeService) {}

  name_company = 'Estrena Vivienda';
  menu_title_proyects = 'Proyectos';
  menu_title_house_VIS = 'Vivienda VIS';
  menu_title_builders = 'Constructoras';
  menu_title_tools = 'Herramientas';
  menu_title_blog = 'Blog';
  main_title_page = 'Te ayudamos a encontrar tu lugar ideal';
  title_section_list_search = '¿Qué estás buscando?';
  title_section_top_proyects = 'Proyectos destacados';
  title_section_builders = 'Constructoras';
  title_section_blog = 'Blog';
  number_persons = 5;

  ngOnInit(): void {
    $('app-home').foundation();

    /* Método para obtener toda la info del home */
    this.Service.getAllData().subscribe(
      (data) => (this.response = data),
      (err) => console.log(),
      () => {
        if (this.response.successful) {
          /* si responde correctamente */
        }
        if (this.response.error) {
          /* si hay error en la respuesta */
        }
      }
    );
  }
}
