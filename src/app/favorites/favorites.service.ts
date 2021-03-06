import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  public endpoint: string;
  public dataPath: string;
  public endpointFilter: string;

  constructor( private http: Http ) {
    this.endpoint = environment.endpointApi + 'favorites/';
    this.dataPath = environment.endpointTestingApi+ 'typologies?items_per_page=12&page=0&id=';
    this.endpointFilter = environment.endpointSearchApi;
   }


  /* Traer info al comparador*/
  favoriteData( params: any ): Observable<any> {
    console.log(this.dataPath + params);
    return this.http.get(this.dataPath + params)
    .pipe(map(( response => response.json() )));
  }
  /* Traer toda la info de proyectos */
  getData(): Observable<any> {
    return this.http.get(this.dataPath)
    .pipe(map(( response => response.json() )));
  }

  /* Traer proyectos filtrados */
	getDataFilter( params:any ): Observable<any>{
		return this.http.get(this.endpointFilter + params)
    .pipe(map(( response => response.json() )));
	}
}
