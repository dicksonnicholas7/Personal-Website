import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { EducationComponent } from './education/education.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectCounterComponent } from './project-counter/project-counter.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioControllerButtonsComponent } from './portfolio-controller-buttons/portfolio-controller-buttons.component';
import { ContactComponent } from './contact/contact.component';
import { TopPageComponent } from './top-page/top-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    EducationComponent,
    ResumeComponent,
    PortfolioComponent,
    ProjectCounterComponent,
    FooterComponent,
    PortfolioControllerButtonsComponent,
    ContactComponent,
    TopPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
