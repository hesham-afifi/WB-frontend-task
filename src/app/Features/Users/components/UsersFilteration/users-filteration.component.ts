import { Component, OnInit, DoCheck, AfterViewChecked } from "@angular/core";
import { UserInputService } from "../../services/user-input.service";

@Component({
  selector: "app-users-filteration",
  templateUrl: "./users-filteration.component.html",
  styleUrls: ["./users-filteration.component.css"],
})
export class UsersFilterationComponent {
  searchValue = "";
  dateValue;

  constructor(private userInputService: UserInputService) {}

  getUserInput() {
    this.userInputService.searchByFirstName(this.searchValue);
  }

  onDateChange(date: any) {
    this.userInputService.filterByDate(this.formatDate(date));
  }

  formatDate(date: any): any {
    const arr = [];
    for (let i in date) {
      const formattedDate = new Date(date[i]);
      const year = formattedDate.getFullYear();
      const month = formattedDate.getMonth() + 1;
      const day = formattedDate.getDate();
      arr.push(`${year}-${month}-${day}`);
    }
    return arr;
  }
}
