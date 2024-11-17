import {Account,Client,Storage,Databases} from "appwrite"

const client=new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('673310fc0023c40c9b14');

const account=new Account(client);
const storage=new Storage(client);
const database=new Databases(client);
export {client,account,storage,database};
