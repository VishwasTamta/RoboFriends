import React, {useState, useEffect} from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/searchbox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry'

function App() {
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchField: ''
    //     }
    // }
    const [robots, SetRobots] = useState([]);
    const [searchField, SetSearchField] = useState('');
    const [count, setCount] = useState(0);
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({robots: users}))
    // }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => SetRobots(users))
            console.log(count);
    }, [count]) // Should remove count because it is rendering again and again by clicking Click me button
    
    const onSearchChange = (event) =>{
        SetSearchField(event.target.value)
    }
        const filterRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?
            <h1 className='tc f1 tm'>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <button onClick={()=> setCount(count+1)}>Click Me</button>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll >
                        <ErrorBoundry>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
}

export default App;