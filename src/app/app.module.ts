import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileDockerComponent } from './mobile-docker/mobile-docker.component';
import { ProfileComponent } from './profile/profile.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AcheivementsComponent } from './acheivements/acheivements.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExComponent } from './work-ex/work-ex.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { UniversityComponent } from './university/university.component';
import { ShowsComponent } from './shows/shows.component';
import { ConnectComponent } from './connect/connect.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileDockerComponent,
    ProfileComponent,
    HobbiesComponent,
    AcheivementsComponent,
    SkillsComponent,
    WorkExComponent,
    ProjectsComponent,
    EducationComponent,
    UniversityComponent,
    ShowsComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
