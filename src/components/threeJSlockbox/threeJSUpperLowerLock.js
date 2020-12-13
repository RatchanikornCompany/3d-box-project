import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";

/* #region  ตัวแปร */
var controls, renderer, scene, camera;

var A = 52;
var B = 52;
var C = 175;
var D = 0.5;
var L = 0.3; // เปอร์เซนนต์
var LH = 20; // ความสูงฐานล็อค ค่า Defualt
var R = 40; // ความยาวของเส้นรอบวง
var g_Slope = 4; // ควมเฉียงส่วนประกาว ค่า Defualt
var p_Slope = 5; // ความเฉียงลิ้นเสีบย  ค่า Defualt
var w = window.innerWidth;
var h = window.innerHeight / 1.5;

var edges;
var tween;

var side_A_back;
var side_Top;
var side_Top_lid;
var side_A_top;
var side_Top_lock_lid;
var side_lr_Top_left_lock;
var side_lr_Top_right_lock;
var side_Top_lock;
var side_Bottom;
var side_Bottom_lid;
var side_A_bottom;
var side_Lock_lid;
var side_lr_Left_lock;
var side_lr_Right_lock;
var side_Bottom_lock;
var side_B_left;
var side_lr_Lid_left;
var side_lr_Lid_left_d;
var side_B_right;
var side_lr_Lid_right;
var side_lr_Lid_right_d;
var side_A_front;
var side_Glue_lid;
var side_Lid_front_d;
var side_Lid;

var side_A_back_edges;
var side_Top_edges;
var side_Top_lid_edges;
var side_A_top_edges;
var side_Top_lock_lid_edges;
var side_lr_Top_left_lock_edges;
var side_lr_Top_right_lock_edges;
var side_Top_lock_edges;
var side_Bottom_edges;
var side_Bottom_lid_edges;
var side_A_bottom_edges;
var side_Lock_lid_edges;
var side_lr_Left_lock_edges;
var side_lr_Right_lock_edges;
var side_Bottom_lock_edges;
var side_B_left_edges;
var side_lr_Lid_left_edges;
var side_lr_Lid_left_d_edges;
var side_B_right_edges;
var side_lr_Lid_right_edges;
var side_lr_Lid_right_d_edges;
var side_A_front_edges;
var side_Glue_lid_edges;
var side_Lid_front_d_edges;
var side_Lid_edges;

var pivot_Top_lid;
var pivot_Top;
var pivot_Top_left;
var pivot_Top_right;
var pivot_Top_lock;
var pivot_lock_Top_lid;
var pivot_A_top;
var pivot_Bottom_lid;
var pivot_Bottom;
var pivot_Back;
var pivot_Glue_lid;
var pivot_Front;
var pivot_Right_lid;
var pivot_Right_lid_d;
var pivot_Right;
var pivot_Left_lid;
var pivot_Left_lid_d;
var pivot_Left;
var pivot_Bottom_left;
var pivot_Bottom_right;
var pivot_Bottom_lock;
var pivot_lock_Bottom_lid;
var pivot_A_bottom;
var pivot_All;

var pivot_Top_lid_edges;
var pivot_Top_edges;
var pivot_Top_left_edges;
var pivot_Top_right_edges;
var pivot_Top_lock_edges;
var pivot_lock_Top_lid_edges;
var pivot_A_top_edges;
var pivot_Bottom_lid_edges;
var pivot_Bottom_edges;
var pivot_Back_edges;
var pivot_Glue_lid_edges;
var pivot_Front_edges;
var pivot_Right_lid_edges;
var pivot_Right_lid_d_edges;
var pivot_Right_edges;
var pivot_Left_lid_edges;
var pivot_Left_lid_d_edges;
var pivot_Left_edges;
var pivot_Bottom_left_edges;
var pivot_Bottom_right_edges;
var pivot_Bottom_lock_edges;
var pivot_lock_Bottom_lid_edges;
var pivot_A_bottom_edges;
var pivot_All_edges;
/* #endregion */

const init = () => {
  /* #region  Three-3D Renderer */

  /* #region  Scene */
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);
  /* #endregion */
  /* #region  เซ็ทตำแหน่งกล้อง */
  camera = new THREE.PerspectiveCamera(50, w / h, 1, 5000);
  camera.position.z = 800; // 800
  /* #endregion */
  /* #region  สร้างแกนหมุน */
  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);
  /* #endregion */
  /* #region  เซ็ทตำแหน่งสีของด้านแต่ล่ะด้าน */
  const material = new THREE.MeshPhongMaterial({
    /*  MeshBasicMaterial */
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
  });
  /* #endregion */
  /* #region  Spot Light */
  //  Spotlight 1
  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(
    (spotLight.position.x = 800),
    (spotLight.position.y = 800),
    (spotLight.position.z = 800)
  );
  spotLight.castShadow = true;
  scene.add(spotLight);

  spotLight.shadow.mapSize.width = 512;
  spotLight.shadow.mapSize.height = 512;
  spotLight.shadow.camera.near = 0.5;
  spotLight.shadow.camera.far = 500;
  spotLight.focus = 1;

  //  ภาพฉาย Spotlight 1
  var helper = new THREE.CameraHelper(spotLight.shadow.camera);
  scene.add(helper);

  //  Spotlight 2
  var spotLight2 = new THREE.SpotLight(0xffffff);
  spotLight2.position.set(
    (spotLight2.position.x = -800),
    (spotLight2.position.y = 800),
    (spotLight2.position.z = 800)
  );
  spotLight2.castShadow = true;
  scene.add(spotLight2);

  spotLight2.shadow.mapSize.width = 512;
  spotLight2.shadow.mapSize.height = 512;
  spotLight2.shadow.camera.near = 0.5;
  spotLight2.shadow.camera.far = 500;
  spotLight2.focus = 1;

  //  ภาพฉาย Spotlight 2
  var helper2 = new THREE.CameraHelper(spotLight2.shadow.camera);
  scene.add(helper2);
  /* #endregion */
  /* #region  WebGL Render */
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById("webgl").append(renderer.domElement);
  /* #endregion */
  /* #region  The Mouse Controls */
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 10;
  /* #endregion */

  /* #endregion */

  /* #region  Model */

  /* #region  ฝาเสียบ */
  var lid_Shape = new THREE.Shape();

  lid_Shape.moveTo(0, 0);
  lid_Shape.lineTo(A, 0);
  lid_Shape.bezierCurveTo(
    A,
    0,
    A - A / 35,
    -(p_Slope - p_Slope / 35),
    A - A / 10,
    -p_Slope
  );
  lid_Shape.lineTo(A / 10, -p_Slope);
  lid_Shape.bezierCurveTo(
    A / 10,
    -p_Slope,
    A / 35,
    -(p_Slope - p_Slope / 35),
    0,
    0
  );

  var lid = new THREE.ShapeGeometry(lid_Shape); // ฝาเสียบ
  /* #endregion */
  /* #region  ฝาเสียบกาว */
  var glue_Lid_shape = new THREE.Shape();

  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(C, 0);
  glue_Lid_shape.moveTo(0, 0);
  glue_Lid_shape.lineTo(C, 0);
  glue_Lid_shape.bezierCurveTo(
    C,
    0,
    C - C / 35,
    -(g_Slope - g_Slope / 35),
    C - C / 10,
    -g_Slope
  );
  glue_Lid_shape.lineTo(C / 10, -g_Slope);
  glue_Lid_shape.bezierCurveTo(
    C / 10,
    -g_Slope,
    C / 35,
    -(g_Slope - g_Slope / 35),
    0,
    0
  );

  var glue_Lid = new THREE.ShapeGeometry(glue_Lid_shape); // ฝาเสียบกาว
  /* #endregion */
  /* #region  ลิ้นกันฝุ่น */
  var lr_lid_shape = new THREE.Shape();

  lr_lid_shape.moveTo(0, 0);
  // Front ....................................................
  lr_lid_shape.lineTo(0, LH - 18); // 0, 2
  lr_lid_shape.lineTo(B - 50, LH - 17); // 2, 3
  lr_lid_shape.lineTo(B - 45, LH - 2); // 7, 18
  // Center ...................................................
  lr_lid_shape.lineTo(B - 42, LH); // 10, 20
  lr_lid_shape.lineTo(B - 1, LH); // 51, 20
  // Rear .....................................................
  lr_lid_shape.lineTo(B - 1, LH - 18); // 51, 2
  lr_lid_shape.lineTo(B, 0); // 52, 0

  var lr_lid = new THREE.ShapeGeometry(lr_lid_shape); // ลิ้นกันฝุ่น
  /* #endregion */
  /* #region  ลิ้นฝาล็อค */
  var lr_Bottom_shape = new THREE.Shape();

  lr_Bottom_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Bottom_shape.lineTo(0, LH); // 0, 20
  // Center ...................................................
  lr_Bottom_shape.lineTo(A - 2, LH); // 50, 20
  // Rear .....................................................
  lr_Bottom_shape.lineTo(A - 2, 0); // 50, 0

  var lr_Bottom = new THREE.ShapeGeometry(lr_Bottom_shape); // ลิ้นฝาล็อค
  /* #endregion */
  /* #region  ฝาล็อค */
  var lr_Lock_shape = new THREE.Shape();

  lr_Lock_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Lock_shape.lineTo(0, B - 2);
  // Center ...................................................
  lr_Lock_shape.lineTo(A - 2, B - 2);
  // Rear .....................................................
  lr_Lock_shape.lineTo(A - 2, 0);

  var hole_Lock_shape = new THREE.Path();
  hole_Lock_shape.moveTo((A - 2) / 2 - R / 2, (B - 2) / 2); // 5, 25
  hole_Lock_shape.bezierCurveTo(
    (A - 2) / 2 - R / 2, // 5
    (B - 2) / 2, // 25
    (A - 2 - R) / 2, // 5
    (B - 2 - R) / 2, // 5
    (A - 2) / 2, // 25
    (B - 2) / 2 - R / 2 // 5
  );
  hole_Lock_shape.bezierCurveTo(
    (A - 2) / 2, // 25
    (B - 2) / 2 - R / 2, // 5
    (A - 2 + R) / 2, // 45
    (B - 2 - R) / 2, // 5
    (A - 2) / 2 + R / 2, // 45
    (B - 2) / 2 // 25
  );
  hole_Lock_shape.bezierCurveTo(
    (A - 2) / 2 + R / 2, // 45
    (B - 2) / 2, // 25
    (A - 2 + R) / 2, // 45
    (B - 2 + R) / 2, // 45
    (A - 2) / 2, // 25
    (B - 2) / 2 + R / 2 // 45
  );
  hole_Lock_shape.bezierCurveTo(
    (A - 2) / 2, // 25
    (B - 2) / 2 + R / 2, // 45
    (A - 2 - R) / 2, // 5
    (B - 2 + R) / 2, // 45
    (A - 2) / 2 - R / 2, // 5
    (B - 2) / 2 // 25
  );
  lr_Lock_shape.holes.push(hole_Lock_shape);

  var lr_Lock = new THREE.ShapeGeometry(lr_Lock_shape); // ฝาล็อค
  /* #endregion */
  /* #region  ลิ้นกันฝุ่นฝาล็อค */
  var lr_Lid_lock_shape = new THREE.Shape();

  lr_Lid_lock_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Lid_lock_shape.lineTo(B - 42, LH); // 10, 20
  // Center ...................................................
  lr_Lid_lock_shape.lineTo(B - 6, LH); // 46, 20
  // Rear .....................................................
  lr_Lid_lock_shape.lineTo(B - 2, 0); // 50, 0

  var lr_Lid_lock = new THREE.ShapeGeometry(lr_Lid_lock_shape); // ลิ้นกันฝุ่นฝาล็อค
  /* #endregion */
  /* #region  ตัวเสียบฝาล็อคล่าง */
  var lr_Bottom_lock_shape = new THREE.Shape();

  lr_Bottom_lock_shape.moveTo(0, 0);
  // Front ....................................................
  lr_Bottom_lock_shape.lineTo(A - 47, LH); // 5, 20
  // Center ...................................................
  lr_Bottom_lock_shape.lineTo(A - 7, LH); // 45, 20
  // Rear .....................................................
  lr_Bottom_lock_shape.lineTo(A - 2, 0); // 50, 0

  var lr_Bottom_lock = new THREE.ShapeGeometry(lr_Bottom_lock_shape); // ตัวเสียบฝาล็อคล่าง
  /* #endregion */
  /* #region  รูปทรงมาตราฐาน */
  var plane_A_side = new THREE.BoxGeometry(A, C, D); // ด้าน A | กว้าง x สูง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(B, C, D); // ด้าน B | ลึก x กว้าง | ความหนา
  var plane_Top_bottom = new THREE.BoxGeometry(A, B, D); // กว้าง x ลึก | ความหนา
  /* #endregion */

  /* #endregion */

  /* #region  ฉาก */

  /* #region  side_A_back */
  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = A / 2;
  side_A_back.position.y = C / 2;
  side_A_back.castShadow = true;
  side_A_back.receiveShadow = true;
  /* #endregion */
  /* #region  side_A_top */
  side_Top = new THREE.Mesh(plane_Top_bottom, material);
  side_Top.position.x = A / 2;
  side_Top.position.y = B / 2;
  side_Top.castShadow = true;
  side_Top.receiveShadow = true;

  side_Top_lid = new THREE.Mesh(lid, material);
  side_Top_lid.rotation.x = Math.PI;
  side_Top_lid.castShadow = true;
  side_Top_lid.receiveShadow = true;

  side_A_top = new THREE.Mesh(lr_Bottom, material);
  side_A_top.rotation.y = Math.PI;
  side_A_top.position.x = -(A - 51);
  side_A_top.castShadow = true;
  side_A_top.receiveShadow = true;

  side_Top_lock_lid = new THREE.Mesh(lr_Lock, material);
  side_Top_lock_lid.rotation.y = Math.PI;
  side_Top_lock_lid.position.x = -(A - 51);
  side_Top_lock_lid.castShadow = true;
  side_Top_lock_lid.receiveShadow = true;

  side_lr_Top_left_lock = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Top_left_lock.rotation.z = -(Math.PI / 180) * 270;
  side_lr_Top_left_lock.castShadow = true;
  side_lr_Top_left_lock.receiveShadow = true;

  side_lr_Top_right_lock = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Top_right_lock.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );
  side_lr_Top_right_lock.castShadow = true;
  side_lr_Top_right_lock.receiveShadow = true;

  side_Top_lock = new THREE.Mesh(lr_Bottom_lock, material);
  side_Top_lock.rotation.y = (Math.PI / 180) * 180;
  side_Top_lock.castShadow = true;
  side_Top_lock.receiveShadow = true;
  /* #endregion */
  /* #region  side_A_bottom */
  side_Bottom = new THREE.Mesh(plane_Top_bottom, material);
  side_Bottom.position.x = A / 2;
  side_Bottom.position.y = -B / 2;
  side_Bottom.castShadow = true;
  side_Bottom.receiveShadow = true;

  side_Bottom_lid = new THREE.Mesh(lid, material);
  side_Bottom_lid.castShadow = true;
  side_Bottom_lid.receiveShadow = true;

  side_A_bottom = new THREE.Mesh(lr_Bottom, material);
  side_A_bottom.rotation.set(Math.PI, Math.PI, 0);
  side_A_bottom.position.x = -(A - 51);
  side_A_bottom.castShadow = true;
  side_A_bottom.receiveShadow = true;

  side_Lock_lid = new THREE.Mesh(lr_Lock, material);
  side_Lock_lid.rotation.set(Math.PI, Math.PI, 0);
  side_Lock_lid.position.x = -(A - 51);
  side_Lock_lid.castShadow = true;
  side_Lock_lid.receiveShadow = true;

  side_lr_Left_lock = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Left_lock.rotation.set(0, Math.PI, -Math.PI / 2);
  side_lr_Left_lock.castShadow = true;
  side_lr_Left_lock.receiveShadow = true;

  side_lr_Right_lock = new THREE.Mesh(lr_Lid_lock, material);
  side_lr_Right_lock.rotation.z = -Math.PI / 2;

  side_Bottom_lock = new THREE.Mesh(lr_Bottom_lock, material);
  side_Bottom_lock.rotation.set(Math.PI, Math.PI, 0);
  side_Bottom_lock.castShadow = true;
  side_Bottom_lock.receiveShadow = true;
  /* #endregion */
  /* #region  side_B_left */
  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.x = -B / 2;
  side_B_left.position.y = C / 2;
  side_B_left.castShadow = true;
  side_B_left.receiveShadow = true;

  side_lr_Lid_left = new THREE.Mesh(lr_lid, material);
  side_lr_Lid_left.castShadow = true;
  side_lr_Lid_left.receiveShadow = true;

  side_lr_Lid_left_d = new THREE.Mesh(lr_lid, material);
  side_lr_Lid_left_d.rotation.x = Math.PI;
  side_lr_Lid_left_d.castShadow = true;
  side_lr_Lid_left_d.receiveShadow = true;
  /* #endregion */
  /* #region  side_B_right */
  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.x = B / 2;
  side_B_right.position.y = C / 2;
  side_B_right.castShadow = true;
  side_B_right.receiveShadow = true;

  side_lr_Lid_right = new THREE.Mesh(lr_lid, material);
  side_lr_Lid_right.rotation.y = Math.PI;
  side_lr_Lid_right.castShadow = true;
  side_lr_Lid_right.receiveShadow = true;

  side_lr_Lid_right_d = new THREE.Mesh(lr_lid, material);
  side_lr_Lid_right_d.rotation.set(Math.PI, Math.PI, 0);
  side_lr_Lid_right_d.castShadow = true;
  side_lr_Lid_right_d.receiveShadow = true;
  /* #endregion */
  /* #region  side_A_front */
  side_A_front = new THREE.Mesh(plane_A_side, material);
  side_A_front.position.x = -A / 2;
  side_A_front.position.y = C / 2;
  side_A_front.castShadow = true;
  side_A_front.receiveShadow = true;

  side_Glue_lid = new THREE.Mesh(glue_Lid, material);
  side_Glue_lid.rotation.set(-Math.PI, 0, -Math.PI / 2);
  side_Glue_lid.castShadow = true;
  side_Glue_lid.receiveShadow = true;

  side_Lid_front_d = new THREE.Mesh(plane_Top_bottom, material);
  side_Lid_front_d.position.x = A / 2;
  side_Lid_front_d.position.y = -B / 2;
  side_Lid_front_d.castShadow = true;
  side_Lid_front_d.receiveShadow = true;

  side_Lid = new THREE.Mesh(lid, material);
  side_Lid.castShadow = true;
  side_Lid.receiveShadow = true;
  /* #endregion */

  /* #endregion */

  /* #region  ฉาก - เส้น */

  /* #region  side_A_back */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_back_edges.position.x = A / 2;
  side_A_back_edges.position.y = C / 2;
  /* #endregion */
  /* #region  side_A_top */
  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_Top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Top_edges.position.x = A / 2;
  side_Top_edges.position.y = B / 2;

  edges = new THREE.EdgesGeometry(lid);
  side_Top_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Top_lid_edges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(lr_Bottom);
  side_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_top_edges.rotation.y = Math.PI;
  side_A_top_edges.position.x = -(A - 51);

  edges = new THREE.EdgesGeometry(lr_Lock);
  side_Top_lock_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Top_lock_lid_edges.rotation.y = Math.PI;
  side_Top_lock_lid_edges.position.x = -(A - 51);

  edges = new THREE.EdgesGeometry(lr_Lid_lock);
  side_lr_Top_left_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_Top_left_lock_edges.rotation.y = -(Math.PI / 180) * 270;

  edges = new THREE.EdgesGeometry(lr_Lid_lock);
  side_lr_Top_right_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_Top_right_lock_edges.rotation.set(0, Math.PI, Math.PI / 2);

  edges = new THREE.EdgesGeometry(lr_Bottom_lock);
  side_Top_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Top_lock_edges.rotation.y = Math.PI;
  /* #endregion */
  /* #region  side_A_bottom */
  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_Bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Bottom_edges.position.x = A / 2;
  side_Bottom_edges.position.y = -B / 2;

  edges = new THREE.EdgesGeometry(lid);
  side_Bottom_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(lr_Bottom);
  side_A_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_bottom_edges.rotation.set(Math.PI, Math.PI, 0);
  side_A_bottom_edges.position.x = -(A - 51);

  edges = new THREE.EdgesGeometry(lr_Lock);
  side_Lock_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Lock_lid_edges.rotation.set(Math.PI, Math.PI, 0);
  side_Lock_lid_edges.position.x = -(A - 51);

  edges = new THREE.EdgesGeometry(lr_Lid_lock);
  side_lr_Left_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_Left_lock_edges.rotation.set(0, Math.PI, -Math.PI / 2);

  edges = new THREE.EdgesGeometry(lr_Lid_lock);
  side_lr_Right_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_Right_lock_edges.rotation.z = -Math.PI / 2;

  edges = new THREE.EdgesGeometry(lr_Bottom_lock);
  side_Bottom_lock_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Bottom_lock_edges.rotation.set(Math.PI, Math.PI, 0);
  /* #endregion */
  /* #region  side_B_left */
  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_edges.position.x = -B / 2;
  side_B_left_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_Lid_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_Lid_left_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_Lid_left_d_edges.rotation.x = Math.PI;
  /* #endregion */
  /* #region  side_B_right */
  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_edges.position.x = B / 2;
  side_B_right_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_Lid_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_Lid_right_edges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(lr_lid);
  side_lr_Lid_right_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_Lid_right_d_edges.rotation.set(Math.PI, Math.PI, 0);
  /* #endregion */
  /* #region  side_A_front */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_front_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_front_edges.position.x = -A / 2;
  side_A_front_edges.position.y = C / 2;

  edges = new THREE.EdgesGeometry(glue_Lid);
  side_Glue_lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Glue_lid_edges.rotation.set(-Math.PI, 0, -Math.PI / 2);

  edges = new THREE.EdgesGeometry(plane_Top_bottom);
  side_Lid_front_d_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_Lid_front_d_edges.position.x = A / 2;
  side_Lid_front_d_edges.position.y = -B / 2;

  edges = new THREE.EdgesGeometry(lid);
  side_Lid_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  /* #endregion */

  /* #endregion */

  /* #region  จุดหมุน */

  /* #region  pivot_Top */
  pivot_Top_lid = new THREE.Object3D();
  pivot_Top_lid.add(side_Top_lid);
  pivot_Top_lid.position.y = B;

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(side_Top, pivot_Top_lid);
  pivot_Top.position.y = C;

  pivot_Top_left = new THREE.Object3D();
  pivot_Top_left.add(side_lr_Top_left_lock);
  pivot_Top_left.position.x = -(A - 1);

  pivot_Top_right = new THREE.Object3D();
  pivot_Top_right.add(side_lr_Top_right_lock);
  pivot_Top_right.position.x = -(A - 51);

  pivot_Top_lock = new THREE.Object3D();
  pivot_Top_lock.add(side_Top_lock);
  pivot_Top_lock.position.set(-(A - 51), B - 2, 0);

  pivot_lock_Top_lid = new THREE.Object3D();
  pivot_lock_Top_lid.add(
    side_Top_lock_lid,
    pivot_Top_left,
    pivot_Top_right,
    pivot_Top_lock
  );
  pivot_lock_Top_lid.position.y = B - 32;

  pivot_A_top = new THREE.Object3D();
  pivot_A_top.add(side_A_top, pivot_lock_Top_lid);
  pivot_A_top.position.y = C;
  /* #endregion */
  /* #region  pivot_Bottom */
  pivot_Bottom_lid = new THREE.Object3D();
  pivot_Bottom_lid.add(side_Bottom_lid);
  pivot_Bottom_lid.position.y = -B;

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(side_Bottom, pivot_Bottom_lid);

  pivot_Bottom_left = new THREE.Object3D();
  pivot_Bottom_left.add(side_lr_Left_lock);
  pivot_Bottom_left.position.x = -(A - 1);

  pivot_Bottom_right = new THREE.Object3D();
  pivot_Bottom_right.add(side_lr_Right_lock);
  pivot_Bottom_right.position.x = -(A - 51);

  pivot_Bottom_lock = new THREE.Object3D();
  pivot_Bottom_lock.add(side_Bottom_lock);
  pivot_Bottom_lock.position.set(-(A - 51), -(B - 2), 0);

  pivot_lock_Bottom_lid = new THREE.Object3D();
  pivot_lock_Bottom_lid.add(
    side_Lock_lid,
    pivot_Bottom_left,
    pivot_Bottom_right,
    pivot_Bottom_lock
  );
  pivot_lock_Bottom_lid.position.y = -(B - 32);

  pivot_A_bottom = new THREE.Object3D();
  pivot_A_bottom.add(side_A_bottom, pivot_lock_Bottom_lid);
  /* #endregion */
  /* #region  pivot_Back */
  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back, pivot_Top, pivot_Bottom);
  /* #endregion */
  /* #region  pivot_Front */
  pivot_Glue_lid = new THREE.Object3D();
  pivot_Glue_lid.add(side_Glue_lid);
  pivot_Glue_lid.position.x = -A;

  pivot_Front = new THREE.Object3D();
  pivot_Front.add(side_A_front, pivot_Glue_lid, pivot_A_top, pivot_A_bottom);
  pivot_Front.position.x = -B;
  /* #endregion */
  /* #region  pivot_Left */
  pivot_Left_lid = new THREE.Object3D();
  pivot_Left_lid.add(side_lr_Lid_left);
  pivot_Left_lid.position.set(-B, C, 0);

  pivot_Left_lid_d = new THREE.Object3D();
  pivot_Left_lid_d.add(side_lr_Lid_left_d);
  pivot_Left_lid_d.position.x = -B;

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_Left_lid, pivot_Left_lid_d, pivot_Front);
  /* #endregion */
  /* #region  pivot_Right */
  pivot_Right_lid = new THREE.Object3D();
  pivot_Right_lid.add(side_lr_Lid_right);
  pivot_Right_lid.position.set(B, C, 0);

  pivot_Right_lid_d = new THREE.Object3D();
  pivot_Right_lid_d.add(side_lr_Lid_right_d);
  pivot_Right_lid_d.position.x = B;

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right, pivot_Right_lid, pivot_Right_lid_d);
  pivot_Right.position.set(A, 0, 0);
  /* #endregion */
  /* #region  pivot_All */
  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Right, pivot_Left);
  scene.add(pivot_All);
  /* #endregion */

  /* #endregion */

  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Top */
  pivot_Top_lid_edges = new THREE.Object3D();
  pivot_Top_lid_edges.add(side_Top_lid_edges);
  pivot_Top_lid_edges.position.y = B;

  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(side_Top_edges, pivot_Top_lid_edges);
  pivot_Top_edges.position.y = C;

  pivot_Top_left_edges = new THREE.Object3D();
  pivot_Top_left_edges.add(side_lr_Top_left_lock_edges);
  pivot_Top_left_edges.position.x = -(A - 1);

  pivot_Top_right_edges = new THREE.Object3D();
  pivot_Top_right_edges.add(side_lr_Top_right_lock_edges);
  pivot_Top_right_edges.position.x = -(A - 51);

  pivot_Top_lock_edges = new THREE.Object3D();
  pivot_Top_lock_edges.add(side_Top_lock_edges);
  pivot_Top_lock_edges.position.set(-(A - 51), B - 2, 0);

  pivot_lock_Top_lid_edges = new THREE.Object3D();
  pivot_lock_Top_lid_edges.add(
    side_Top_lock_lid_edges,
    pivot_Top_left_edges,
    pivot_Top_right_edges,
    pivot_Top_lock_edges
  );
  pivot_lock_Top_lid_edges.position.y = B - 32;

  pivot_A_top_edges = new THREE.Object3D();
  pivot_A_top_edges.add(side_A_top, pivot_lock_Top_lid_edges);
  pivot_A_top_edges.position.y = C;
  /* #endregion */
  /* #region  pivot_Bottom */
  pivot_Bottom_lid_edges = new THREE.Object3D();
  pivot_Bottom_lid_edges.add(side_Bottom_lid_edges);
  pivot_Bottom_lid_edges.position.y = -B;

  pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(side_Bottom_edges, pivot_Bottom_lid_edges);

  pivot_Bottom_left_edges = new THREE.Object3D();
  pivot_Bottom_left_edges.add(side_lr_Left_lock_edges);
  pivot_Bottom_left_edges.position.x = -(A - 1);

  pivot_Bottom_right_edges = new THREE.Object3D();
  pivot_Bottom_right_edges.add(side_lr_Right_lock_edges);
  pivot_Bottom_right_edges.position.x = -(A - 51);

  pivot_Bottom_lock_edges = new THREE.Object3D();
  pivot_Bottom_lock_edges.add(side_Bottom_lock_edges);
  pivot_Bottom_lock_edges.position.set(-(A - 51), -(B - 2), 0);

  pivot_lock_Bottom_lid_edges = new THREE.Object3D();
  pivot_lock_Bottom_lid_edges.add(
    side_Lock_lid_edges,
    pivot_Bottom_left_edges,
    pivot_Bottom_right_edges,
    pivot_Bottom_lock_edges
  );
  pivot_lock_Bottom_lid_edges.position.y = -(B - 32);

  pivot_A_bottom_edges = new THREE.Object3D();
  pivot_A_bottom_edges.add(side_A_bottom_edges, pivot_lock_Bottom_lid_edges);
  /* #endregion */
  /* #region  pivot_Back */
  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges, pivot_Top_edges, pivot_Bottom_edges);
  /* #endregion */
  /* #region  pivot_Front */
  pivot_Glue_lid_edges = new THREE.Object3D();
  pivot_Glue_lid_edges.add(side_Glue_lid_edges);
  pivot_Glue_lid_edges.position.x = -A;

  pivot_Front_edges = new THREE.Object3D();
  pivot_Front_edges.add(
    side_A_front_edges,
    pivot_Glue_lid_edges,
    pivot_A_top_edges,
    pivot_A_bottom_edges
  );
  pivot_Front_edges.position.x = -B;
  /* #endregion */
  /* #region  pivot_Left */
  pivot_Left_lid_edges = new THREE.Object3D();
  pivot_Left_lid_edges.add(side_lr_Lid_left_edges);
  pivot_Left_lid_edges.position.set(-B, C, 0);

  pivot_Left_lid_d_edges = new THREE.Object3D();
  pivot_Left_lid_d_edges.add(side_lr_Lid_left_d_edges);
  pivot_Left_lid_d_edges.position.x = -B;

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(
    side_B_left_edges,
    pivot_Left_lid_edges,
    pivot_Left_lid_d_edges,
    pivot_Front_edges
  );
  /* #endregion */
  /* #region  pivot_Right */
  pivot_Right_lid_edges = new THREE.Object3D();
  pivot_Right_lid_edges.add(side_lr_Lid_right_edges);
  pivot_Right_lid_edges.position.set(B, C, 0);

  pivot_Right_lid_d_edges = new THREE.Object3D();
  pivot_Right_lid_d_edges.add(side_lr_Lid_right_d_edges);
  pivot_Right_lid_d_edges.position.x = B;

  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(
    side_B_right_edges,
    pivot_Right_lid_edges,
    pivot_Right_lid_d_edges
  );
  pivot_Right_edges.position.set(A, 0, 0);
  /* #endregion */
  /* #region  pivot_All */
  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(pivot_Back_edges, pivot_Right_edges, pivot_Left_edges);
  scene.add(pivot_All_edges);
  /* #endregion */

  /* #endregion */
};

/* #region  ฟังก์ชั่นการหมุน */
/*  พับกล่อง */
const rotations1 = () => {
  // ชิ้นงาน

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid_d.x = (Math.PI / 180) * 90),
  });

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid_d.x = (Math.PI / 180) * 90),
  });

  // pivot_Front

  tween = gsap.timeline();
  tween.to(pivot_Front.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Front.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = -(Math.PI / 180) * 90),
  });

  // pivot_Top @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_top.x = -(Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivot_lock_Top_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lock_Top_lid.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lock.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lock.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Top_left.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Top_right.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid.x = -(Math.PI / 180) * 90),
  });

  // pivot_Bottom @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_bottom.x = (Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivot_lock_Bottom_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lock_Bottom_lid.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lock.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_left.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_right.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lid.x = (Math.PI / 180) * 90),
  });

  // เส้น

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid_d_edges.x = (Math.PI / 180) * 90),
  });

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid_d_edges.x = (Math.PI / 180) * 90),
  });

  // pivot_Front

  tween = gsap.timeline();
  tween.to(pivot_Front_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Front_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid_edges.y = -(Math.PI / 180) * 90),
  });

  // pivot_Top @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_top_edges.x = -(Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivot_lock_Top_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lock_Top_lid_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lock_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lock_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Top_left_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Top_right_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid_edges.x = -(Math.PI / 180) * 90),
  });

  // pivot_Bottom @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_bottom_edges.x = (Math.PI / 180) * 180),
  });

  tween = gsap.timeline();
  tween.to(pivot_lock_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lock_Bottom_lid_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lock_edges.x = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_left_edges.y = -(Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_right_edges.y = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_edges.x = (Math.PI / 180) * 90),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lid_edges.x = (Math.PI / 180) * 90),
  });
};
/*  กางกล่อง */
const rotations2 = () => {
  // ชิ้นงาน

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid_d.x = 0),
  });

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid_d.x = 0),
  });

  // pivot_Front

  tween = gsap.timeline();
  tween.to(pivot_Front.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Front.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid.y = 0),
  });

  // pivot_Top @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lock_Top_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lock_Top_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lock.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lock.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Top_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Top_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid.x = 0),
  });

  // pivot_Bottom @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lock_Bottom_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lock_Bottom_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lock.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lid.x = 0),
  });

  // ชิ้นงาน

  // pivot_Left

  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Left_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Left_lid_d_edges.x = 0),
  });

  // pivot_Right

  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Right_lid_d_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Right_lid_d_edges.x = 0),
  });

  // pivot_Front

  tween = gsap.timeline();
  tween.to(pivot_Front_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Front_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Glue_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Glue_lid_edges.y = 0),
  });

  // pivot_Top @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lock_Top_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lock_Top_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lock_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lock_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Top_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Top_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Top_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_lid_edges.x = 0),
  });

  // pivot_Bottom @ Front

  tween = gsap.timeline();
  tween.to(pivot_A_bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_A_bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_lock_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lock_Bottom_lid_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lock_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lock_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_left_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Bottom_right_edges.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_edges.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_Bottom_lid_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_lid_edges.x = 0),
  });
};
/* #endregion */

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  render();
};

const updateSize = (a, b, c, r, p, ll) => {
  A = a;
  B = b;
  C = c;
  R = r;
  p_Slope = p;
  LH = ll;

  var initDiv = document.getElementById("webgl");
  var newDiv = document.createElement("div");
  newDiv.id = "webgl";

  initDiv.remove();
  document.getElementById("main").appendChild(newDiv);

  return main();
};

const render = () => {
  renderer.render(scene, camera);
  // pivot_All.rotation.y += Math.PI / 360;
  // pivot_All_edges.rotation.y += Math.PI / 360;
};

const main = () => {
  init();
  animate();
};

export default {
  main,
  rotations1,
  rotations2,
  updateSize,
};