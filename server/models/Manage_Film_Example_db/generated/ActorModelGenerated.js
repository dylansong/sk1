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
/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE ActorModelGenerated.js PLEASE EDIT ../ActorModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Manage_Film_Example_db";
import Sequelize from "Sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS


  /**
  * ActorModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.Actor.create(item);    return result;
  },
  
  /**
  * ActorModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await Database.getConnection().models.Actor.destroy({ where: { _id: id } });
  },
  
  /**
  * ActorModel.findByname
  *   @description CRUD ACTION findByname
  *
  */
  async findByname(key) {
    return await Database.getConnection().models.Actor.findAll({ where: { "name": key } });
  },
  
  /**
  * ActorModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.Actor.findByPk(id);
    return result;
  },
  
  /**
  * ActorModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() { 
    return await Database.getConnection().models.Actor.findAll();
      },
  
  /**
  * ActorModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.Actor.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;
