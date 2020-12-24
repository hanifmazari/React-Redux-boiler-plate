// This is actually my store from where all the data  is sent my apllication


const INITIAL_STATE = {
    users:[
        {name: "Hanif", email: "hanif@gmail.com"},
        {name: "Ali", emial: "ali@gmail.com"}
    ]
}

export default(state = INITIAL_STATE, action) =>{
    console.log("actions==>", action);
    switch (action.type){
        case "SET DATA": 
            return({
                ...state,
                users: [...state.users,action.user]
            })
    }
    return state
}
