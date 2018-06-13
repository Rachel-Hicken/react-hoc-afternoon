import React, {Component} from 'react';

//Example of HOC
export default function Loading (WrappedComponent){
    return class extends Component{
        render(){
            return(
                <div>
                    {this.props.loading ? '...Loading': <WrappedComponent {...this.props}/>}
                    </div>

            )
        }
    }
}