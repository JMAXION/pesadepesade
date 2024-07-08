import { db } from "../database/database_mysql80.js"

export const getProduct = async(params)=>{
  console.log(params);
  let sql = '';
  if(params.type === 'all') {
     sql = `select *  from pesade_product p, pesade_category c 
            where p.category_id = c.category_id
            order  by c.category_name desc`;
  }else if(params.type === 'pesade'){
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