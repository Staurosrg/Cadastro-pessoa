import { Component, OnInit } from '@angular/core';
import { People } from '../people.model';
import { PeopleService } from '../people.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
	selector: 'app-people-update',
	templateUrl: './people-update.component.html',
	styleUrl: './people-update.component.css'
})
export class PeopleUpdateComponent implements OnInit{
	people: People

	constructor(private peopleService:PeopleService,
		private router:Router,
		private route: ActivatedRoute){}
	
	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id')
		if (id !== null) {
			this.peopleService.readById(id).subscribe(people => {
				this.people = people;
			});
		}
	}
	updatePeople(): void{
		this.peopleService.update(this.people).subscribe(() => {
			this.peopleService.showMessage("Pessoa editada com sucesso!")
			this.router.navigate(['/peoples'])
		});
	}
	cancel(): void{
		this.router.navigate(['/peoples'])
	}

}
