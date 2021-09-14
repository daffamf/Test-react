
import React, { Component } from 'react'
import './styles.css'
import { InputGroup, FormControl } from 'react-bootstrap'
import SearchLogo from '@material-ui/icons/Search';
// import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios'


export default class index extends Component {

    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        const Url = 'https://restcountries.eu/rest/v2/all'
        axios.get(Url)
            .then(users => {
                this.setState({
                    users: users.data
                })
            })
    }

    render() {
        return (
            <div>
                <div className="counter">
                    <h1 className="h1">Country</h1>
                </div>
                <div className="Form">
                    <InputGroup className='inputGroup'>
                        <FormControl
                            type="text"
                            placeholder="Type any country name"

                        />
                        <div className="searchLogo">
                            <SearchLogo />
                        </div>

                    </InputGroup>
                    <div className="dataResult">

                        {this.state.users.map((user, key) => {
                            return (
                                <p1 className="dataItem" href='/Country' ><p>{user.name}</p></p1>
                            )

                        })}
                    </div>
                </div>
            </div>
        )
    }
}
