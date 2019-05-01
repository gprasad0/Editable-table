"use strict";
const mysql = require("../../routes/mysql/mysqldb");

//get Demo DATA
function getDemoData() {
  return new Promise(async (resolve, reject) => {
    // console.log(customer, product, units)

    let insertNcr = `SELECT id,name,age,city,car FROM Demo.DemoTable`;
    const data = await mysql.getData(insertNcr).catch(e => console.log(e));
    // console.log('---------------',data)
    if (data.length <= 0) {
      resolve({ status: false });
    } else {
      resolve(data);
    }
  });
}

//add ner nce data
function addDemoData(name,age,city,car) {
  
  return new Promise(async (resolve, reject) => {
    // console.log(customer, product, units)
    let insertNcr = `INSERT INTO Demo.DemoTable VALUES(0,NOW(),'${name}','${age}','${city}','${car}')`;
    const data = await mysql.getData(insertNcr).catch(e => console.log(e));
    resolve({ remarks: true });
  });
}

// Edit ner nce data
function editDemoData(id, changed) {
  let name = "",
    age = "",
    city = "",
    car = "";
    
  return new Promise(async (resolve, reject) => {
    let search = `SELECT * FROM Demo.DemoTable WHERE id=${id}`;
    const searchData = await mysql.getData(search).catch(e => reject(e));
    if (changed.name === undefined) {
      name = searchData[0].name;
    } else {
      name = changed.name;
    }

    if (changed.age === undefined) {
      age = searchData[0].age;
    } else {
      age = changed.age;
    }

    if (changed.city === undefined) {
      city = searchData[0].city;
    } else {
      city = changed.city;
    }

    if (changed.car === undefined) {
      car = searchData[0].car;
    } else {
      car = changed.car;
    }

    

    // console.log(customer, product, units)
    let insertNcr = `UPDATE Demo.DemoTable SET 	name='${name}',	age='${age}',city='${city}',car='${car}' WHERE id='${id}'`;
    const data = await mysql.getData(insertNcr).catch(e => console.log(e));
  
    resolve({ status: true });
  });
}

function deleteDemoData(id) {
  return new Promise(async (resolve, reject) => {
    let insertNcr = `DELETE FROM  Demo.DemoTable WHERE id=${id}`;
    const data = await mysql.getData(insertNcr).catch(e => console.log(e));
    // console.log(data)
    resolve({ status: true });
  });
}

module.exports.getDemoData = getDemoData;
module.exports.addDemoData = addDemoData;
module.exports.editDemoData = editDemoData;
module.exports.deleteDemoData = deleteDemoData;
