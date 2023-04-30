export class RoomDetails {
  room_Id: String;
  room_Name: String;
  room_Info: String;
  plan_Id: String;
  plan_Name: String;
  plan_Info: String;
  plan_Price: number;
  num_Guests: number;
  num_Children: number;
  num_Infants: number;

  constructor(
    room_Id: String = "",
    room_Name: String = "",
    room_Info: String = "",
    plan_Id: String = "",
    plan_Name: String = "",
    plan_Info: String = "",
    plan_Price: number = 0.0,
    num_Guests: number = 0,
    num_Children: number = 0,
    num_Infants: number = 0,
  ) {
    this.room_Id = room_Id;
    this.room_Name = room_Name;
    this.room_Info = room_Info;
    this.plan_Id = plan_Id;
    this.plan_Name = plan_Name;
    this.plan_Info = plan_Info;
    this.plan_Price = plan_Price;
    this.num_Guests = num_Guests;
    this.num_Children = num_Children;
    this.num_Infants = num_Infants;
  }
}
