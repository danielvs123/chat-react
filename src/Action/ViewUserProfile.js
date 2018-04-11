export const ViewUserProfile = (user) => {
    console.log("You clicked on user:",user);
    return {
        type:"USER_PROFILE_SELECTED",
        payload:user
    }
};