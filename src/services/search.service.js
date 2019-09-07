import { APP_CONSTANT } from "../constants/api.constant";

class Error {
  errorType;
  constructor(res) {
    this.errorType = res.errorType;
  }
}
export function getSearch(valueSearch) {
    
   return  new Promise((resolve, reject)=> {
   fetch(`${APP_CONSTANT.API_SEARCH}?query=${valueSearch}` )
      .then(response => response.json())
      .then((data) => {

       resolve(data);
      }).catch((error)=>{
          console.warn(error);
        reject(new Error({errorType:'ERROR_API_SEARCH'}));

      })}) ;
      
}