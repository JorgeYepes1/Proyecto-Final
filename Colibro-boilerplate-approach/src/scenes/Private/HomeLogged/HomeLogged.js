import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  Select } from 'antd';
import { History } from "../../../components/History/History"
import { Input } from "../../../components/Input/Input"
import { PagActions } from "../../../services/common/Pag/PagSlice"
import LdJson from "react-ld-json";



export const HomeLogged = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('Selecciona género')
    const { Option } = Select;

    const { Historys } = useSelector(state => state.Pag)
    const getHistorys = () => {
        if (title === '' && genre === 'Selecciona género') {
            dispatch(PagActions.getAllHistorys())
        } else if (title === '') {
            const data = {
                genero: genre
            }
            dispatch(PagActions.getHistorysByGenre(data))
        } else if (genre === 'Selecciona género') {
            const data = {
                titulo: title,
            }
            dispatch(PagActions.getHistorysByTitle(data))
        } else {
            const data = {
                titulo: title,
                genero: genre
            }
            dispatch(PagActions.getHistorys(data))
        }
    }

    /* const data = {
        "@context": "http://json-ld.org/contexts/person.jsonld",
        "@id": "http://dbpedia.org/resource/John_Lennon",
        "name": "John Lennon",
        "born": "1940-10-09",
        "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
      }; */

    return (
        <div className='sceneHomeLogged'>
            {Historys && Historys.map(data => (
                <LdJson
                    data={
                        {
                            "@context": "https://schema.org/Book",
                            "@type": "ex:Book",
                            "name": data.n.properties.Titulo,
                            "description": data.n.properties.Descripcion,
                            "genre": data.o.properties.NombreGenero,
                        }
                    }
                />
            ))}
            <div>
                <Input
                    placeholder='Busqueda en catalogo'
                    width={'70vw'}
                    height={'7vh'}
                    setTitle={setTitle}
                />
                <Select onChange={e => setGenre(e)} bordered={false} defaultValue="Selecciona género" size={'large'} style={{ width: '13vw' }}>
                    <Option value="Selecciona género">Selecciona género</Option>
                    <Option value="Terror">Terror</Option>
                    <Option value="Misterio">Misterio</Option>
                    <Option value="Psicológico">Psicológico</Option>
                    <Option value="Ciencia ficcion">Ciencia ficcion</Option>
                    <Option value="Suspenso">Suspenso</Option>
                    <Option value="Fantasía">Fantasía</Option>
                    <Option value="Romance">Romance</Option>
                    <Option value="Aventura">Aventura</Option>
                    <Option value="Novelas">Novelas</Option>
                    <Option value="Cuentos de hadas">Cuentos de hadas</Option>
                </Select>
                <input type='button' onClick={() => getHistorys()} value='Buscar'></input>

            </div>
            <div className='cards'>
                {Historys && Historys.map(data => (
                    <History pb={data.g.properties.NombrePublico} genre={data.o.properties.NombreGenero} img={data.n.properties.image} id={data.n.identity.low} key={data.n.identity.low} title={data.n.properties.Titulo} desc={data.n.properties.Descripcion}></History>
                ))}
            </div>


        </div >
    )
}