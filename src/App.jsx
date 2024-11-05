import Quotes from "./features/Quotes";
import React from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import getQuote from "./redux/action";
import store from "./redux/store";

const mapStateToProps = (state) => ({
  quote: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    randomizeQuote: () => {
      dispatch(getQuote());
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Quotes);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
