import { Input } from "../../../components/Input/Input"
import { Button } from 'antd';
import { useDispatch } from 'react-redux'
import { PagActions } from '../../../services/common/Pag/PagSlice'
import { useHistory } from 'react-router-dom'



export const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const login = () => {
        history.push('/homelogged')
        dispatch(PagActions.setIsLogin(true))
    }

    return (
        <div className='sceneLogin'>
            <div className='modal'>
                <div className='leftSide'>
                    <p>Inicia sesion</p>
                </div>
                <div className='rightSide'>
                    <Input type='text' label='Email' width={'30vw'} height={'8vh'} />
                    <Input type='password' label='Contraseña' width={'30vw'} height={'8vh'} />
                    <div className='divButton'>
                        <Button
                            onClick={() => login()}
                            style={{
                                background: '#F7B80A',
                                borderColor: 'white',
                                borderRadius: 10,
                                width: '15vw',
                                height: '8vh',
                                color: 'white',
                                fontSize: '1.7vw',
                                fontWeight: 'bold',

                            }}
                            type="primary">
                            INICIAR SESIÓN
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}