import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes,RouterModule, Router} from '@angular/router'
import { FormsModule } from '@angular/forms';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './mainpage/header/header.component';
import { ContentComponent } from './mainpage/content/content.component';
import { TaskComponent } from './mainpage/content/task/task.component';

import {MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatToolbarModule
,MatCardModule,MatCheckboxModule,MatExpansionModule} from '@angular/material';
import { FiltersComponent } from './mainpage/content/filters/filters.component';

const appRoutes: Routes =
[
  {path: '',component: LoginpageComponent},
  {path: 'home',component:MainpageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    MainpageComponent,
    HeaderComponent,
    ContentComponent,
    TaskComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
