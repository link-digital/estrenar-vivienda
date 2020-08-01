import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsService],
})
export class ProjectsComponent implements OnInit {
  public response_data_project: any;
  public form_filters: FormGroup;

  constructor( public Service: ProjectsService, private formBuilder: FormBuilder ) { }
  dataPath = environment.endpoint;
  cadena = '';
  largo = '';


  ngOnInit() {
    this.createForm();
    $('app-projects').foundation();

    /* Método para obtener toda la info de proyectos */
    this.Service.getData().subscribe(
      (data) => (this.response_data_project = data),
      (err) => console.log(),
      () => {
        if (this.response_data_project) {
          console.log(this.response_data_project.projects_1);
          for (let project of this.response_data_project.projects_1) {
            if (project.url_img) {
              this.largo = project.url_img.length;
              this.cadena = project.url_img.substr(52, this.largo);
              project.url_img = this.dataPath + this.cadena;
            }
          }
          for (let project of this.response_data_project.projects_2) {
            if (project.url_img) {
              this.largo = project.url_img.length;
              this.cadena = project.url_img.substr(52, this.largo);
              project.url_img = this.dataPath + this.cadena;
            }
          }
        }
        /* si responde correctamente */
        if (this.response_data_project.error) {
          /* si hay error en la respuesta */
        }
      }
    );
  }

  createForm() {
    this.form_filters =  this.formBuilder.group({
      type: new FormControl('Seleccione'),
      price: new FormControl('Seleccione'),
      city: new FormControl('Seleccione'),
      zone: new FormControl('Seleccione'),
      sector: new FormControl('Seleccione'),
    });
  }

}
