
import { React , useState } from 'react'
import { useHistory , useParams} from 'react-router-dom'
import styled from 'styled-components'

let box = styled.div`
    padding : 20px;
    
`
let 제목 = styled.h4`
    font-size : 25px;
`


function Detail(props){

    let { id } = useParams();
    let history = useHistory();

    let findObject = props.shoes.find(item=>item.id === Number(id))

    return (
        <div className="container">
            <box>
                <제목>Detail</제목>
            </box>
            <div className="row">
                <div className="col-md-6">
                <img src={findObject.url} width="100%" />
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