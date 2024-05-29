import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from 'react-router-dom';
import { PagActions } from "../../../services/common/Pag/PagSlice"
import LdJson from "react-ld-json"


export const HistoryDetail = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const { Author, Books, AudioBooks, Comics } = useSelector(state => state.Pag)

    useEffect(() => {
        const data = {
            id: location.state.id
        }
        dispatch(PagActions.getAuthor(data))
        dispatch(PagActions.getAudioBooks(data))
        dispatch(PagActions.getBooks(data))
        dispatch(PagActions.getComics(data))
    }, [dispatch, location.state.id])
    return (
        <div className='sceneHistoryDetail'>
            {Author[0] && <LdJson
                data={
                    {
                        "@context": "https://schema.org/Book",
                        "@type": "ex:Book",
                        "name": location.state.title,
                        "description": location.state.desc,
                        "author": Author[0].o.properties.NombreAutor
                    }
                }
            />}
            <img src={location.state.img} alt='imagen' className='imgHistoryDetail'></img>
            <div className='divData'>
                <div className='divTitleAuthor'>
                    <p className='ptitle'>{location.state.title}</p>
                    {Author[0] && <p className='pauthor'>{Author[0].o.properties.NombreAutor}</p>}
                </div>
                <p className='pdesc'>{location.state.desc}</p>
                <div className='div3Childs'>
                    <div>
                        <p>Libros</p>
                        {Books.map(data=>(
                            <p className='pBook'>{data.o.properties.Nombre}</p>
                        ))}
                    </div>
                    <div>
                        <p>AudioLibros</p>
                        {AudioBooks.map(data=>(
                            <p className='pBook'>{data.o.properties.Nombre}</p>
                        ))}
                    </div>
                    <div>
                        <p>Comics</p>
                        {Comics.map(data=>(
                            <p className='pBook'>{data.o.properties.Nombre}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}