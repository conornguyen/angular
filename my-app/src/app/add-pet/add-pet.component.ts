import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PetService } from '../pet.service';
import {Pet} from '../pet';
@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {

  constructor(private location: Location,
    private petService: PetService) { }

  pet: Pet = new Pet();
  submitted = false;



  ngOnInit() {
  }


  goBack(): void {
    this.location.back();
  }

  add() {
    this.petService.newPet(this.pet)
      .subscribe();
  }

  onSubmit() {
    this.submitted = true;
    this.add();    
  }


}
