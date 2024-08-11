import "./Header.css";
import { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Kohantika</div>
      </div>
      <div className="n-right">
        <div className="hamburger">
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            style={{ backgroundColor: "rgb(159, 14, 159)" }}
          >
            Menu
          </Button>
          <Drawer
            title="MySite"
            placement="right"
            onClose={onClose}
            visible={visible}
            width={200}
          >
            <Menu mode="inline">
              <Menu.Item key="1">
                <a href="">Home</a>
              </Menu.Item>
              <Menu.Item key="2">
                <a href="#about">About Me</a>
              </Menu.Item>
              <Menu.Item key="3">
                <a href="#skills">Skills</a>
              </Menu.Item>
              <Menu.Item key="4">
                <a href="#projects">Projects</a>
              </Menu.Item>
              <Menu.Item key="5">
                <a href="#contact">Contact</a>
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
        <nav className="n-list">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <button className="n-button">
              <a href="#contact">Contact</a>
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
