import * as socketIo from "socket.io"

import * as db from './db'
export class Socket {
	public io: any;
	private db: any;
	public isConnected:boolean;
	constructor(io: any){
		this.io = io;
		this.db = new db.Database();
		this.listen();

	}

	private listen(): void{
		this.io.on("connection" ,(socket: any) => {
			socket.join('0x01');
			console.log("[INFO] client Connect");
			console.log("[INFO] SEND CM01 REPLY SETTING")
			this.Cm01Setting();

			socket.on("SENSOR_DATA" , (data:any)=> {
				this.io.to('0x01').emit("SENSOR_DATA" , data);
			});
			socket.on("CM01_SAVE_SETTING" , (data:any)=>{
				console.log(data)
				this.db.saveCm01Setting(data)
				this.io.to('0x01').emit('CM01_REQ_SETTING' , data)
			})
			socket.on("CHECK_CONNECTION" , (data:any)=> {
				this.io.to('0x01').emit("CHECK_CONNECTION" , data);
			});

			socket.on("disconnect" , () => {
				console.log("[WARN] client disconnect");
			})
		})
	}


	private Cm01Setting():void {
		this.db.getCm01Setting((err:any ,data:any)=>{
				console.log(data);
				if(data!=null || data!=undefined)
					this.io.to('0x01').emit('CM01_REQ_SETTING' , data[0])
			})
	}
	

	
}