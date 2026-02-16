import 'dotenv/config';
import { MongoClient } from 'mongodb'

class dbClient {
  constructor(){
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?appName=Cluster0#`;

    this.client = new MongoClient(queryString);

    this.conectarDB();
  }

  async conectarDB() {
    try {
      await this.client.connect();
      this.db = this.client.db('adopcion');

      console.log("Base de datos conectada")

    } catch (e) {
      console.log(e);
    }
  }


}

export default new dbClient