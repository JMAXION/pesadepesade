import { db } from "../database/database_mysql80.js"

export const getProduct = async(params)=>{
  console.log(params);
  let sql = '';
  if(params.type === 'all') {
     sql = `select * from product_table
            order by category desc`;
  }else if(params.type === 'parfum'){
    sql = `select * from product_table
          where category='parfum'
          order by category desc
    `;
  }else{
    sql = `select * from product_table
          where category='candle'
          order by category desc
    `;
  }
return db.execute(sql, [params])
          .then(result => result[0])
          
}