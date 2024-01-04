import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CommunityComponent } from './components/community/community.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { AccordionCommunityComponent } from './components/accordion-community/accordion-community.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoardSliderComponent } from './components/board-slider/board-slider.component';
import { HomeNavComponent } from './components/home-nav/home-nav.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { AssessnyMessagesSliderComponent } from './components/assessny-messages-slider/assessny-messages-slider.component';
import { TeacherMsgsSliderComponent } from './components/teacher-msgs-slider/teacher-msgs-slider.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashNavbarComponent } from './components/dashboard/dash-navbar/dash-navbar.component';
import { SideNavComponent } from './components/dashboard/side-nav/side-nav.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { ExamComponent } from './components/dashboard/exam/exam.component';
import { VideoComponent } from './components/dashboard/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CommunityComponent,
    AboutComponent,
    HeaderComponent,
    AccordionCommunityComponent,
    FooterComponent,
    BoardSliderComponent,
    HomeNavComponent,
    HomeFooterComponent,
    AssessnyMessagesSliderComponent,
    TeacherMsgsSliderComponent,
    RegisterComponent,
    DashboardComponent,
    DashNavbarComponent,
    SideNavComponent,
    MainComponent,
    ExamComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
