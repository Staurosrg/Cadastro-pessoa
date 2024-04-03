import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { PeopleService } from '../people.service';
import { People } from '../people.model';

@Component({
	selector: 'app-people-create',
	templateUrl: './people-create.component.html',
	styleUrl: './people-create.component.css'
})
export class PeopleCreateComponent implements OnInit {

	people: People = {
		name: '',
		cpf: null,
		data_nasc: null
	}
	constructor(private peopleService:PeopleService,
		private router:Router){}
	ngOnInit(): void {
		
	}
	createPeople(): void{
		this.peopleService.create(this.people).subscribe(() =>{
			this.peopleService.showMessage('Pessoa criada com sucesso')
			this.router.navigate(['/peoples'])
		})
	}
	cancel(): void{
		this.router.navigate(['/peoples'])
	}
}
