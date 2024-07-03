import { Component } from "react";
import { Link } from "react-router-dom";

class DataPage extends Component {
    constructor() {
        super()
        console.log('constructor');
        this.state = {
            data: [],
            dataDetail: 'Data not updated'
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('get Derived State From Props');

        return null
    }

    componentDidMount() {
        console.log('component Did Mount');

        setTimeout(() => {
            getData()
        }, 2000);

        // const getUTXOs = async () => {


        //     const url = "https://jsonplaceholder.typicode.com/users";
        //     const response =  await fetch(url);
        //     console.log('response',response);

        //     return response.json();
        // };

        const getData = async () => {
            // try {
            //     const response = await getUTXOs()

            //     console.log(response);
            //     // const userData=await response.json()
            //     // // let userData = getUTXOs()

            //     // this.setState({ data: userData })
            // } catch (error) {
            //     console.log(error)
            // }

            // const url = "https://jsonplaceholder.typicode.com/users";
            // fetch(url)
            // .then(res=>{
            //     console.log(res);
            //     return res.json()
            // })
            // .then(userData=>{
            //     console.log(userData);
            //     this.setState({ data: userData })
            // })

            fetch("http://node.mitrahsoft.co.in/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: {
                    first_name: 'prathap',
                    last_name: 's',
                    email: 'p@gmail.com',
                    password: '12345679'
                },
            }).then(res => {
                console.log(res);
                return res.json()
            }).then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            })
        }
    }

    shouldComponentUpdate(props, state) {
        console.log('should Component Update');
        if (state.data.length) {
            return true
        }
        return false
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('get Snapshot Before Update');
        return this.state.data
    }

    componentDidUpdate(prevProps, prevState, returnedValue) {
        console.log('component Did Update');
        if (returnedValue.length !== prevState.data.length) {
            this.setState({ dataDetail: 'Data is updated' })
        }
    }

    componentWillUnmount() {
        console.log('component Will Unmount');
        this.state.data = []
        console.log(this.state.data);
        alert('Your data will be deleted')
    }

    render() {
        console.log('render', this.state.data);
        return (
            <>
                <div className="diplay-flex justify-content-center">
                    <div className="text-align-center">
                        <p className={`${this.state.data.length ? 'color-green' : 'color-red'} underline`}>User Names</p>
                        {
                            this.state.data.map((obj) => {
                                return <p key={obj.id}>{obj.name}</p>
                            })
                        }
                        <p className="border">{this.state.dataDetail}</p>
                        <Link to='/nextPage'><button>Go next page</button></Link>
                    </div>
                </div>
            </>
        )
    }
}
export default DataPage