import { Card } from 'antd';
import { useHistory } from 'react-router-dom';


export const History = ({id,title,desc,img,genre,pb}) => {
    const history=useHistory()
    const { Meta } = Card;
    return (
        <div className='sceneHistory'>
            <Card
            onClick={()=>history.push({pathname:'/historydetail',state:{img:img,title:title,desc:desc,id:id}})}
                style={{ width: '26vw', marginRight:'1vw',marginTop: "5vh",borderWidth:'0.7vw',borderColor:'#54bec5' }}
                cover={
                    <img
                        alt="example"
                        src={img}
                    />
                }
                
            >
            <p>{pb}</p>
            <p>{genre}</p>
                <Meta
                    title={title}
                    description={desc}
                />
            </Card>
        </div>
    )
}