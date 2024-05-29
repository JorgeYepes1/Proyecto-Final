import { useLocation } from 'react-router'
import { Breadcrumb } from 'antd';
import { MapRouteBreaks } from '../../common/utils'

const CustomeBreadcrumb = () => {

    const location = useLocation()
    const mapRoutes = MapRouteBreaks(location.pathname, '/')

    return (
        <Breadcrumb className='private-breadcrumb-layout'>
            {
                mapRoutes.map(route => (
                    <Breadcrumb.Item key={route}>
                        {route.replace(/^\w/, (c) => c.toUpperCase())}
                    </Breadcrumb.Item>))
            }
        </Breadcrumb>
    )
}

export default CustomeBreadcrumb
