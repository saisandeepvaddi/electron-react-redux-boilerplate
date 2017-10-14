import { SAMPLE } from "../constants";

// Only if storing to disk is needed
const settings = require("electron-settings");

// Initial State
const INITIAL_STATE =
  settings.get("state") ||
  {
    // sample: "sample"
  };

// WARNING
// TODO: Remove this later. Strictly for fast debugging of persisted state from browser console.
// MUST be removed in production
// Delete if state is not needed to be saved to disk.
// Usage (in browser console) :
// To reset to initial state :- console> settings.set("state", {})
// To get state :- console> settings.get("state.sample")
window.settings = settings;

// Remove if state is not needed to be saved to disk.
// If persisted state is empty. Example: first-time use of application
if (
  settings.get("state") === undefined ||
  Object.keys(settings.get("state")).length === 0
) {
  settings.set("state", INITIAL_STATE);
}

// change to state = INITIAL_STATE if state is not being stored to disk
const rootReducer = (state = INITIAL_STATE, action) => {
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
