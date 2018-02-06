const store = [{
    greeting: 'hello world',
    sub: 'welcome to zero'
}];

// STATE PROVIDER
export function getState() { return store[0] };

// SEQUENCER
export function sequence(actionList) {
    store.unshift(
        actionList.reduce((ac, cv) => {
            return mainReducer(ac, cv);
        }, store[0])
    );
    /* 
     * store currently holds 3 state objects. Additional state objects push the old ones out of the array.
     * Increase or decrease by changing the store.length below
     */
    store.length = store.length > 3 ? 3 : store.length;
}

// REDUCER
function mainReducer(state, action) {
    return {
        greeter: state.greeter,
        sub: state.sub
    };
}