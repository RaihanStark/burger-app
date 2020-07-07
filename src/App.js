import React from "react";

import Layout from "./containers/layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
