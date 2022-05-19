import {Component} from 'react'


class FilterYear extends Component{
    render(){
        return(
            <div>
                <input className='form-control' placeholder='Type movie year...'
                onChange={(event)=>this.props.setFilterYearValue(event.target.value)}/>

            </div>
        )
    }
}
export default FilterYear