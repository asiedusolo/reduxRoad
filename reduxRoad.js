const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
  }
  
  const reducer = (state=initialWagonState, action) => {
    switch(action.type){
      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1
        }
      }
      case 'travel': {
        const newSupplies = state.supplies -(20 * action.payload)
        if(newSupplies < 0){
          return state
        }
        return {
          ...state,
          supplies: state.supplies - (20 * action.payload),
          distance: state.distance + (10 * action.payload),
          days: state.days + action.payload
        }
      }
      case 'tippedWagon': {
        return {
          ...state,
          supplies: state.supplies - 30,
          days: state.days + 1
        }
      }
      case 'sell': {
        const supplies = state.supplies - 20
        if(supplies < 0){
          return state
        }
        return {
          ...state,
          supplies: state.supplies - 20,
          cash: state.cash + 5
        }
      }
      case 'buy': {
        const cash = state.cash - 15
        if(cash < 0){
          return state
        }
        return {
          ...state,
          supplies: state.supplies + 25,
          cash: state.cash - 15
        }
      }
      case 'theft': {
        const cash = parseInt(state.cash - (0.5 * state.cash))
        if(cash < 0){
          return state
        }
        return {
          ...state,
          cash: parseInt(state.cash - (0.5 * state.cash))
        }
      }
      default: {
        return state
      }
    }
  }
  
  let wagon = reducer(undefined, {})
  console.log(wagon)
  wagon = reducer(wagon, {type: 'travel', payload: 1})
  console.log(wagon)
  wagon = reducer(wagon, {type: 'gather'})
  console.log(wagon)
  wagon = reducer(wagon, {type: 'tippedWagon'})
  console.log(wagon)
  wagon = reducer(wagon, {type: 'travel', payload: 3})
  console.log(wagon)
  wagon = reducer(wagon, {type: 'travel', payload: 1})
  console.log(wagon)
  wagon = reducer(wagon, {type: 'buy'})
  console.log(wagon)
  wagon = reducer(wagon, {type: 'buy'})
  console.log(wagon)
  wagon = reducer(wagon, {type: 'sell'})
  console.log(wagon)
  wagon = reducer(wagon, {type: 'theft'})
  console.log(wagon)