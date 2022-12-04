import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServerHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'my-auth-token'
    })
  };
  private REST_API_SERVER = 'http://localhost:3000';
  
  constructor(private httpCLient: HttpClient) { }

  public getProfile(): Observable<any>{
    const url = `${this.REST_API_SERVER}/profile`;
    return this.httpCLient.get<any>(url,this.httpOptions)
    .pipe(catchError(this.handlerError));
  }
  public getComment(){
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpCLient.get<any>(url,this.httpOptions)
    .pipe(catchError(this.handlerError));
  }

  public getPosts(){
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpCLient.get<any>(url,this.httpOptions)
    .pipe(catchError(this.handlerError));
  }

  public addPost(data:any){
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpCLient.post<any>(url,data,this.httpOptions)
    .pipe(catchError(this.handlerError));
  }

  private handlerError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred: ', error.error.message);
    }else{
      console.error(
        `Backend return code ${error.status},` + ` body was: ${error.error}`
      );
    }
    return throwError('Somthing bad happened; please try again later.');
  }
}
