import { Component, OnInit } from '@angular/core';
import { People } from '../people.model';
import { PeopleService } from '../people.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-people-delete',
  templateUrl: './people-delete.component.html',
  styleUrl: './people-delete.component.css'
})
export class PeopleDeleteComponent implements OnInit{
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
	deletePeople(): void{

		console.log(this.people.id)
		// this.peopleService.delete(this.people.id).subscribe(() => {
		// 	this.peopleService.showMessage("Pessoa excluida com sucesso!")
		// 	this.router.navigate(['/peoples'])
		// });
	}
	cancel(): void{
		this.router.navigate(['/peoples'])
	}
}
