import React, { Component } from 'react'
import ImageLayout from '../ImageLayout'
import covid from '../../../../images/images/covid.png'

class LeftSide extends Component {
    constructor(props){
        super(props);
        this.state={
             data:[]
        }
    }

    getData=()=>{
        let jsondata = [
            {
                "image" : covid,
                "text"  : "COVID-19 Information center"
            },
            {
                "image" : covid,
                "text"  : "COVID-19 Information center2"
            }
        ];
        this.setState({
            data:jsondata
        });
    }

    componentDidMount() {
        this.getData();
    }

  render() {
    return (
      <div>
        {
            this.state.data.map((item,index)=>(
                  <ImageLayout key={index} image={item.image} text={item.text}/>
            ))
        }
      </div>
    )
  }
}

export default LeftSide