import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agents } from '../interfaces/agents';

@Injectable({
  providedIn: 'root'
})
export class AgentserviceService {


  constructor(private http: HttpClient) { }

  getAgentData(){
    return this.http.get<Agents[]>("http://localhost:3000/agents");
  }
}
