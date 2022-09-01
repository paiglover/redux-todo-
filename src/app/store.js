import { configureStore } from "@reduxjs/toolkit";
import reducer from "../components/reducer";

const store = configureStore({ reducer });

export default store;
