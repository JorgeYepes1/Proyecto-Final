import { Layout } from "antd";
import Logo from '../../../assets/images/Logo.png'

const { Header } = Layout;

const PrivateHeader = () => {

  return (
    <Header className="private-header-layout">
     <p>Colibró</p>
     <img src={Logo} alt='Logo'></img>
    </Header>
  );
};

export default PrivateHeader;
