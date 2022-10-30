import { Injectable } from "@angular/core";
import { Hero } from "../models/Hero";
import { HEROES } from "../models/heros";
import { Observable, of } from "rxjs";
@Injectable({
    providedIn: 'root',
})
export class HeroService {

    getHeros(): Observable<Hero[]> {
    return of(HEROES);
    }
}