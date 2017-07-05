import { SAMPLE } from "../constants";

// Only if storing to disk is needed
const settings = require("electron-settings");

// Initial State
const INITIAL_STATE = {
  sample: "sample"
};

// If persisted state is empty. i.e. first-time use of application
if (Object.keys(settings.get("state")).length === 0) {
  settings.set("state", INITIAL_STATE);
}

// WARNING
// TODO: Remove this later. Strictly for fast debugging purpose in browser console.
// Delete if settings are not being saved to disk.
window.settings = settings;

// change to state = INITIAL_STATE if state is not being stored to disk
const rootReducer = (state = settings.get("state"), action) => {
  switch (action.type) {
    case SAMPLE:
      // store any changed status to disk. Use only if necessary.
      settings.set("state.sample", "updated_sample");
      return {
        ...state,
        sample: "updated_sample"
      };

    default:
      return state;
  }
};

export default rootReducer;
