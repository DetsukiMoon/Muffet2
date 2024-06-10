import { Mongoose } from "mongoose";
interface MuffetDBSettings {
  databaseURL:string
}
export default class MuffetDB {
  databaseURL: string;
  constructor({databaseURL}:MuffetDBSettings) {
    this.databaseURL = databaseURL
  }

  Init() {
    const database = new Mongoose()
    database.connect('').then(r => {
      console.log(r)
    })
  }
}