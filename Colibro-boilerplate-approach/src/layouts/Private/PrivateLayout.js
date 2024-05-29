import { Layout } from 'antd';
import PrivateHeader from './Header/PrivateHeader'

const { Content } = Layout;

const PrivateLayout = ({ children }) => {

    return (
        <Layout className="layout">
            <PrivateHeader />
            <Content className='private-content-layout'>
                <div className="private-container-layout">
                    {children}
                </div>
            </Content>
        </Layout>
    )
}

export default PrivateLayout
