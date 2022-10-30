import { Component,Input } from "@angular/core";
import { Hero } from "../models/Hero";

@Component({
    selector: 'hero-detail',
    templateUrl: './heroDetail.component.html',
    styleUrls: ['./heroDetail.component.scss'],
})
export class HeroDetail {
@Input() selectedHero?:Hero;

}