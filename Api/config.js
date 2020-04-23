let dbConfig={
    production:{
        client: 'pg',
        connections: {
            connectionString : process.env.DATABASE_URL,
            ssl: true
        }
    },

    developement:{
        
        client: 'pg',
        version: '7.2',
        connection: {
            host : 'localhost',
            user : 'postgres',
            password : '123abhaysahu321',
            database : 'restaurant'
            }
        
    }
}


getDbDetails=()=>{
    if(process.env.NODE_ENV==="production"){
        return dbConfig.production;
    }
    else{
        
        return dbConfig.developement;
    }
}

const config={
    getDbDetails:getDbDetails()
}

module.exports=config