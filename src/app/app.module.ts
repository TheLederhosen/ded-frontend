import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {OverviewComponent} from './components/overview/overview.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ListViewComponent} from './components/list-view/list-view.component';
import {StatisticsViewComponent} from './components/statistics-view/statistics-view.component';
import {CreateComponent} from './components/create/create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {GaugeModule} from 'angular-gauge';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BargraphComponent} from './components/statistics-view/bargraph/bargraph.component';
import {LinegraphComponent} from './components/statistics-view/linegraph/linegraph.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OverviewComponent,
    ListViewComponent,
    StatisticsViewComponent,
    CreateComponent,
    BargraphComponent,
    LinegraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    GaugeModule.forRoot(),
    NgxChartsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
