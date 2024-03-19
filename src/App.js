
import { useDispatch, useSelector } from "react-redux";
import Index from "./Navigation/Index";
import { getAccess } from "./Store/actions";
import React from "react";
import Auth from "./Navigation/Auth";

export default function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false)
  const access = useSelector(state => state.Reducers.access)
  React.useEffect(() => {
    dispatch(getAccess(setLoading));
  }, [dispatch]);

  return (
    <div
      className="h-screen w-screen bg-white"
    >
      {
        access != null ? <Index /> : <Auth />
      }
    </div>
  )
}