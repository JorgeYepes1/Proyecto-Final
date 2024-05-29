import { Layout } from 'antd'

const PublicLayout = ({ children }) => {

    return (
        <Layout className='public-container-layout'>
            <div className='login-container'>
                {children}
            </div>
        </Layout>
    )
}

export default PublicLayout