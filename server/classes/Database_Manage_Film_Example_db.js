/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5b5c86fa6ef184060dd13312
*
* You will get 10% discount for each one of your friends
* 
*/
// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_Manage_Film_Example_db";
import UserModel from "../models/Manage_Film_Example_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.Manage_Film_Example_db.host +
        ":" +
        properties.Manage_Film_Example_db.port +
        "//" +
        properties.Manage_Film_Example_db.user +
        "@" +
        properties.Manage_Film_Example_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.Manage_Film_Example_db.name,
      properties.Manage_Film_Example_db.user,
      properties.Manage_Film_Example_db.password,
      {
        host: properties.Manage_Film_Example_db.host,
        dialect: properties.Manage_Film_Example_db.dialect,
        port: properties.Manage_Film_Example_db.port,
        logging: false
      }
    );
    this.dbConnection_Manage_Film_Example_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_Manage_Film_Example_db;
  }
}

export default new Database();
