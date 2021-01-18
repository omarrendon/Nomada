import React, { useEffect, useState } from "react";
import { Upload, Layout, Typography, Row } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../redux/actions/imageAction";
import { useHistory } from "react-router-dom";

const { Title } = Typography;
const { Content } = Layout;
const { Dragger } = Upload;

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { imagen } = useSelector((state) => state.image);

  const handleUpload = (file) => {
    dispatch(getImage(file));
  };

  const props = {
    name: "file",
    maxCount: 1,
    accept: ".png,.PNG, .jpg, .JPG",

    beforeUpload: (file) => {
      handleUpload(file);
      return false;
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
    },
  };

  useEffect(() => {
    if (imagen?.status === 200) {
      history.push("/actor");
    }
  }, [imagen?.status]);

  return (
    <Layout>
      <Content style={{ background: "#fff " }}>
        <div className="site-layout-content">
          <Row justify="center">
            <Typography>
              <Title level={2}>¿Quién es este actor?</Title>
            </Typography>
          </Row>
          <Row justify="center">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Hz click aquí o arrastra una imagen
              </p>
              <p className="ant-upload-hint">
                Selecciona la foto de un actor famoso para conocer quién es y en
                que películas ha salido.
              </p>
            </Dragger>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
