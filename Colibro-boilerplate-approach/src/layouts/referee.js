import { useSelector } from 'react-redux'
import PrivateLayout from './Private/PrivateLayout'
import PublicLayout from './Public/PublicLayout'

const Referee = ({ children }) => {

    // Login placeholder
    const {isLogin}=useSelector(state=>state.Pag)

    if (isLogin)
        return (
            <PrivateLayout>
                {children}
            </PrivateLayout>
        )

    return (
        <PublicLayout>
            {children}
        </PublicLayout>
    )
}

export default Referee
