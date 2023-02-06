import React, { useReducer } from "react";
import { createContext, useContext } from "react";

//initialState type
type item = {
  option: string;
  name: string;
  quantity: number;
  id: number;
};
//intial state
const initialState: InitialState = {
  name: "",
  quantity: 0,
  option: "",
  sections: ["Fruits", "Vegetables", "Snacks"],
  items: [],
};

interface InitialState {
  name: string;
  quantity: number;
  option: string;
  sections: string[];
  items: item[];
}
//enum for the action type
enum ActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  UPDATE_NAME = "UPDATE_NAME",
  UPDATE_QUANTITY = "UPDATE_QUANTITY",
  SELECTED_SECTION = "SELECTED_SECTION",
}

// type for the action
type Action =
  | { type: ActionType.ADD; payload: item[] }
  | { type: ActionType.REMOVE; payload: item[] }
  | { type: ActionType.UPDATE_NAME; payload: string }
  | { type: ActionType.UPDATE_QUANTITY; payload: number }
  | { type: ActionType.SELECTED_SECTION; payload: string };

const shopReducer = (state: InitialState, action: Action): InitialState => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.ADD:
      return { ...state, items: payload };
    case ActionType.REMOVE:
      return { ...state, items: payload };
    case ActionType.UPDATE_NAME:
      return { ...state, name: payload };
    case ActionType.UPDATE_QUANTITY:
      return { ...state, quantity: payload };
    case ActionType.SELECTED_SECTION:
      return { ...state, option: payload };
    default:
      return state;
  }
};

export const Context = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

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
  name: "",
  quantity: 0,
  option: "",
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
    <shopContext.Provider value={useShopContext()}>
      {children}
    </shopContext.Provider>
  );
};
