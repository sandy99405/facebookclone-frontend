import React, { Component } from 'react'
import './RightSide.css'
import ImageLayout from '../ImageLayout'
import covid from '../../../../images/images/covid.png'

class RightSide extends Component {
    constructor(props){
        super(props)
        this.state={
              data:[]
        }
    }


    getData=()=>{
       let json = [
        {
          "image" : covid,
          "text"  : "COVID-19 Information center"
      },
      {
          "image" : covid,
          "text"  : "COVID-19 Information center2"
      }]

      this.setState({
         data:json
      })
    }

      componentDidMount(){
           this.getData();
      }

  render() {
    return (
      <div className='rightside_container'>
          <div className='rightside_header'>
               Contacts
          </div> 
          <div className='rightside_content'>
             {
              this.state.data.map((item,index)=>(
                <ImageLayout key={index} image={item.image} text={item.text}/>
              ))
             }
          </div>
      </div>
    )
  }
}

export default RightSide