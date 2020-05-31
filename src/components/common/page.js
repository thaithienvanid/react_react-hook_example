import React from "react";

import { useLocation } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";
import { pascalCase } from "change-case";

import { useAuthContext } from "../../context";

const { Content } = Layout;

export const Page = ({ children, name }) => {
  const { user } = useAuthContext();

  const location = useLocation();
  const breadcrumb = pascalCase(name || "");

  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>AIO</Breadcrumb.Item>
        <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">{children}</div>
    </Content>
  );
};
