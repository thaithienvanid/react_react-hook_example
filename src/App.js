import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Row, Col, Menu } from "antd";

import { PrivateRoute, LoginPage, UserMenu, Page } from "./components/common";

import "./App.css";

const { Header, Footer } = Layout;
const { SubMenu } = Menu;

const Home = () => {
  const name = "Home";
  return (
    <Page name={name}>
      <h1>{name}</h1>
      <span>Content</span>
    </Page>
  );
};

const About = () => {
  const name = "About";
  return (
    <Page name={name}>
      <h1>{name}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vulputate eu
        scelerisque felis imperdiet proin fermentum leo. Et malesuada fames ac
        turpis. Et odio pellentesque diam volutpat commodo sed egestas egestas.
        Amet nisl purus in mollis. Massa sapien faucibus et molestie ac. Euismod
        quis viverra nibh cras pulvinar mattis nunc. Ipsum dolor sit amet
        consectetur adipiscing elit pellentesque habitant morbi. Metus dictum at
        tempor commodo. Vitae purus faucibus ornare suspendisse sed. Arcu non
        odio euismod lacinia at quis. In hac habitasse platea dictumst
        vestibulum rhoncus. Rhoncus urna neque viverra justo nec ultrices dui
        sapien. Amet nisl purus in mollis nunc sed id semper risus. Lobortis
        feugiat vivamus at augue. Velit sed ullamcorper morbi tincidunt ornare.
        Non odio euismod lacinia at quis risus.
      </p>
      <p>
        Enim facilisis gravida neque convallis a cras semper auctor. Nec
        ullamcorper sit amet risus nullam eget felis. Dui faucibus in ornare
        quam viverra. Id aliquet lectus proin nibh. Mauris pharetra et ultrices
        neque ornare. Semper viverra nam libero justo laoreet sit amet cursus
        sit. Amet porttitor eget dolor morbi non arcu risus. Donec massa sapien
        faucibus et molestie. Pharetra sit amet aliquam id diam maecenas
        ultricies mi eget. Amet nisl purus in mollis nunc sed id. Ut tristique
        et egestas quis ipsum suspendisse ultrices gravida.
      </p>
      <p>
        Nisi porta lorem mollis aliquam ut porttitor leo a. Mi quis hendrerit
        dolor magna eget est lorem ipsum. Commodo quis imperdiet massa tincidunt
        nunc pulvinar sapien et. Aliquam vestibulum morbi blandit cursus risus
        at ultrices. Aliquam purus sit amet luctus venenatis. Et malesuada fames
        ac turpis egestas integer eget aliquet nibh. Feugiat pretium nibh ipsum
        consequat nisl vel pretium lectus. Interdum consectetur libero id
        faucibus nisl tincidunt eget nullam non. Eget aliquet nibh praesent
        tristique magna sit. Dictumst quisque sagittis purus sit amet volutpat
        consequat mauris. At consectetur lorem donec massa sapien faucibus et
        molestie ac. Mi in nulla posuere sollicitudin aliquam ultrices sagittis
        orci a.
      </p>
      <p>
        Et odio pellentesque diam volutpat commodo sed. Sit amet est placerat in
        egestas erat imperdiet sed. Cras pulvinar mattis nunc sed blandit
        libero. Pellentesque massa placerat duis ultricies lacus sed turpis
        tincidunt id. Sit amet facilisis magna etiam tempor. Ac placerat
        vestibulum lectus mauris ultrices. Dui sapien eget mi proin. Orci
        sagittis eu volutpat odio facilisis mauris sit. Vitae congue mauris
        rhoncus aenean. Duis ut diam quam nulla porttitor massa id. Urna et
        pharetra pharetra massa massa ultricies mi. Quis blandit turpis cursus
        in hac habitasse platea dictumst quisque. Dolor morbi non arcu risus
        quis varius quam. Ut pharetra sit amet aliquam id diam maecenas. Donec
        pretium vulputate sapien nec sagittis.
      </p>
      <p>
        Egestas erat imperdiet sed euismod nisi porta lorem mollis. Sapien
        pellentesque habitant morbi tristique senectus et netus et. Ultricies mi
        eget mauris pharetra et ultrices neque. Quis risus sed vulputate odio ut
        enim. Quis hendrerit dolor magna eget est lorem ipsum. Vitae congue
        mauris rhoncus aenean vel. Fermentum leo vel orci porta non pulvinar
        neque laoreet suspendisse. Arcu vitae elementum curabitur vitae nunc.
        Nam libero justo laoreet sit amet cursus sit. Tincidunt vitae semper
        quis lectus nulla at. Mi eget mauris pharetra et ultrices neque ornare.
        Neque ornare aenean euismod elementum nisi quis eleifend quam. Sociis
        natoque penatibus et magnis dis parturient montes. Tempor commodo
        ullamcorper a lacus vestibulum sed arcu. Diam maecenas ultricies mi eget
        mauris.
      </p>
    </Page>
  );
};

const App = () => {
  const now = new Date();

  return (
    <div className="App">
        <Router>
          <div>
            <Layout className="layout">
              <Header>
                <Row>
                  <Col span={2}>
                    <div className="logo" />
                  </Col>
                  <Col span={20}>
                    <Menu theme="dark" mode="horizontal">
                      <SubMenu title="AIO">
                        <Menu.Item key="aio:home">
                          <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                          <Link to="/about">About</Link>
                        </Menu.Item>
                      </SubMenu>
                      <SubMenu title="Admin">
                        <Menu.Item key="admin:user">
                          <Link to="/admin_user">User</Link>
                        </Menu.Item>
                        <Menu.Item key="admin:group">
                          <Link to="/admin_group">Group</Link>
                        </Menu.Item>
                        <Menu.Item key="admin:permission">
                          <Link to="/admin_permission">Permission</Link>
                        </Menu.Item>
                      </SubMenu>
                    </Menu>
                  </Col>
                  <Col span={2}>
                    <UserMenu />
                  </Col>
                </Row>
              </Header>
              <Switch>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <PrivateRoute path="/" exact={true}>
                  <Home />
                </PrivateRoute>
                <PrivateRoute path="/admin_user">
                  <Page name="admin_user" />
                </PrivateRoute>
                <PrivateRoute path="/admin_group">
                  <Page name="admin_group" />
                </PrivateRoute>
                <PrivateRoute path="/admin_permission">
                  <Page name="admin_permission" />
                </PrivateRoute>
              </Switch>
              <Footer style={{ textAlign: "center" }}>
                AIO @{now.getFullYear()}
              </Footer>
            </Layout>
          </div>
        </Router>
    </div>
  );
};

export default App;
