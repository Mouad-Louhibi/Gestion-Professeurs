import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfFormComponent } from './components/prof-form/prof-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ProfesseurService } from './services/professeur.service';
import { ListProfComponent } from './components/list-prof/list-prof.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EditProfComponent } from './components/edit-prof/edit-prof.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartComponent } from './components/dashboard/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfFormComponent,
    ListProfComponent,
    MainPageComponent,
    EditProfComponent,
    StatisticComponent,
    DashboardComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProfesseurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
