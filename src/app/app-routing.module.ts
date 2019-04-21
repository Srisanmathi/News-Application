import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { NewsComponent } from './news/news.component';  
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  {
    path: '',
    component:NewsComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent
  },
  {
    path:'posts',
    component:PostsComponent
  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'users',
    component:UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
