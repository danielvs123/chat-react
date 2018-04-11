export default function (state = null,action) {
    switch (action.type){
        case "USER_PROFILE_SELECTED":
            return action.payload;
    }
    return state;
}