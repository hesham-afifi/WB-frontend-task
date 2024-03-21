import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersTableComponent } from './users-table/users-table.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'users', pathMatch: 'full' },
  // { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [
  RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  ),
  CommonModule,
  ],
  declarations: [UsersComponent, UsersTableComponent],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
