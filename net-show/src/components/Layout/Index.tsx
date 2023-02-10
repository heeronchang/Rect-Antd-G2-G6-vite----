import { Layout } from "antd";
import { Col, Row } from "antd";
const { Header, Footer, Content } = Layout;
import "./index.scss";

import Net from "@/components/Net/Index";
import BandWidth from "@/components/BandWith/Index";

const AppLayout: React.FC = () => (
  <>
    <Layout className="app-layout">
      <Header className="header">区块链网络</Header>
      <Content className="content">
        <Row className="row">
          <Col className="col" span={12}>
            <Net />
          </Col>
          <Col className="col" span={12}>
            <BandWidth />
          </Col>
        </Row>
      </Content>
      <Footer className="footer">Designed by 北京聚义岩科技有限公司</Footer>
    </Layout>
  </>
);

export default AppLayout;
