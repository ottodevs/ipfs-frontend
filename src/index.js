import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReactModal from "react-modal";
// import { ConnectedRouter } from "react-router-redux";

import { configureStore } from "./config/configureStore";
import AppContainer from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

import { actions } from "./actions/browser";

export const store = configureStore();

ReactModal.setAppElement("#root");

window.addEventListener("load", () => {
  store.dispatch(actions.loaded());
  /*
  // TODO: Refactor this ino own saga
  const tracker = melonTracker.on("DataUpdated", "LogItemUpdate");

  tracker(type => {
    switch (type) {
      case "DataUpdated":
        store.dispatch(fundHoldingsCreators.requestPrices());
        break;

      case "LogItemUpdate":
        store.dispatch(
          orderbookCreators.requestOrderbook(
            store.getState().general.assetPair,
          ),
        );
        break;

      default:
    }
  });
  */
});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
