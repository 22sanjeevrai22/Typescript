declare module "redux-persist/es/persistStore" {
  import { Persistor } from "redux-persist";
  import { Store } from "redux";

  // Define the type for the persistStore function
  export default function persistStore(store: Store): Persistor;
}
