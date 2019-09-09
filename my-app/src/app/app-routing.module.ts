import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { AddPetComponent } from './add-pet/add-pet.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: PetDetailComponent},
  {path: 'add', component: AddPetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
