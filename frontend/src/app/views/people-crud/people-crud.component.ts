import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-crud',
  templateUrl: './people-crud.component.html',
  styleUrl: './people-crud.component.css'
})
export class PeopleCrudComponent {
  constructor (private router: Router){

	}
  navigateToPeopleCreat(): void{
		this.router.navigate(['/people/create'])
	}
}
