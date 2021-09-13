import  request from './connect'

export const addDataSuccess = (data)=>({
    type: 'GET_DATA',
    data
})
export const getdata = () => {
    return dispatch => {

        return request.get('/api/data')
        .then(users =>{
            this.setState({
                users:users.data
            })
         })
    }
}