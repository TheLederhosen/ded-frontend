import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './components/overview/overview.component';
import {StatisticsViewComponent} from './components/statistics-view/statistics-view.component';
import {ListViewComponent} from './components/list-view/list-view.component';
import {CreateComponent} from './components/create/create.component';

const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'stats', component: StatisticsViewComponent},
  {path: 'list', component: ListViewComponent},
  {path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
