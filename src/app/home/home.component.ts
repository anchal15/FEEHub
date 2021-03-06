import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import {Leader} from '../shared/leader';
import { LeaderService } from "../services/leader.service";
import { User } from "../Shared/user";
import { USER } from "../Shared/users";
import { Course } from "../Shared/course";
import { COURSES } from "../Shared/courses";
import { Feature } from "../Shared/feature";
import { FEATURES } from "../Shared/features";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // dish: Dish;
  // promotion: Promotion;
  // leader: Leader;
  user: User = USER[0];
  courses: Course[] = COURSES;
  features: Feature[] = FEATURES;



  constructor(private dishservice: DishService, 
    private promotionservice: PromotionService,
    private leaderservice: LeaderService) { }

  ngOnInit() {
    // this.dish = this.dishservice.getFeaturedDish();
    // this.promotion = this.promotionservice.getFeaturedPromotion();
    // this.leader = this.leaderservice.getFeaturedLeader();
  }

}
