import React, { useState } from "react";

import { useHistory, useLocation } from "react-router-dom";
import {
  Layout,
  Row,
  Col,
  Breadcrumb,
  Dropdown,
  Menu,
  Avatar,
  Input,
  Button,
  Spin,
} from "antd";

import { useAuthContext } from "../../context";

const { Content } = Layout;

export const LoginPage = () => {
  const { user, setUser } = useAuthContext();

  const location = useLocation();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onLogin = () => {
    setLoading(true);
    setTimeout(() => {
      const me = {
        name: "BOSS",
        access_token: "token",
        permissions: ["me.get"],
      };
      setUser(me);
      setLoading(false);
      history.push("/");
    }, 1000);
  };

  const onLoginGoogle = () => {
    setLoading(true);
    setTimeout(() => {
      const me = {
        name: "BOSS",
        access_token: "token",
        permissions: ["me.get"],
      };
      setUser(me);
      setLoading(false);
      history.push("/");
    }, 1000);
  };

  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>AIO</Breadcrumb.Item>
        <Breadcrumb.Item>Login</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-login">
        {loading ? (
          <Spin />
        ) : (
          <>
            <Row gutter={[16, 16]}>
              <Col className="gutter-row" span={10}></Col>
              <Col span={4}>
                <Input
                  onChange={onUsernameChange}
                  placeholder="Username"
                ></Input>
              </Col>
              <Col span={10}></Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col className="gutter-row" span={10}></Col>
              <Col span={4}>
                <Input.Password
                  onChange={onPasswordChange}
                  placeholder="Password"
                ></Input.Password>
              </Col>
              <Col span={10}></Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={10}></Col>
              <Col span={2}>
                <Button
                  onClick={onLogin}
                  type="primary"
                  loading={loading}
                  block
                >
                  Login
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  onClick={onLoginGoogle}
                  type="default"
                  loading={loading}
                  block
                >
                  Google
                </Button>
              </Col>
              <Col span={10}></Col>
            </Row>
          </>
        )}
      </div>
    </Content>
  );
};

export const UserMenu = () => {
  const { user, setUser } = useAuthContext();

  const location = useLocation();
  const history = useHistory();

  const onLogout = () => {
    setUser(null);
    history.push("/login");
  };

  return (
    <div className="user">
      {user ? (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item onClick={onLogout}>Logout</Menu.Item>
            </Menu>
          }
          placement="bottomCenter"
        >
          <Avatar>BOSS</Avatar>
        </Dropdown>
      ) : (
        <Avatar>BOSS</Avatar>
      )}
    </div>
  );
};
