/* #region  ประกาศตัวแปร */

import React, { Fragment } from "react";

/* Router */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

/* Import Component and Pages */
import Menu from "./components/menu";

import SNAPBOX from "./components/snapbox/snaplock";
import SNAPBOX191 from "./components/snapbox/snapBecf191";
import CARRYBOX from "./components/carrybox/carry";
import FOODBOX1171 from "./components/foodbox/foodBecf1171";
import FOODBOX1202 from "./components/foodbox/foodBecf1202";
import FOODBOX1207 from "./components/foodbox/foodBecf1207";
import TRAYBOX from "./components/traybox/tray";
import TRAYBOX1171 from "./components/traybox/trayBecf1171";
import SHIRTBOX from "./components/shirtbox/shirt";
import THREEJSLOCKBOX from "./components/threeJSlockbox/threeJSlock";
import THREEJSDUALLOCKBOX from "./components/threeJSlockbox/threeJSDualLock";
import THREEJSUPPERLOWERLOCKBOX from "./components/threeJSlockbox/threeJSUpperLowerLock";
import CARTOONBAG from "./components/cartoonsbag/cartoons";
import GLOVEBOX from "./components/glovebox/gloveBox";
import STAND11D02 from "./components/standard/stan-11d02";

let closeBox;
let openBox;
let showModel;
let delModel;
let sizeShape;

/* #endregion */

/* #region  ฟังก์ชั่น App */
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Routes />} />
        <Route exact path="/:xRoute" children={<Routes />} />
      </Switch>
    </Router>
  );
};
/* #endregion */

const Routes = () => {
  let { xRoute } = useParams();

  if (
    xRoute === "carry" ||
    xRoute === "food1171" ||
    xRoute === "food1202" ||
    xRoute === "food1207" ||
    xRoute === "tray" ||
    xRoute === "tray1171" ||
    xRoute === "shirt" ||
    xRoute === "threelock" ||
    xRoute === "threeduallock" ||
    xRoute === "threelockul" ||
    xRoute === "cartoonbag" ||
    xRoute === "snap191" ||
    xRoute === "glovebox" ||
    xRoute === "stand11d02"
  ) {
    // ประกาศตัวแปร x เพื่อเก็บค่า x ที่มีค่าตรงกับ useParams() = { xRoute } ที่รับค่ามาจาก Router Switch
    let x = {
      carry: CARRYBOX,
      food1171: FOODBOX1171,
      food1202: FOODBOX1202,
      food1207: FOODBOX1207,
      tray: TRAYBOX,
      tray1171: TRAYBOX1171,
      shirt: SHIRTBOX,
      threelock: THREEJSLOCKBOX,
      threeduallock: THREEJSDUALLOCKBOX,
      threelockul: THREEJSUPPERLOWERLOCKBOX,
      cartoonbag: CARTOONBAG,
      snap191: SNAPBOX191,
      glovebox: GLOVEBOX,
      stand11d02: STAND11D02,
    };

    /* Button */
    closeBox = () => {
      // console.log('พับกล่อง');
      return x[xRoute].rotations1();
    };

    openBox = () => {
      // console.log('กางกล่อง');
      return x[xRoute].rotations2();
    };

    showModel = () => {
      // console.log('เปิดโมเดล');
      return x[xRoute].modelCosmeticTube();
    };

    delModel = () => {
      // console.log('ลบโมเดล');
      return x[xRoute].delModelCosmeticTube();
    };

    /* Slider */
    sizeShape = (a, b, c, d, o, r) => {
      // console.log(`width : ${a} length : ${b} height : ${c} depth : ${d} opacity : ${o} radian : ${r}`);
      return x[xRoute].updateSize(a, b, c, d, o, r);
    };

    return (
      <Fragment>
        {x[xRoute].main()}
        <Menu
          clb={closeBox}
          opb={openBox}
          shm={showModel}
          dlm={delModel}
          size={sizeShape}
          radianSelect={xRoute}
        />
      </Fragment>
    );
  }
  if (xRoute === undefined) {
    /* Button */
    closeBox = () => {
      // console.log('พับกล่อง');
      return SNAPBOX.rotations1();
    };

    openBox = () => {
      // console.log('กางกล่อง');
      return SNAPBOX.rotations2();
    };

    showModel = () => {
      // console.log('เปิดโมเดล');
      return SNAPBOX.modelCosmeticTube();
    };

    delModel = () => {
      // console.log('ลบโมเดล');
      return SNAPBOX.delModelCosmeticTube();
    };

    /* Slider */
    sizeShape = (a, b, c, d, o, r) => {
      // console.log(`width : ${a} length : ${b} height : ${c} depth : ${d} opacity : ${o} radian : ${r}`);
      return SNAPBOX.updateSize(a, b, c, d, o, r);
    };

    return (
      <Fragment>
        {SNAPBOX.main()}
        <Menu
          clb={closeBox}
          opb={openBox}
          shm={showModel}
          dlm={delModel}
          size={sizeShape}
          radianSelect={xRoute}
        />
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default App;
