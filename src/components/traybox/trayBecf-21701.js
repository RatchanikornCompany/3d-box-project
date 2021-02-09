/* #region  ประกาศตัวแปร */

import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import { gsap } from "gsap";
import "antd/dist/antd.css";

var controls, renderer, scene, camera;

var A = 100; // กว้าง
var B = 50; // ลึก
var C = 100; // สูง
var Cx = C; // ตัวคุณ C
var O = 0.5; // ความโปร่งแสง

var tween;

var side_B_top;

var pivot_A_back;
var pivot_A_top;
var pivot_A_Top_left;
var pivot_A_Top_right;
var pivot_A_Top_lid;

var pivot_B_left;
var pivot_B_right;
var pivot_B_top;
var pivot_B_Bottom_left;
var pivot_B_Bottom_right;
var pivot_B_bottom;

/* #endregion */

/* #region  ฟังก์ชั่น */

/* #region  main */

const main = () => {
  init();
  animate();
};

/* #endregion */
/* #region  rotations */

/* #region  พับกล่อง */

const rotations1 = () => {
  /* #region  จุดหมุน */

  /* #region  pivot_A_back */

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_A_back.x = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.position, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_A_back.y = 2.5),
  });

  /* #endregion */
  /* #region  pivot_A_top */

  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_A_top.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_top.position, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_A_top.y = C / 2 - 2.5),
    z: (pivot_A_top.z = -2.5),
  });

  /* #endregion */
  /* #region  pivot_A_Top_left */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_left.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_A_Top_left.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_left.position, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_A_Top_left.x = 0.1),
  });

  /* #endregion */
  /* #region  pivot_A_Top_right */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_right.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_A_Top_right.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_right.position, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_A_Top_right.x = A - 2.6),
    z: (pivot_A_Top_right.z = -2.5),
  });

  /* #endregion */
  /* #region  pivot_A_Top_lid */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_lid.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_A_Top_lid.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_lid.position, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_A_Top_lid.y = C - 2.6),
    z: (pivot_A_Top_lid.z = -2.5),
  });

  /* #endregion */

  /* #region  pivot_B_left */

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 4,
    ease: "power4.in",
    y: (pivot_B_left.y = Math.PI / 2),
  });

  /* #endregion */
  /* #region  pivot_B_right */

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 4,
    ease: "power4.in",
    y: (pivot_B_right.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.position, {
    duration: 4,
    ease: "power4.in",
    x: (pivot_B_right.x = A - 2.5),
    z: (pivot_B_right.z = -2.5),
  });

  /* #endregion */
  /* #region  pivot_B_top */

  tween = gsap.timeline();
  tween.to(pivot_B_top.rotation, {
    duration: 4,
    ease: "power4.in",
    x: (pivot_B_top.x = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_top.position, {
    duration: 4,
    ease: "power4.in",
    y: (pivot_B_top.y = C - 2.5),
    z: (pivot_B_top.z = -2.5),
  });

  /* #endregion */
  /* #region  pivot_B_Bottom_left */

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_left.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_B_Bottom_left.y = -Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_left.position, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_B_Bottom_left.x = 0.1),
  });

  /* #endregion */
  /* #region  pivot_B_Bottom_right */

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_right.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_B_Bottom_right.y = Math.PI / 2),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_right.position, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_B_Bottom_right.x = A - 0.1),
    z: (pivot_B_Bottom_right.z = A),
  });

  /* #endregion */
  /* #region  pivot_B_bottom */

  tween = gsap.timeline();
  tween.to(pivot_B_bottom.rotation, {
    duration: 4,
    ease: "power4.in",
    x: (pivot_B_bottom.x = Math.PI / 2),
  });

  /* #endregion */

  /* #endregion */
};

/* #endregion */
/* #region  กางกล่อง */

const rotations2 = () => {
  /* #region  จุดหมุน */

  /* #region  pivot_A_back */

  tween = gsap.timeline();
  tween.to(pivot_A_back.rotation, {
    duration: 4,
    ease: "power4.in",
    x: (pivot_A_back.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_back.position, {
    duration: 4,
    ease: "power4.in",
    z: (pivot_A_back.z = 0),
  });

  /* #endregion */
  /* #region  pivot_A_top */

  tween = gsap.timeline();
  tween.to(pivot_A_top.rotation, {
    duration: 4,
    ease: "power4.in",
    x: (pivot_A_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_top.position, {
    duration: 4,
    ease: "power4.in",
    y: (pivot_A_top.y = C / 2),
    z: (pivot_A_top.z = 0),
  });

  /* #endregion */
  /* #region  pivot_A_Top_left */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_left.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_A_Top_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_left.position, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_A_Top_left.x = 0),
  });

  /* #endregion */
  /* #region  pivot_A_Top_right */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_right.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_A_Top_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_right.position, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_A_Top_right.x = A),
    z: (pivot_A_Top_right.z = 0),
  });

  /* #endregion */
  /* #region  pivot_A_Top_lid */

  tween = gsap.timeline();
  tween.to(pivot_A_Top_lid.rotation, {
    duration: 4,
    ease: "power4.in",
    x: (pivot_A_Top_lid.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_A_Top_lid.position, {
    duration: 4,
    ease: "power4.in",
    y: (pivot_A_Top_lid.y = C),
    z: (pivot_A_Top_lid.z = 0),
  });

  /* #endregion */

  /* #region  pivot_B_left */

  tween = gsap.timeline();
  tween.to(pivot_B_left.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_B_left.y = 0),
  });

  /* #endregion */
  /* #region  pivot_B_right */

  tween = gsap.timeline();
  tween.to(pivot_B_right.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_B_right.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_right.position, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_B_right.x = A),
    z: (pivot_B_right.z = 0),
  });

  /* #endregion */
  /* #region  pivot_B_top */

  tween = gsap.timeline();
  tween.to(pivot_B_top.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_B_top.x = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_top.position, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_B_top.y = C),
    z: (pivot_B_top.z = 0),
  });

  /* #endregion */
  /* #region  pivot_B_Bottom_left */

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_left.rotation, {
    duration: 2,
    ease: "power4.in",
    y: (pivot_B_Bottom_left.y = 0),
  });

  tween = gsap.timeline();
  tween.to(pivot_B_Bottom_left.position, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_B_Bottom_left.x = 0),
  });

  /* #endregion */
  /* #region  pivot_B_bottom */

  tween = gsap.timeline();
  tween.to(pivot_B_bottom.rotation, {
    duration: 2,
    ease: "power4.in",
    x: (pivot_B_bottom.x = Math.PI),
  });

  /* #endregion */

  /* #endregion */
};

/* #endregion */

/* #endregion */
/* #region  rotateObject */

const rotateObject = (object, degreeX = 0, degreeY = 0, degreeZ = 0) => {
  object.rotateX(THREE.Math.degToRad(degreeX));
  object.rotateY(THREE.Math.degToRad(degreeY));
  object.rotateZ(THREE.Math.degToRad(degreeZ));
};

/* #endregion */
/* #region  updateSize */

const updateSize = (a, b, c, o) => {
  A = a;
  B = b;
  C = c;
  O = o;

  const initDiv = document.getElementById("webgl");
  const newDiv = document.createElement("div");
  newDiv.id = "webgl";

  initDiv.remove();
  document.getElementById("main").appendChild(newDiv);

  return main();
};

/* #endregion */
/* #region  TextureLoader */

const texture = new THREE.TextureLoader().load(
  "https://img.freepik.com/free-photo/decorative-background-brown-cardboard_23-2148210030.jpg?size=626&ext=jpg"
);

/* #endregion */

/* #endregion */

const init = () => {
  /* #region  Three-3D Renderer */

  /* #region  Scene */

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x404040);

  /* #endregion */
  /* #region  Camera */

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.position.z = 700;

  /* #endregion */
  /* #region  axesHelper */

  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);

  /* #endregion */
  /* #region  Material */

  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
    opacity: O,
    transparent: true,
    map: texture,
  });

  texture["kraft"] = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
    opacity: O,
    transparent: true,
    map: texture,
  });

  const extrudeSettings = {
    depth: C,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  const extrudeSettings_B_Top_bottom = {
    depth: A / 2,
    bevelEnabled: true,
    bevelSegments: 0,
    steps: 2,
    bevelSize: 0,
    bevelThickness: 1,
  };

  /* #endregion */
  /* #region  WebGL Render */

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("webgl").append(renderer.domElement);

  /* #endregion */
  /* #region  The mouse controls */

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 12;
  controls.minDistance = 10;
  controls.maxDistance = 1000;
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = -1.0;

  /* #endregion */
  /* #region  Lights */

  const light = new THREE.PointLight(0xffffff, 1);
  camera.add(light);
  scene.add(camera);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
  dirLight.position.set(200, 200, 200);
  scene.add(dirLight);

  /* #endregion */
  /* #region  GridHelper */

  scene.add(new THREE.GridHelper(1000, 100));

  /* #endregion */

  /* #endregion */
  /* #region  Model */

  /* #region  หน้า A */

  /* #region  plane_A_side */

  //* plane
  const plane_A = new THREE.Geometry();

  plane_A.vertices.push(new THREE.Vector3(0, 0));
  plane_A.vertices.push(new THREE.Vector3(0, C));
  plane_A.vertices.push(new THREE.Vector3(A, C));
  plane_A.vertices.push(new THREE.Vector3(A, 0));

  plane_A.faces.push(new THREE.Face3(0, 1, 2));
  plane_A.faces.push(new THREE.Face3(3, 0, 2));

  plane_A.faceVertexUvs[0].push([
    new THREE.Vector2(0.3, 1),
    new THREE.Vector2(0.7, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_A.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.3, 1),
    new THREE.Vector2(1, 0),
  ]);

  const plane_A_front = new THREE.Mesh(plane_A, texture["kraft"]);

  const plane_A_back = new THREE.Mesh(plane_A, texture["kraft"]);
  plane_A_back.position.z = -2.5;

  //* corrugate
  var points_A = [];

  points_A.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (A - 2.5) / 2; i += 2.5) {
    points_A.push(new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx)));
    points_A.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_A = new THREE.CatmullRomCurve3(points_A);

  const points_A_corrugated = curve_A.getPoints(1000);

  const corrugated_A_shape = new THREE.Shape();
  corrugated_A_shape.holes.push(
    new THREE.Path().setFromPoints(points_A_corrugated)
  );

  const corrugated_A = new THREE.ExtrudeGeometry(
    corrugated_A_shape,
    extrudeSettings
  );

  const plane_A_cent = new THREE.Mesh(corrugated_A, material);
  plane_A_cent.position.z = -0.1;
  rotateObject(plane_A_cent, -90);

  /* #endregion */

  /* #endregion */
  /* #region  หน้า B */

  /* #region  plane_B_Left_right */

  //* plane
  const plane_B_Left_right = new THREE.Geometry();

  plane_B_Left_right.vertices.push(new THREE.Vector3(0, 0));
  plane_B_Left_right.vertices.push(new THREE.Vector3(0, C));
  plane_B_Left_right.vertices.push(new THREE.Vector3(B, C));
  plane_B_Left_right.vertices.push(new THREE.Vector3(B, 0));

  plane_B_Left_right.faces.push(new THREE.Face3(0, 1, 2));
  plane_B_Left_right.faces.push(new THREE.Face3(3, 0, 2));

  plane_B_Left_right.faceVertexUvs[0].push([
    new THREE.Vector2(0.3, 1),
    new THREE.Vector2(0.7, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_B_Left_right.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.3, 1),
    new THREE.Vector2(1, 0),
  ]);

  const plane_B_Left_Right_front = new THREE.Mesh(
    plane_B_Left_right,
    texture["kraft"]
  );

  const plane_B_Left_Right_back = new THREE.Mesh(
    plane_B_Left_right,
    texture["kraft"]
  );
  plane_B_Left_Right_back.position.z = -2.5;

  //* corrugate
  var points_B_Left_right = [];

  points_B_Left_right.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (B - 2.5) / 2; i += 2.5) {
    points_B_Left_right.push(new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx)));
    points_B_Left_right.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_B_Left_right = new THREE.CatmullRomCurve3(points_B_Left_right);

  const points_B_Left_Right_corrugated = curve_B_Left_right.getPoints(1000);

  const corrugated_B_Left_Right_shape = new THREE.Shape();
  corrugated_B_Left_Right_shape.holes.push(
    new THREE.Path().setFromPoints(points_B_Left_Right_corrugated)
  );

  const corrugated_B_Left_right = new THREE.ExtrudeGeometry(
    corrugated_B_Left_Right_shape,
    extrudeSettings
  );

  const plane_B_Left_Right_cent = new THREE.Mesh(
    corrugated_B_Left_right,
    material
  );
  plane_B_Left_Right_cent.position.z = -0.1;
  rotateObject(plane_B_Left_Right_cent, -90);

  /* #endregion */
  /* #region  plane_B_Top_bottom */

  //* plane
  const plane_B_Top_bottom = new THREE.Geometry();

  plane_B_Top_bottom.vertices.push(new THREE.Vector3(0, 0));
  plane_B_Top_bottom.vertices.push(new THREE.Vector3(0, C / 2));
  plane_B_Top_bottom.vertices.push(new THREE.Vector3(A, C / 2));
  plane_B_Top_bottom.vertices.push(new THREE.Vector3(A, 0));

  plane_B_Top_bottom.faces.push(new THREE.Face3(0, 1, 2));
  plane_B_Top_bottom.faces.push(new THREE.Face3(3, 0, 2));

  plane_B_Top_bottom.faceVertexUvs[0].push([
    new THREE.Vector2(0.3, 1),
    new THREE.Vector2(0.7, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_B_Top_bottom.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.3, 1),
    new THREE.Vector2(1, 0),
  ]);

  const plane_B_Top_Bottom_front = new THREE.Mesh(
    plane_B_Top_bottom,
    texture["kraft"]
  );

  const plane_B_Top_Bottom_back = new THREE.Mesh(
    plane_B_Top_bottom,
    texture["kraft"]
  );
  plane_B_Top_Bottom_back.position.z = -2.5;

  //* corrugate
  var points_B_Top_bottom = [];

  points_B_Top_bottom.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (A - 2.5) / 2; i += 2.5) {
    points_B_Top_bottom.push(new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx)));
    points_B_Top_bottom.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_B_Top_bottom = new THREE.CatmullRomCurve3(points_B_Top_bottom);

  const points_B_Top_Bottom_corrugated = curve_B_Top_bottom.getPoints(1000);

  const corrugated_B_Top_Bottom_shape = new THREE.Shape();
  corrugated_B_Top_Bottom_shape.holes.push(
    new THREE.Path().setFromPoints(points_B_Top_Bottom_corrugated)
  );

  const corrugated_B_Top_bottom = new THREE.ExtrudeGeometry(
    corrugated_B_Top_Bottom_shape,
    extrudeSettings_B_Top_bottom
  );

  const plane_B_Top_Bottom_cent = new THREE.Mesh(
    corrugated_B_Top_bottom,
    material
  );
  plane_B_Top_Bottom_cent.position.z = -0.1;
  rotateObject(plane_B_Top_Bottom_cent, -90);

  /* #endregion */
  /* #region  plane_B_Top_bottom_lid */

  //* plane
  const plane_B_Top_Bottom_lid = new THREE.Geometry();

  plane_B_Top_Bottom_lid.vertices.push(new THREE.Vector3(0, 0));
  plane_B_Top_Bottom_lid.vertices.push(new THREE.Vector3(0, C / 2));
  plane_B_Top_Bottom_lid.vertices.push(new THREE.Vector3(B, C / 2));
  plane_B_Top_Bottom_lid.vertices.push(new THREE.Vector3(B, 0));

  plane_B_Top_Bottom_lid.faces.push(new THREE.Face3(0, 1, 2));
  plane_B_Top_Bottom_lid.faces.push(new THREE.Face3(3, 0, 2));

  plane_B_Top_Bottom_lid.faceVertexUvs[0].push([
    new THREE.Vector2(0.3, 1),
    new THREE.Vector2(0.7, 1),
    new THREE.Vector2(1, 0),
  ]);
  plane_B_Top_Bottom_lid.faceVertexUvs[0].push([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.3, 1),
    new THREE.Vector2(1, 0),
  ]);

  const plane_B_Top_Bottom_Lid_front = new THREE.Mesh(
    plane_B_Top_Bottom_lid,
    texture["kraft"]
  );

  const plane_B_Top_Bottom_Lid_back = new THREE.Mesh(
    plane_B_Top_Bottom_lid,
    texture["kraft"]
  );
  plane_B_Top_Bottom_Lid_back.position.z = -2.5;

  //* corrugate
  var points_B_Top_Bottom_lid = [];

  points_B_Top_Bottom_lid.push(new THREE.Vector3(0, 0));

  for (let i = 0; i <= (B - 2.5) / 2; i += 2.5) {
    points_B_Top_Bottom_lid.push(
      new THREE.Vector3(i * 2 + 2.5, C * (2.4 / Cx))
    );
    points_B_Top_Bottom_lid.push(new THREE.Vector3(i * 2 + 5, 0));
  }

  const curve_B_Top_Bottom_lid = new THREE.CatmullRomCurve3(
    points_B_Top_Bottom_lid
  );

  const points_B_Top_Bottom_Lid_corrugated = curve_B_Top_Bottom_lid.getPoints(
    1000
  );

  const corrugated_B_Top_Bottom_Lid_shape = new THREE.Shape();
  corrugated_B_Top_Bottom_Lid_shape.holes.push(
    new THREE.Path().setFromPoints(points_B_Top_Bottom_Lid_corrugated)
  );

  const corrugated_B_Top_Bottom_lid = new THREE.ExtrudeGeometry(
    corrugated_B_Top_Bottom_Lid_shape,
    extrudeSettings_B_Top_bottom
  );

  const plane_B_Top_Bottom_Lid_cent = new THREE.Mesh(
    corrugated_B_Top_Bottom_lid,
    material
  );
  plane_B_Top_Bottom_Lid_cent.position.z = -0.1;
  rotateObject(plane_B_Top_Bottom_Lid_cent, -90);

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  Mesh - แกนหมุน */

  /* #region  Non_Edges */

  /* #region  side_A */

  /* #region  side_A_back */

  const side_A_back = new THREE.Group();
  side_A_back.add(plane_A_front, plane_A_cent, plane_A_back);

  /* #endregion */
  /* #region  side_A_top */

  const side_A_Top_left = new THREE.Group();
  side_A_Top_left.add(
    plane_B_Top_Bottom_Lid_front,
    plane_B_Top_Bottom_Lid_cent,
    plane_B_Top_Bottom_Lid_back
  );
  rotateObject(side_A_Top_left, 0, 180);

  const side_A_Top_right = new THREE.Group();
  side_A_Top_right.add(side_A_Top_left.clone());
  rotateObject(side_A_Top_right, 0, 180);

  const side_A_top = new THREE.Group();
  side_A_top.add(side_A_back.clone());

  /* #endregion */

  /* #endregion */
  /* #region  side_B */

  /* #region  side_B_left */

  const side_B_left = new THREE.Group();
  side_B_left.add(
    plane_B_Left_Right_front,
    plane_B_Left_Right_cent,
    plane_B_Left_Right_back
  );
  rotateObject(side_B_left, 0, 180);

  /* #endregion */
  /* #region  side_B_right */

  const side_B_right = new THREE.Group();
  side_B_right.add(side_B_left.clone());
  rotateObject(side_B_right, 0, -180);

  /* #endregion */
  /* #region  side_B_top */

  side_B_top = new THREE.Group();
  side_B_top.add(
    plane_B_Top_Bottom_front,
    plane_B_Top_Bottom_cent,
    plane_B_Top_Bottom_back
  );

  /* #endregion */
  /* #region  side_B_bottom */

  const side_B_bottom = new THREE.Group();
  side_B_bottom.add(side_B_top.clone());

  /* #endregion */

  /* #endregion */
  /* #region  side_Lid */

  /* #region  side_A_Top_lid */

  const side_A_Top_lid = new THREE.Group();
  side_A_Top_lid.add(side_B_top.clone());
  scene.add(side_A_Top_lid);

  /* #endregion */

  /* #endregion */

  /* #endregion */

  /* #endregion */
  /* #region  Object3D - จุดหมุน */

  /* #region  Non-Edges */

  /* #region  pivot_B */

  /* #region  pivot_B_left */

  pivot_B_left = new THREE.Object3D();
  pivot_B_left.add(side_B_left);
  pivot_B_left.position.z = -2.5;

  //! pivot_B_left test draw.
  // rotateObject(pivot_B_left, 0, 90);

  /* #endregion */
  /* #region  pivot_B_right */

  pivot_B_right = new THREE.Object3D();
  pivot_B_right.add(side_B_right);
  pivot_B_right.position.x = A;

  //! pivot_B_right test draw.
  // pivot_B_right.position.set(A - 2.5, 0, -2.5);

  // rotateObject(pivot_B_right, 0, -90);

  /* #endregion */
  /* #region  pivot_B_top */

  pivot_A_Top_lid = new THREE.Object3D();
  pivot_A_Top_lid.add(side_A_Top_lid);
  pivot_A_Top_lid.position.y = C;

  pivot_A_top = new THREE.Object3D();
  pivot_A_top.add(side_A_top, pivot_A_Top_lid);
  pivot_A_top.position.y = C / 2;

  pivot_A_Top_left = new THREE.Object3D();
  pivot_A_Top_left.add(side_A_Top_left);
  pivot_A_Top_left.position.z = -2.5;

  pivot_A_Top_right = new THREE.Object3D();
  pivot_A_Top_right.add(side_A_Top_right);
  pivot_A_Top_right.position.x = A;

  pivot_B_top = new THREE.Object3D();
  pivot_B_top.add(side_B_top, pivot_A_top, pivot_A_Top_left, pivot_A_Top_right);
  pivot_B_top.position.y = C;

  /* #endregion */
  /* #region  pivot_B_bottom */

  pivot_B_Bottom_left = new THREE.Object3D();
  pivot_B_Bottom_left.add(pivot_A_Top_left.clone());

  pivot_B_Bottom_right = new THREE.Object3D();
  pivot_B_Bottom_right.add(pivot_A_Top_right.clone());

  pivot_B_bottom = new THREE.Object3D();
  pivot_B_bottom.add(side_B_bottom, pivot_B_Bottom_left, pivot_B_Bottom_right);
  pivot_B_bottom.position.z = -2.5;
  rotateObject(pivot_B_bottom, 180);

  /* #endregion */

  /* #endregion */
  /* #region  pivot_A */

  /* #region  pivot_A_back */

  pivot_A_back = new THREE.Object3D();
  pivot_A_back.add(
    side_A_back,
    pivot_B_left,
    pivot_B_right,
    pivot_B_top,
    pivot_B_bottom
  );

  //! pivot_A_back test draw.
  // rotateObject(pivot_A_back, -90);

  /* #endregion */

  /* #endregion */
  /* #region  pivot_All */

  const pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_A_back);
  scene.add(pivot_All);

  /* #endregion */

  /* #endregion */

  /* #endregion */
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

export default {
  main,
  rotations1,
  rotations2,
  updateSize,
};
