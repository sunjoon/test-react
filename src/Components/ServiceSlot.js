import React, { Component } from 'react';
import styled from 'styled-components';


const ServiceSlotBlock = styled.div`
    width: 200px; 
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
    }
    .status {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
    }
    .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
    }
`;


class ServiceSlot extends Component{
    render(){
        return(
            <div> 
         

                <ServiceSlotBlock>
                    <h1>{this.props.title}</h1>
                    <div className="status">{this.props.status}</div>

                    <div className="tasks-left">3 days left</div>
                 
                </ServiceSlotBlock>
      
            </div>
        );
    }
}



export default ServiceSlot;