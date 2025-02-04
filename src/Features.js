import React, { Component } from 'react'
import './App.css'
import Options from './Options'

class Features extends Component {
    render(){
       

        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            
            return (
                <fieldset className="feature" key={featureHash}>
                  <legend className="feature__name">
                    <h3>{feature}</h3>
                  </legend>
                  <Options features={this.props.features} 
                    feature={feature} 
                    selected={this.props.selected} 
                    updateFeature={this.props.updateFeature}/>
                </fieldset>
            )
        })

        return(
            <div>{features}</div>
        )
    }
}

export default Features;
