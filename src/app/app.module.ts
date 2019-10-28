import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './page/member/member.component';
import { TodoComponent } from './page/todo/todo.component';
import { HomeComponent } from './page/home/home.component';
import { NavBarComponent } from './component/layout/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    TodoComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
