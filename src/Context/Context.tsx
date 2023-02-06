import React, { useReducer } from "react";
import { createContext, useContext } from "react";

//initialState type
type item = {
  name: string | undefined;
  quantity: number | undefined;
  option: string | undefined;
  id: number;
};
//intial state
const initialState: InitialState = {
  sections: ["Fruits", "Vegetables", "Snacks"],
  items: [],
};

interface InitialState {
  sections: string[];
  items: item[];
}
//enum for the action type
export enum ActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

// type for the action
type Action =
  | { type: ActionType.ADD; payload: item[] }
  | { type: ActionType.REMOVE; payload: item[] };

const shopReducer = (state: InitialState, action: Action): InitialState => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.ADD:
      return { ...state, items: payload };
    case ActionType.REMOVE:
      return { ...state, items: payload };

    default:
      return state;
  }
};

export const Context = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  console.log(state.items);

  const handleAdd = (newItem: item) => {
    dispatch({ type: ActionType.ADD, payload: [...state.items, newItem] });
  };
  const handleDelete = (newList: item[]) => {
    dispatch({ type: ActionType.REMOVE, payload: newList });
  };

  return {
    ...state,
    dispatch,
    handleAdd,
    handleDelete,
  };
};

//context

// 1-capture the return type of our context
type shopContextType = ReturnType<typeof Context>;

// 2- create context
const shopContext = createContext<shopContextType>({
  sections: ["Fruits", "Vegetables", "Snacks"],
  items: [],
  dispatch: () => {},
  handleDelete: () => {},
  handleAdd: () => {},
});

//create a custom hook & precise the retunr value
export const useShopContext = (): shopContextType => {
  const ctx = useContext(shopContext);
  return ctx;
};

//Provider
// 1 - provider props
interface Props {
  children?: any;
}

// 2- create & export the provider & precise the value
export const ShopProvider: React.FC<Props> = ({ children }) => {
  return (
    <shopContext.Provider value={Context()}>{children}</shopContext.Provider>
  );
};
