import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {PetService} from '../pet.service';
import {Pet} from '../pet';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router,
    private route: ActivatedRoute,
    private petService : PetService) { }
  id = + this.route.snapshot.paramMap.get('id');

  pets: Pet[];

  ngOnInit() {
    this.getPets();

  }


  getPets(): void {
    this.petService.getPets()
    .subscribe(pet => this.pets = pet);
  }

  
  deletePet(id: number) {
    this.petService.deletePet(id)
      .subscribe( );
      
  }

}
