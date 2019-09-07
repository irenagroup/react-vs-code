export const removeByKey = (object, deleteKey) => {
  return Object.keys(object)
    .filter(key => key.toString() !== deleteKey.toString()).reduce((result, current) => {
      result[current] = object[current];
      return result;
    }, []);
};

const stocks = (state = [], action) => {
  switch (action.type) {
    case 'GET_PRODUCT_SUCCESS':
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
          completed: false
        }
      ];

    case 'ADD_ALL_STOCKS':
      debugger;

      let temp = action.stocks.map(stock => {
        stock.id = action.currentId;
        action.currentId = action.currentId + 1;
        // stock.stock=stock;

        let tempstock = {
          id: action.currentId,
          stock: stock,
          completed: false
        };
        return tempstock;
      });
      return [
        ...state,
        ...temp
      ];
    case 'ADD_STOCK':
      return [
        ...state,
        {
          id: state.length,
          stock: action.stock,
          completed: false
        }
      ];
    case 'DELETE_STOCK':
          let newstate=[...state];
          debugger;
            delete newstate[action.id];
       return  [...newstate.filter((stock) =>{
        return stock;
      })];
      //return removeByKey(state, action.id);
    case 'GET_STOCKS':
      debugger;
      return [
        ...state,
        {
          id: action.id,
          stock: action.stock,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default stocks