import {Component} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'

class SearchBox extends Component{
    render(){
        return(
            <div>
                <input className='form-control' placeholder='Type movie to search...'
                onChange={(event)=>this.props.setSearchValue(event.target.value)}/>

            </div>
        )
    }
}
export default SearchBox