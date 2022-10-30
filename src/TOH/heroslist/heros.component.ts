import { Component, OnInit } from "@angular/core";
import { Hero } from "../models/Hero";
import { HEROES } from "../models/heros";
import { HeroService } from "../services/heros.service";
@Component({
    selector: 'heros',
    templateUrl: 'heros.component.html',
    styleUrls: ['./heros.component.scss']
})
export class Heros implements OnInit {
    heros: Hero[] = HEROES;
    selectedHero?: Hero;
    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.getHeros();
    }

    getUserDetails(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeros(): void {
        this.heroService.getHeros().subscribe((heros) => this.heros = heros);
    }

}