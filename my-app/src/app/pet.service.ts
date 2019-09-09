import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Pet} from './pet';
import { Observable, of  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  private petUrl = 'http://localhost:3000/animals'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPets(): Observable<any>{
    return this.http.get(`${this.petUrl}`);
  }

  getPet(id: number): Observable<any> {
    return this.http.get(`${this.petUrl}/${id}`);
  }


  
  newPet(pet: Object): Observable<Object> {
    return this.http.post(`${this.petUrl}`, pet);
  }

  updatePet(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.petUrl}/${id}`, value);
  }


  deletePet(id: number): Observable<any> {
    
    return this.http.delete(`${this.petUrl}/${id}`);
  }

}
