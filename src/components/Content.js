import React, { Component } from 'react'
import './Content.css'


export default class Content extends Component {
  render() {
    
    const info = this.props.piece;

    return (
      <div className="content-container">
        <div className="content-top">
          <div style={{width:"10%", textAlign:"center"}}>
            <div className="numbering">{info.uuid}</div>
          </div>
          <div className="imageTextContainer">
            <div className="imageLabel">
              <img src={info.image} alt={info.image} />
            </div>
            <div className="description">
              <p><b>{info.title}</b></p>
              <p>{info.description}</p>
            </div>
          </div>
        </div>
        <div className="content-bottom">
          { info["home-loan"] ?
            <div className="detail-style">
            <p><b>Home Loan Details</b></p>
            <div className="details">
              <div>
                <p>Home Loan</p>
                <p>SGD 500,000</p>
              </div>
              <div>
                <p>Loan Tenure</p>
                <p>25 Years</p>
              </div>
              <div>
                <p>Interest Rate</p>
                <p>3%</p>
              </div>
            </div>
          </div>
            : null 
          }
          
          { info["home-loan"] ?
            <div className="detail-style">
            <p><b>Policy Details</b></p>
            <div className="details">
              <div>
                <p>Coverage Amount</p>
                <p>SGD 500,000</p>
              </div>
              <div>
                <p>Policy Term</p>
                <p>25 Years</p>
              </div>
              <div>
                <p>Decreasing Rate</p>
                <p>3%</p>
              </div>
            </div>
          </div>
            : null  
          }

          { info["payout"] ?
            <div className="payout-style">
            <p><b>Payout</b></p>
            <div className="payout-details">
              <div>
                <p>Outstanding Home Loan</p>
                <p>SGD 442,626</p>
              </div>
              <div>
                <p>Lumpsum Payout</p>
                <p>SGD 442,626</p>
              </div>
            </div>
          </div>
            : null
          }
        </div>
      </div>
    )
  }
}
