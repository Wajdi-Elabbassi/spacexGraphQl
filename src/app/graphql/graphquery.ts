import { Component, OnInit } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { Launch } from '../models/Launch';
 
const GET_LAUNCHES = gql`
query GetMissionName($name : String) {
    launchesPast(limit: 10, find: {mission_name : $name } ) {
      mission_name 
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }
  
  
`


export {GET_LAUNCHES};
