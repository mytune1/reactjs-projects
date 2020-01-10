
 const wishReducer = (state=[],action) =>{
     if(action.type === "CHANGE_NAME"){
         return {
             ...state,
            wish:action.wish
         }
     }
     return state;
 }
 export default wishReducer;