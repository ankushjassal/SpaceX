export class SpaceX{
    mission_name: string;
    mission_id: string;
    launch_year: string;
    launch_success: string;
    land_success: string;

    constructor(mission_name, mission_id, launch_year, launch_success, land_success){
        this.mission_name = mission_name;
        this.mission_id = mission_id;
        this.launch_year = launch_year;
        this.launch_success = launch_success;
        this.land_success = land_success;
    }
}