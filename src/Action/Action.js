// export const anotherName = (name) =>{
//     return {
//         type: 'CHANGE_NAME', 
//         payLoad: name
//     }
// }

// export const anotherName = () =>{
//     return (dispatch)=>{
//         fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//         .then(res=>res.json())
//         .then(res2=>{
//             dispatch({type: 'CHANGE_NAME',payLoad: res2[0].title})
//         })
//     }
// }

export const anotherName = () =>{
    return async (dispatch)=>{

        const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")

        const res2 = await res.json();

        dispatch({type: 'CHANGE_NAME',payLoad: res2[0].title})
    }
}

export const addWish = () =>{
    return{
        type:"add_wish",
        payLoad:"code"
    }
}