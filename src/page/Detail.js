
import { React , useEffect, useState } from 'react'
import { useHistory , useParams} from 'react-router-dom' 
import '../detail2.scss'

function Detail(props){

    let [isShow,isChangeShow] = useState(true)
    let [inputData,changeInput] = useState('')
    let { id } = useParams();
    let history = useHistory();

    useEffect(()=>{ 
        let timger = setTimeout(()=>{
            isChangeShow(false)
        },2000)
        console.log(111111111111111111)
       return ()=>{
          clearTimeout(timger) 
       }
    },[])

    useEffect(()=>{ 
        console.log(2222222)
       
    },[inputData])

    let findObject = props.shoes.find(item=>item.id === Number(id))

    return (
        
        <div className="container">
            {inputData}
            <input onChange={(e)=>{changeInput(e.target.value)}}></input>
            {
                isShow ? <div className="my-alert" id="my-alert" >
                                    <p>
                                    재고가 얼마 남지 않았습니다.
                                    </p>
                                </div> : null
            }
            
            <div className="row">
                <div className="col-md-6" >
                <img src={findObject.url} width="100%" alt=""/>
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{findObject.title}</h4>
                <p>{findObject.content}</p>
                <p>{findObject.price}</p>
                <button className="btn btn-danger">주문하기</button> 
                &nbsp;
                <button className="btn btn-danger" onClick={()=>{
                    history.goBack()
                }}>뒤로가기</button> 
                </div>
            </div>
        </div> 
    )
}
export default Detail