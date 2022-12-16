export interface LaunchSite {
      site_name_long: string;
  }

export interface Links {
      article_link: string;
      video_link: string;
  }

export interface Core2 {
      reuse_count: number;
      status: string;
  }

export interface Core {
      flight: number;
      coreInterne: Core2;
  }

export interface FirstStage {
      cores: Core[];
  }

export interface Payload {
      payload_type: string;
      payload_mass_kg?: number;
      payload_mass_lbs?: number;
  }

export interface SecondStage {
      payloads: Payload[];
  }

export interface Rocket {
      rocket_name: string;
      first_stage: FirstStage;
      second_stage: SecondStage;
  }

export interface Ship {
      name: string;
      home_port: string;
      image: string;
  }

export interface Launch {
      mission_name: string;
      launch_date_local: Date;
      launch_site: LaunchSite;
      links: Links;
      rocket: Rocket;
      ships: Ship[];
  }




