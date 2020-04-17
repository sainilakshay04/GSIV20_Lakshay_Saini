export const landing = (state = {
   results: []
}, action) => {
   switch (action.type) {
       case 'FETCH_MOVIES':
           return {
               ...state, results: action.payload
           };
       default:
           return state
   }
}
