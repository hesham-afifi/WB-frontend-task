import { Component, OnInit, Input, OnChanges, OnDestroy } from "@angular/core";
import { User } from "src/app/Core/Models/user.model";
import { UserInputService } from "../../services/user-input.service";

@Component({
  selector: "app-users-table",
  templateUrl: "./users-table.component.html",
  styleUrls: ["./users-table.component.css"],
})
export class UsersTableComponent implements OnChanges {
  @Input() usersData: User[];
  filteredUsersData: User[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private userInputService: UserInputService) {
    this.userInputService.filteredDataSubject.subscribe((users) => {
      this.filteredUsersData = users;
    });
  }

  ngOnChanges() {
    this.filteredUsersData = this.usersData;
  }

  deleteUser(id: number) {
    this.userInputService.deleteUser(id);
  }

  getPaginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUsersData.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  getPageNumbers() {
    const totalPages = Math.ceil(
      this.filteredUsersData.length / this.itemsPerPage
    );
    return Array(totalPages)
      .fill(0)
      .map((x, i) => i + 1);
  }

  onPageChange(pageNumber: number) {
    const totalPages = Math.ceil(
      this.filteredUsersData.length / this.itemsPerPage
    );
    if (pageNumber < 1) {
      this.currentPage = 1;
    } else if (pageNumber > totalPages) {
      this.currentPage = totalPages;
    } else {
      this.currentPage = pageNumber;
    }
  }
}
