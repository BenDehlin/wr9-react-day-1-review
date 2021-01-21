import {Component} from 'react'

class People extends Component{
    constructor(){
        super()
        //our 3 pieces of state are an array of people, a name string for our name input field, and an age for
        //our age input field. The items in the people array are objects with a name and an age attached.
        this.state = {
            people: [
                {name: 'Ben', age: 28},
                {name: 'Cole', age: 27}
            ],
            name: '',
            age: ''
        }
    }

    //function for the delete person button inside of our map to delete the specified person out of the array.
    //this function takes in the index we would like to delete out of the array, it is passed in by the map when
    //the function is called.
    deletePerson = (index) => {
        const people = [...this.state.people]
        people.splice(index, 1)
        this.setState({
            people
        })
    }

    //Function for the name input field to update the name piece of state
    nameHandler = (event) => {
        this.setState({name: event.target.value})
    }

    //Function for the age input field to update the age piece of state
    ageHandler = (event) => {
        this.setState({age: event.target.value})
    }

    //Function for the Add Person button to add the person's info from the name input field and age input field
    //to the people array. It also sets the state of name and age back to empty strings to clear those input fields.
    addToArray = () => {
        const {people, name, age} = this.state
        this.setState({
            people: [{name, age}, ...people],
            name: '',
            age: ''
        })
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <div>
                    {/* name input field */}
                    <input value={this.state.name} onChange={(event) => {this.nameHandler(event)}} />
                    {/* age input field */}
                    <input value={this.state.age} onChange={(event) => {this.ageHandler(event)}} />
                    {/* Add Person Button */}
                    <button onClick={() => {this.addToArray()}}>Add Person</button>
                </div>
                {/* mapping over the people array and returning a div for each element in our array displaying
                the name of the person, the age of the person, and a button to delete the person out of the array */}
                {this.state.people.map((element, index) => {
                    return (
                        <div key={index} className="person-card">
                            <h2>Name: {element.name}</h2>
                            <h2>Age: {element.age}</h2>
                            <button onClick={() => {this.deletePerson(index)}}>Delete Person</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default People