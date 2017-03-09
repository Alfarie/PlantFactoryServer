import * as mongodb from 'mongodb';

export class Database {
	private dbUrl: string = "mongodb://localhost:27017/grobotdb"
	private mongoClient: any = mongodb.MongoClient;
	constructor() {
		// code...
	}

	public getCm01Setting(callback:any): any{
		this.mongoClient.connect(this.dbUrl , (err:any , db:any)=>{
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:' , err);
			}
			else{
				var settingCollection = db.collection('Setting');
				settingCollection.find().toArray(callback)
			}
			db.close();
		})
	}

	public saveCm01Setting(data:any): any{
		this.mongoClient.connect(this.dbUrl , (err:any , db:any)=>{
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:' , err);
			}
			else{
				var settingCollection = db.collection('Setting');
				data.settingid = 0;
				settingCollection.remove({'settingid':0} );
				
				settingCollection.insert(data , {w:1} ,(err:any, db:any)=>{
					if(err) console.log("$error")
					else{
						console.log("[DATABASE] SAVE SETTING SUCCESSFUL")
						
					}



				})
			}
			db.close();
		})
	}

}