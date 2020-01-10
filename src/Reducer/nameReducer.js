
 const nameReducer = (state='',action) =>{
     if(action.type === "add_wish"){
         return [...state,"code"]
     }
     return state;
 }
 export default nameReducer;