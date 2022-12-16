import { Component, OnInit } from '@angular/core';
import {Apollo,gql} from 'apollo-angular';
import {GET_LAUNCHES} from '../../graphql/graphquery';
import { Subscription } from 'rxjs'
import { Core, Core2, FirstStage, Launch, LaunchSite, Links, Rocket, SecondStage, Ship } from 'src/app/models/Launch';
import { core } from '@angular/compiler';



@Component({
  selector: 'app-launches-comps',
  templateUrl: './launches-comps.component.html',
  styleUrls: ['./launches-comps.component.css']
})
export class LaunchesCompsComponent implements OnInit {
  launches: Launch[] = [];
  loading = true
  error: any

  constructor(private apollo: Apollo) {}
 
  ngOnInit(): void {
    /*I used a static variable (Startlink-11) which will should be dynamic on the final code*/
    this.apollo.query<any>({
        query:GET_LAUNCHES,
        variables: {name : "Starlink-11"}
      }).subscribe(({data , loading}) => {
        this.launches = data.launchesPast;
        
      })
  }

  
  getLink(link:Links):string 
  {
    return "Article_link : " +link.article_link + "<br>" +"Video_link : "+ link.video_link
  }

  getShips(ships:Ship[]):string
  {
    let final=""
    ships.forEach((ship)=>{
      final += "Name : "+ship.name + "<br>" +"Home_port : "+ ship.home_port + "<br>" + "Image : "+ ship.image +"<br><br>" 
    }
    )
    return final
  }

  getLaunchSite(launch_site:LaunchSite):string
  {
    return launch_site.site_name_long
  }

  getCore2(core2:Core2):string
  {
    return core2.reuse_count+"<br>" +core2.status
  }
  getCore(core:Core):string
  {
    return "Flight : "+ core.flight +"<br>" + "Core : "+this.getCore2(core.coreInterne)
  }

  getFirstStage(first_stage:FirstStage):string{
    let finalStage=""
    first_stage.cores.forEach((core)=>{
      finalStage += core.flight + "<br>" 
    }
    )
    return finalStage
  }

  getSecondStage(second_stage:SecondStage):string
  {
    let finalStage2=""
    second_stage.payloads.forEach((Payload)=>{
      finalStage2 += "Payload : "+ Payload.payload_type + "<br>" +"Payload_mass_kg : "+ Payload.payload_mass_kg + "<br>" +"payload_mass_lbs : "+ Payload.payload_mass_lbs + "<br>" 
    }
    )

    return finalStage2
  }
  getRocket(Rocket:Rocket):string
  {
    return "Name : " +Rocket.rocket_name +"<br>" + this.getFirstStage(Rocket.first_stage)+"<br>" + this.getSecondStage(Rocket.second_stage)
  }
  
  }
