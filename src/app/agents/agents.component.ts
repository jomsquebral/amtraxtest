import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AgentserviceService } from '../services/agentservice.service';
import { Agents } from 'src/app/interfaces/agents';


@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatCardModule, MatButtonModule],
})
export class AgentsComponent {
  
  agentslist!: Agents[]; 
  dataSource : any;
  displayedColumns: string[] = ["id", "name", "email", "gender"];

  @ViewChild(MatPaginator) paginator = MatPaginator;
  @ViewChild(MatSort) sort = MatSort;

  constructor(private service: AgentserviceService) {
    this.service.getAgentData().subscribe(res=> {
      this.agentslist = res;
      this.dataSource = new MatTableDataSource<Agents>(this.agentslist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      // console.log(res);
      // this.agentlist = res;
      // // console.log(res.agents);
      // // this.dataSource = res;

      // // const agentlist :Agents[] = [];

      // this.dataSource = new MatTableDataSource<Agents>();
      // // console.log(this.dataSource);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    });

  }

  FilterChange(data : Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }





}
