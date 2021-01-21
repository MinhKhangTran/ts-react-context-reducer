import React, { ReactNode } from "react";
import { reducer, ActionTypes, ContextState } from "./reducer";

const initState = {
  loading: false,
  error: false,
  data: []
};
const MyContext = React.createContext<ContextState>(initState);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  const fetchPackages = async (text: string) => {
    dispatch({ type: ActionTypes.LOADING });
    try {
      const data = await (
        await fetch(`https://registry.npmjs.org/-/v1/search?text=${text}`)
      ).json();
      // console.log(data);
      // wir wollen nur die namen haben
      const packungen = data.objects.map((item: any) => {
        return item.package.name;
      });
      dispatch({ type: ActionTypes.SUCCESS, payload: packungen });
    } catch (error) {
      dispatch({ type: ActionTypes.ERROR });
    }
  };

  return (
    <MyContext.Provider value={{ ...state, fetchPackages }}>
      {children}
    </MyContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(MyContext);
};
