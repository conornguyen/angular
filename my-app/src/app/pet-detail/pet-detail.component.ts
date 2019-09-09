import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../pet'
import { PetService } from '../pet.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NumberValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {

  pet: Pet;
  submitted = false;
  id = + this.route.snapshot.paramMap.get('id');


  constructor(private route: ActivatedRoute,
    private petService: PetService,

    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPet()
    
  }

  getPet(): void{  
    this.petService.getPet(this.id)
    .subscribe(pet => this.pet = pet);
  }
  goBack(): void {
    this.location.back();
  }

  edit() {  
    this.petService.updatePet(this.id ,this.pet)
      .subscribe();
  }

  onSubmit() {
    this.submitted = true;
    this.edit();    
  }


}
