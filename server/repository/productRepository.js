import { db } from "../database/database_mysql80.js"

export const getProduct = async(params)=>{
  let sql = '';
  if(params.type === 'all') {
     sql = `select * from product_table`;
  }else{
    sql = `select * from product_table
          where category='parfum'
    `;
  }
return db.execute(sql, [params])
          .then(result => result[0])
          
}