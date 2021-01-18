import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Button, Row, Typography, Card } from "antd";
import { ArrowLeftOutlined, StarOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { clearCharacter } from "../redux/actions/imageAction";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const Actor = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { imagen } = useSelector((state) => state.image);
  const actor = imagen?.data.results;

  const handleBack = () => {
    dispatch(clearCharacter());
    history.replace("/");
  };

  return (
    <Layout style={{ background: "#ffff", margin: "20px" }}>
      <Header style={{ background: "#ffff", margin: "20px" }}>
        <Button
          type="primary"
          shape="round"
          icon={<ArrowLeftOutlined />}
          size="large"
          onClick={handleBack}
        >
          Regresar
        </Button>
      </Header>
      <Layout>
        <Sider
          style={{
            background: "#ffff",
          }}
        >
          <Row>
            <img
              src={`https://image.tmdb.org/t/p/w185/${actor[0]?.profile_path}`}
              className="imagen"
            />
          </Row>

          <Row>
            <Title className="letter" level={2}>
              {actor[0].name}
            </Title>
          </Row>
          <Row>
            <Title className="letter" level={3}>
              {actor[0].gender === 2 ? "Hombre" : "Mujer"}
            </Title>
          </Row>
          <Row>
            <Title className="letter" level={5}>
              Pupularidad {actor[0].popularity}
            </Title>
          </Row>
        </Sider>
        <Content style={{ background: "#ffff" }}>
          <Row>
            <Title className="letter">Peliculas</Title>
          </Row>
          <Row>
            {actor[0].known_for?.map((element) => (
              <div className="card" key={element.id}>
                <Card
                  hoverable
                  style={{ width: 240, marginTop: " 10px" }}
                  cover={
                    <img
                      src={`https://image.tmdb.org/t/p/w185/${element.poster_path}`}
                    />
                  }
                >
                  <Title level={2}>{element.original_title}</Title>
                  <p>{element.overview}</p>
                  <p>{element.vote_average}/10</p> <StarOutlined />
                </Card>
              </div>
            ))}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Actor;
