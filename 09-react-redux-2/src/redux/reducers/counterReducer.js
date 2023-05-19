const initialState = {
  value: 0
}

export const INCREMENT = "INCREMENT"

// fungsi action utk ubah data
export function increment() {
  return {
    type: INCREMENT
  }
}

function counterReducer (state = initialState, action) {
  switch (action.type) {
    case INCREMENT: 
      return { value: state.value + 1 }
    default: return state
  }
}

export default counterReducer