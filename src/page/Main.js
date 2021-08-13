

import CardList from '../component/CardList'

function Main(props){
    return(
      <div className="container">
          <div className="row"> 
            <CardList shoes={props.shoes}/>
          </div>
        </div>
    )
}

export default Main;