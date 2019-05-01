import axios from "axios";
const serverUrl = "http://localhost:5000";

// export const getAddedData = async (addRow, url) => {
//     console.log("this is sparta",addRow);
//   const response = await axios.post(BASEURL+url,{
//       addRow:addRow
//   }).then(res =>{
//       console.log("this is response",res);
//   })
//   return response;
// };

export const getDemoData = () => {
  return new Promise(async (resolve, rejects) => {
    const responce = await fetch(serverUrl + "/demo/get/data");
    const json = await responce.json();
    resolve(json);
  });
};

//add FiveSData to database
export const addDemoData = data => {
  // return new Promise(async (resolve, rejects) => {
  // let formData = new FormData();

  // formData.append("sl_no", sl_no);
  // formData.append("date", date);
  // formData.append("observations", observations);
  // formData.append("actions", actions);
  // formData.append("date_after", date_after);
  // formData.append("responsibility", responsibility);
  // formData.append("status", status);
  // console.log("second================");
  // const config = {
  //   headers: {
  //     "content-type": "multipart/form-data"
  //   }
  // };
  // axios
  //   .post(serverUrl + "/dbpmop/FiveS/add/data", formData, config)
  //   .then(response => {})
  //   .catch(error => {});
  // return { data: true };

  return new Promise(async (resolve, rejects) => {
    const responce = await fetch(serverUrl + "/demo/add/data", {
      method: "post",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    const json = responce.json();
    resolve({ data: true });
  });
  // const json = await responce.json();
  // resolve(json)
  // const responce = await fetch(serverUrl + '/dbpmop/FiveSData/add/data', {
  //     method: 'post',
  //     body: JSON.stringify({ imagefile: imagefile, config: config, customer: customer, product: product, units: unit }),
  //     // headers: { "Content-Type": "application/json" }
  // })
  // const json = await responce.json();
  // resolve(json)
  // })
};

//edit FiveSData
export const editDemoData = (edit_id, changed) => {
  return new Promise(async (resolve, rejects) => {
    // console.log("========", customer, product, unit)
    const responce = await fetch(serverUrl + "/demo/edit/data", {
      method: "post",
      body: JSON.stringify({ id: edit_id, changed: changed }),
      headers: { "Content-Type": "application/json" }
    });
    const json = await responce.json();
    resolve(json);
  });
};

// delete FiveSData
export const deleteDemoData = id => {
  return new Promise(async (resolve, reject) => {
    const responce = await fetch(serverUrl + "/demo/delete/data", {
      method: "post",
      body: JSON.stringify({ id: id }),
      headers: { "Content-Type": "application/json" }
    });
    const json = await responce.json();
    resolve(json);
  });
};
