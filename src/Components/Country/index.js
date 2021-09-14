
import React, { Component } from 'react'
import './styles.css'
import Latlong from '../../pages/latLog/index'
import Capital from '../../pages/capital/index'
import CallCode from '../../pages/callingCode/index'
import Currency from '../../pages/currency/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="button"> 
                    <Link to="/">
                    <button className="button1"  ><FontAwesomeIcon icon={faArrowLeft} />Back to Homepage</button>
                    </Link>
                </div>
                
                <h1 className="country">Indonesia</h1>
                <h1 className="flag"></h1>
                <div className="id1">
                    <button className="id" >ID</button>
                </div>
                <div className="roi1">
                    <button className="roi" >Republic of Indonesia</button>
                </div> <div className="RI1">
                    <button className="RI" >Republik Indonesia</button>
                </div>
                <div className="latlong">
                    <Latlong  className="latLong" />
                </div>
                <div className="capital">
                    <Capital className="Capital" />
                </div>
                <CallCode />
                <Currency />
            </div>
        )
    }
}
