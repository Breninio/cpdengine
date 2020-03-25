import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Projects} from 'src/app/project';
import { HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class AddprojectService {
  url = 'http://127.0.0.1:5000/new';
  private handleError: HandleError;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AddProjectService');
  }

  /*addProject(project: Projects) {
    console.warn(project);
    this.http.post<any>(this.url, project);
    console.warn("sent across to flask")

  }*/
  addProject(project: Projects): Observable<Projects> {
    return this.http.post<Projects>(this.url, project, this.httpOptions)
      .pipe(
        catchError(this.handleError('addProject', project))
      );
  }
}
