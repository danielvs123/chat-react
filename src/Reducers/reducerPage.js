export default function (state = null,action) {
    switch (action.type){
        case "GO_TO_PAGE":
            return action.payload;
    }
    return state;
}