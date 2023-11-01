import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/dia-01/first-component/first-component.component';
import { CounterComponent } from './components/dia-01/counter/counter.component';
import { ParentDataComponent } from './components/dia-02/parent-data/parent-data.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponentComponent,
    title: "First Component page"
  },
  {
    path: "contador",
    component: CounterComponent,
    title: "Contador page"
  },
  {
    path: 'parent-data',
    component: ParentDataComponent,
    title: "Parent-data page"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
