import { db } from "../database/database_mysql80.js"

export const getProduct = async(params)=>{
  console.log(params);
  let sql = '';
  if(params.type === 'all') {
     sql = `select *  from pesade_product p, pesade_category c 
            where p.category_id = c.category_id
            order  by c.category_name desc`;
  }else if(params.type != 'all'){
    sql = `SELECT *
            FROM pesade_product p
            JOIN pesade_category c ON p.category_id = c.category_id
            WHERE c.category_name = ?
            ORDER BY pname DESC `;
   
  }
return db.execute(sql, [params.type])
          .then(result => result[0])
          
}