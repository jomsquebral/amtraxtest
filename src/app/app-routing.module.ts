import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsComponent } from './agents/agents.component';

const routes: Routes = [
  { path: '', redirectTo: 'agents', pathMatch: 'full' },
  { path: "agents", component: AgentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
