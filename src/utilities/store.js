const get=(key)=>{
   const result= localStorage.getItem(key)
   if(result){
       return JSON.parse(result)
   }else{
       return [] }
}

const save=(key,value)=> localStorage.setItem(key,JSON.stringify(value))



export const store={
    get,save
}
