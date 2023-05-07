import { addDays } from "@/lib/helper";
import { RoomDetails } from "./roomDetails";

export class BookingDetails {
  roomsList: RoomDetails[] = [];
  booking_Id: string = "";
  hotel_Owner_Id: string = "";
  hotel_Image_Url: string = "";
  hotel_Name: string = "";
  hotel_Landmark: string = "";
  hotel_Firebase_Id: string = "";
  hotel_Sanity_Id: string = "";
  user_Unique_Id: string = "";
  user_Name: string = "";
  user_Email_Id: string = "";
  user_Phone_Number: string = "";
  user_Address: String = "";
  total_Rooms_Count: number = 0;
  total_Room_Cost: number = 0;
  total_Tax: number = 0;
  total_Price: number = 0;
  payment_Made: boolean = false;
  payment_Id: string = "";
  amount_Paid: number = 0;
  booking_Time: Date = new Date();
  checkin_Time: Date = new Date();
  checkout_Time: Date = addDays(new Date(), 1);

  razorpay_Payment_Id: string = "";
  razorpay_Order_Id: string = "";
  razorpay_Signature_Id: string = "";
  receipt_Id: string = "";

  //   constructor() {}

  //   constructor(
  //     roomsList: RoomDetails[] = [],
  //     booking_Id: string = "",
  //     hotel_Owner_Id: string = "",
  //     hotel_Firebase_Id: string = "",
  //     hotel_Sanity_Id: string = ""
  //   ) {
  //     this.roomsList = roomsList;
  //     this.booking_Id = booking_Id;
  //     this.hotel_Owner_Id = hotel_Owner_Id;
  //     this.hotel_Firebase_Id = hotel_Firebase_Id;
  //     this.hotel_Sanity_Id = hotel_Sanity_Id;
  //     (this.total_Rooms_Count = this.roomsList.length),
  //       (this.total_Room_Cost = this.calculateTotalRoomCost(this.roomsList));
  //     this.total_Tax = this.total_Room_Cost * 0.12;
  //     this.total_Price = this.total_Room_Cost * 1.12;
  //   }

  calculateTotalRoomCost(roomsList: RoomDetails[]): number {
    let totalRoomCost = 0;
    for (let i = 0; i < roomsList.length; i++) {
      totalRoomCost += roomsList[i].plan_Price;
      totalRoomCost += roomsList[i].num_Children * 1000;
    }

    return totalRoomCost;
  }

  addNewRoom(roomInfo: RoomDetails) {
    let chk = false,
      idx = -1;
    for (let i = 0; i < this.roomsList.length; i++) {
      if (roomInfo.compareRooms(this.roomsList[i])) {
        chk = true;
        idx = i;
        break;
      }
    }

    if (chk) this.roomsList[idx].room_Count += 1;
    else this.roomsList.push(roomInfo);

    this.total_Rooms_Count += 1;
    this.total_Room_Cost += roomInfo.plan_Price + roomInfo.num_Children * 1000;
    this.total_Room_Cost = Number(this.total_Room_Cost.toFixed(2));
    this.total_Tax = this.total_Room_Cost * 0.12;
    this.total_Tax = Number(this.total_Tax.toFixed(2));
    this.total_Price = this.total_Room_Cost * 1.12;
    this.total_Price = Number(this.total_Price.toFixed(2));
  }

  updateChildToRoom(planIdx: number, val: number) {
    this.total_Room_Cost -= this.roomsList[planIdx].num_Children * this.roomsList[planIdx].room_Count * 1000;
    this.total_Room_Cost += val * this.roomsList[planIdx].room_Count * 1000;
    this.total_Tax = this.total_Room_Cost * 0.12;
    this.total_Price = this.total_Room_Cost * 1.12;
    this.roomsList[planIdx].num_Children = val;
  }

  removeRoom(roomInfo: RoomDetails, planIdx: number) {
    this.total_Rooms_Count -= roomInfo.room_Count;
    this.total_Room_Cost -= (roomInfo.plan_Price * roomInfo.room_Count) + (roomInfo.num_Children * roomInfo.room_Count * 1000);
    this.total_Tax = this.total_Room_Cost * 0.12;
    this.total_Price = this.total_Room_Cost * 1.12;
    this.roomsList.splice(planIdx, 1);
  }

  get getTotalRoomCount(): number {
    return this.total_Rooms_Count;
  }
  get getTotalRoomCost(): number {
    return this.total_Room_Cost;
  }
  get getTotalTax(): number {
    return this.total_Tax;
  }
  get getTotalPrice(): number {
    return this.total_Price;
  }
}
