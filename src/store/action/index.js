const set_data = () => {
    return (dispatch) => {
        console.log("running");

        dispatch({type: "SET DATA", 
            user:{name: "ahmed", email: "ahmed@gmail.com"}})

    }
}

export { 
    set_data
}