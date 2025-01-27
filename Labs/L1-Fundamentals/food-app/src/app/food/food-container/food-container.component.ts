import { Component, OnInit } from "@angular/core";
import { FoodService } from "../food.service";
import { FoodItem } from "../foodItem";

@Component({
  selector: "app-food-container",
  templateUrl: "./food-container.component.html",
  styleUrls: ["./food-container.component.scss"],
})
export class FoodContainerComponent implements OnInit {
  food: FoodItem[];
  selected: FoodItem;

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.fs.getFood().subscribe((data) => (this.food = data));
  }

  selectFood(f: FoodItem) {
    this.selected = f;
  }

  foodSaved(f: FoodItem) {
    this.food = this.food.filter((f) => f.id != f.id);
    this.food.push(f);
  }
}
