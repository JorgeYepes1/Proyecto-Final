import Logo from '../../../assets/images/Logo.png'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

export const Home = () => {
    const history=useHistory()
    return (
        <div className='sceneHome'>
            <div className='divTitle'>
                <p>Colibró</p>
                <img src={Logo} alt='Logo'></img>
            </div>
            <div className='divQuestions'>
                <p>
                    ¿Te gusta escribir, dibujar
                    o interpretar?
                </p>
                <p>
                    ¿Te gusta leer libros, audiolibros o
                    comics?
                </p>
            </div>
            <div className='divText'>
                <p>
                    Aquí en Colibró podrás escribir tus propias
                    historias, así sea escribiendo,
                    ilustrando y/o interpretando las voces
                    de tus personajes
                </p>
                <p>
                    Colibró tiene a disposición todo tipo de literatura
                    en diferentes medios; como lo son literatura
                    ilustrada, comics y audiolibros
                </p>
            </div>
            <div className='divColabText'>
                <p>Y todo de forma colaborativa.</p>
            </div>
            <div className='divLoginButton'>
                <Button
                    className='boton'
                    onClick={()=>history.push('/login')}
                    style={{
                        background: '#F4A052',
                        width: '24vw',
                        height: '4vw',
                        color: 'white',
                        fontSize: '1.8vw',
                    }}
                    type="primary">
                    Inicia sesion
                </Button>
            </div>
        </div>
    )
}