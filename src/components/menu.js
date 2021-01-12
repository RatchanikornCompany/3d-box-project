/* #region  ประกาศตัวแปร */

import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col, Menu, Switch } from 'antd';
import {
  CodeSandboxOutlined,
  DropboxOutlined,
  SettingOutlined,
  CodepenOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

/* #endregion */

const Menus = (props) => {
  const { clb, opb, shm, dlm, size, radianSelect } = props; //  Deconstructor

  const [inputAvalue, setinputAvalue] = useState(175); //  กว้าง
  const [inputBvalue, setinputBvalue] = useState(52); //  ยาว
  const [inputCvalue, setinputCvalue] = useState(52); //  สูง
  const [inputDvalue, setinputDvalue] = useState(0.5); //  ความหนา
  const [inputOvalue, setinputOvalue] = useState(0.5); //  ความโปร่งแสง

  const [inputRvalue, setinputRvalue] = useState(40); //  รัศมีครึ่งวงกลม
  // const [inputPvalue, setinputPvalue] = useState(5); //  ฝาเสียบ
  // const [inputLHvalue, setinputLHvalue] = useState((inputAvalue * 0.3) | 0); //  ผนังกันฝุ่น

  const [box, setBox] = useState('');
  const [checkOpenBox, setCheckOpenBox] = useState(false);
  const [model, setModel] = useState('');
  const [checkShowModel, setCheckShowModel] = useState(false);

  const changeBox = (value) => {
    if (value === 'close') {
      closeBox();
    } else if (value === 'open') {
      openBox();
    }
    setCheckOpenBox(!checkOpenBox);
  };

  const changeModel = (value) => {
    if (value === 'delObj') {
      delModel();
    } else if (value === 'Obj') {
      showModel();
    }
    setCheckShowModel(!checkShowModel);
  };

  /* onChange */
  const onChangeA = (value) => {
    setinputAvalue(value);
    return size(
      value,
      inputBvalue,
      inputCvalue,
      inputDvalue,
      inputOvalue,
      inputRvalue
      // inputPvalue,
      // inputLHvalue
    );
  };
  const onChangeB = (value) => {
    setinputBvalue(value);
    return size(
      inputAvalue,
      value,
      inputCvalue,
      inputDvalue,
      inputOvalue,
      inputRvalue
      // inputPvalue,
      // inputLHvalue
    );
  };
  const onChangeC = (value) => {
    setinputCvalue(value);
    return size(
      inputAvalue,
      inputBvalue,
      value,
      inputDvalue,
      inputOvalue,
      inputRvalue
      // inputPvalue,
      // inputLHvalue
    );
  };
  const onChangeD = (value) => {
    setinputDvalue(value);
    return size(
      inputAvalue,
      inputBvalue,
      inputCvalue,
      value,
      inputOvalue,
      inputRvalue
      // inputPvalue,
      // inputLHvalue
    );
  };
  const onChangeO = (value) => {
    setinputOvalue(value);
    return size(
      inputAvalue,
      inputBvalue,
      inputCvalue,
      inputDvalue,
      value,
      inputRvalue
      // inputPvalue,
      // inputLHvalue
    );
  };
  const onChangeR = (value) => {
    if (
      radianSelect === 'threelock' ||
      radianSelect === 'threeduallock' ||
      radianSelect === 'threelockul'
    ) {
      setinputRvalue(value);
      return size(
        inputAvalue,
        inputBvalue,
        inputCvalue,
        inputDvalue,
        inputOvalue,
        value
        // inputPvalue,
        // inputLHvalue
      );
    }
    /*  OLD */
    // if (
    //   radianSelect === 'threelock' ||
    //   radianSelect === 'threeduallock' ||
    //   radianSelect === 'threelockul'
    // ) {
    //   setinputRvalue(value);

    //   /* + */
    //   // กรณีที่ค่า R มากกว่า A และ B
    //   if (value >= inputAvalue && value >= inputBvalue) {
    //     setinputAvalue(value);
    //     setinputBvalue(value);
    //     return size(
    //       value,
    //       value,
    //       inputCvalue,
    //       inputDvalue,
    //       inputOvalue,
    //       value,
    //       inputPvalue,
    //       inputLHvalue
    //     );
    //   }
    //   // กรณีที่ R มากกว่า A และน้อยกว่า B
    //   else if (value >= inputAvalue && value <= inputBvalue) {
    //     setinputAvalue(value);
    //     return size(
    //       value,
    //       inputBvalue,
    //       inputCvalue,
    //       inputDvalue,
    //       inputOvalue,
    //       value,
    //       inputPvalue,
    //       inputLHvalue
    //     );
    //   }
    //   // กรณีที่ R น้อยกว่า A และมากกว่า B
    //   else if (value <= inputAvalue && value >= inputBvalue) {
    //     setinputBvalue(value);
    //     return size(
    //       inputAvalue,
    //       value,
    //       inputCvalue,
    //       inputDvalue,
    //       inputOvalue,
    //       value,
    //       inputPvalue,
    //       inputLHvalue
    //     );
    //   }

    //   /* - */
    //   // กรณีที่ค่า R น้อยกว่า A และ B
    //   if (value <= inputAvalue && value <= inputBvalue) {
    //     setinputAvalue(value);
    //     setinputBvalue(value);
    //     return size(
    //       value,
    //       value,
    //       inputCvalue,
    //       inputDvalue,
    //       inputOvalue,
    //       value,
    //       inputPvalue,
    //       inputLHvalue
    //     );
    //   }
    //   // กรณีที่ R น้อยกว่า A และมากกว่า B
    //   else if (value <= inputAvalue && value >= inputBvalue) {
    //     setinputAvalue(value);
    //     return size(
    //       value,
    //       inputBvalue,
    //       inputCvalue,
    //       inputDvalue,
    //       inputOvalue,
    //       value,
    //       inputPvalue,
    //       inputLHvalue
    //     );
    //   }
    //   // กรณีที่ R มากกว่า A และน้อยกว่า B
    //   else if (value >= inputAvalue && value <= inputBvalue) {
    //     setinputBvalue(value);
    //     return size(
    //       inputAvalue,
    //       value,
    //       inputCvalue,
    //       inputDvalue,
    //       inputOvalue,
    //       value,
    //       inputPvalue,
    //       inputLHvalue
    //     );
    //   }
    // }
  };
  // const onChangeP = (value) => {
  //   setinputPvalue(value);
  //   return size(
  //     inputAvalue,
  //     inputBvalue,
  //     inputCvalue,
  //     inputDvalue,
  //     inputOvalue,
  //     inputRvalue,
  //     value,
  //     inputLHvalue
  //   );
  // };
  // const onChangeLH = (value) => {
  //   setinputLHvalue(value);
  //   return size(
  //     inputAvalue,
  //     inputBvalue,
  //     inputCvalue,
  //     inputDvalue,
  //     inputOvalue,
  //     inputRvalue,
  //     inputPvalue,
  //     value
  //   );
  // };

  /* onClick */
  const closeBox = () => {
    setBox('closeBox');
    return clb();
  };
  const openBox = () => {
    setBox('openBox');
    return opb();
  };
  const showModel = () => {
    setModel('showModel');
    return shm();
  };
  const delModel = () => {
    setModel('delModel');
    return dlm();
  };

  return (
    <div>
      <Menu
        theme='dark'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        style={{ minHeight: '100vh', maxHeight: '50vh', overflow: 'auto' }}
      >
        <SubMenu key='sub1' icon={<SettingOutlined />} title='การปรับขนาดกล่อง'>
          <Menu.Item key='1'>
            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={200}
                  onChange={onChangeA}
                  value={typeof inputAvalue === 'number' ? inputAvalue : 0}
                  step={1}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={200}
                  style={{ margin: '0 16px' }}
                  step={1}
                  value={inputAvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeA}
                />
                กว้าง
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={200}
                  onChange={onChangeB}
                  value={typeof inputBvalue === 'number' ? inputBvalue : 0}
                  step={1}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={200}
                  style={{ margin: '0 16px' }}
                  step={1}
                  value={inputBvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeB}
                />
                ลึก
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={200}
                  onChange={onChangeC}
                  value={typeof inputCvalue === 'number' ? inputCvalue : 0}
                  step={1}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={200}
                  style={{ margin: '0 16px' }}
                  step={1}
                  value={inputCvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeC}
                />
                สูง
              </Col>
            </Row>
          </Menu.Item>
          <hr />
          <Menu.Item>
            <Row>
              <Col span={12}>
                <Slider
                  min={0.1}
                  max={10}
                  onChange={onChangeD}
                  value={typeof inputDvalue === 'number' ? inputDvalue : 0}
                  step={0.1}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={0.1}
                  max={10}
                  style={{ margin: '0 16px' }}
                  step={0.1}
                  value={inputDvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeD}
                />
                ความหนา
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={12}>
                <Slider
                  min={0.1}
                  max={1}
                  onChange={onChangeO}
                  value={typeof inputOvalue === 'number' ? inputOvalue : 0}
                  step={0.1}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={0.1}
                  max={1}
                  style={{ margin: '0 16px' }}
                  step={0.1}
                  value={inputOvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeO}
                />
                ความโปร่งแสง
              </Col>
            </Row>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          icon={<CodeSandboxOutlined />}
          title='การปรับขนาดชิ้นส่วนกล่อง'
        >
          <Menu.Item>
            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={200}
                  onChange={onChangeR}
                  value={typeof inputRvalue === 'number' ? inputRvalue : 0}
                  step={1}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={200}
                  style={{ margin: '0 16px' }}
                  step={1}
                  value={inputRvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeR}
                />
                รัศมีครึ่งวงกลม
              </Col>
            </Row>
          </Menu.Item>
          {/* <Menu.Item>
            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={200}
                  onChange={onChangeP}
                  value={typeof inputPvalue === 'number' ? inputPvalue : 0}
                  step={1}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={200}
                  style={{ margin: '0 16px' }}
                  step={1}
                  value={inputPvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeP}
                />
                ฝาเสียบ
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={200}
                  onChange={onChangeLH}
                  value={typeof inputLHvalue === 'number' ? inputLHvalue : 0}
                  step={1}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={200}
                  style={{ margin: '0 16px' }}
                  step={1}
                  value={inputLHvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeLH}
                />
                ผนังกันฝุ่น
              </Col>
            </Row>
          </Menu.Item> */}
        </SubMenu>
        <SubMenu icon={<DropboxOutlined />} title='การควบคุมการเคลื่อนไหว'>
          <Menu.Item>
            <Switch
              onClick={() => changeBox(checkOpenBox ? 'open' : 'close')}
              checkedChildren={'พับกล่อง'}
              unCheckedChildren={'กางกล่อง'}
            />
          </Menu.Item>
          <Menu.Item>
            <Switch
              onClick={() => changeModel(checkShowModel ? 'delObj' : 'Obj')}
              checkedChildren={'เปิดโมเดล'}
              unCheckedChildren={'ปิดโมเดล'}
            />
          </Menu.Item>
        </SubMenu>
        <SubMenu icon={<CodepenOutlined />} title='กล่องรูปทรงอื่น'>
          <SubMenu title='Food boxes'>
            <Menu.Item>
              <a href='/food1171'>food-1171</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/food1202'>food-1202</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/food1207'>food-1207</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title='Tuck End Boxes'>
            <Menu.Item>
              <a href='#'>tuck-10101</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title='Snap lock boxes'>
            <Menu.Item>
              <a href='/'>snap-boxes</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/snap191'>snap-1910</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title='Tray boxes'>
            <Menu.Item>
              <a href='/tray1171'>tray-1171</a>
            </Menu.Item>
            <SubMenu title='tray-11a05'>
              <Menu.Item>
                <a href='/trays'>Tray</a>
              </Menu.Item>
              <Menu.Item>
                <a href='/tray'>Boxes</a>
              </Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu title='Shirt boxes'>
            <Menu.Item>
              <a href='/shirt'>shirt-12405</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title='Glove boxes'>
            <Menu.Item>
              <a href='/glovebox'>glove-boxes</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title='Carry boxes'>
            <Menu.Item>
              <a href='/carry'>carry-0000</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title='Carton bags & pillows'>
            <Menu.Item>
              <a href='/cartoonbag'>cartoonbag-1210c</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title='Lock boxes'>
            <Menu.Item>
              <a href='/threelock'>lock boxes</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/threeduallock'>lock boxes - twin</a>
            </Menu.Item>
            <Menu.Item>
              <a href='/threelockul'>lock boxes - upper & bottom</a>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Menus;
