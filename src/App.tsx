import React from "react";
// import Component, {ClassComponent,FunctionComponent as F,} from "./component/Component";
import "./App.css";
// import Properties from "./component_manage/Properties";
// import Gallery from "./component_manage/example/Example1";
// import ConditionalRender from "./component_manage/ConditionalRender";
// import CurlyBraces from "./component/CurlyBraces";
import Example2 from "./component_manage/example/Example2";
import HookComponent1 from "./hook/HookComponent1";
import HookComponent2 from "./hook/HookComponent2";
import CustomHook from "./hook/CustomHook";
// import ListRender from "./component_manage/ListRender";


function App() {
  return (
    <>
      {/* <Component /> */}
      {/*<ClassComponent />*/}
      {/*<F />*/}
      {/* <CurlyBraces /> */}
      {/* <Properties /> */}
      {/* <Gallery /> */}
      {/* <ConditionalRender /> */}
      {/* <Example2 /> */}
      {/* <ListRender /> */}
      {/* <HookComponent1 /> */}
      {/* <HookComponent2 /> */}
      <CustomHook />
    </>
  );
}

export default App;
