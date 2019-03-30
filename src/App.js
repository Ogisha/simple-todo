import React from 'react';
import Header from './components/Header';
import OptionButtons from './components/OptionButtons';
import Options from './components/Options'
import AddOption from './components/AddOption';

export default class App extends React.Component {
    state = { 
        app_name: "To-Do App",
        app_description: "A simple organizer and planer",
        options: ["Practise coding", "Have some healty breakfast"]
    };

    removeAllOptions = () => {
        if (this.state.options.length != 0) 
            this.setState(() => ({ options: [] }))
    }

    addAnOption = (e) => {
        e.preventDefault();

        if (e.target.option.value != '') {
            let arrayFromState = this.state.options;
            arrayFromState.push(e.target.option.value)
            this.setState({
                options: arrayFromState
            });
            e.target.option.value = '';
        }

        else {
            alert("Please enter a valid option!");
        }
    }

    handleDeleteOption = (el) => {
        let helperElArray = el.split("<button>");
        let optionToDelete = helperElArray[0];
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                if (option != optionToDelete)
                    return true;
            })
        }))
    }

    componentDidMount() {
        let data = JSON.parse(localStorage.getItem("options"));
        console.log(data)
        this.setState(() => ({
            options: data
        }))
    }

    componentDidUpdate(prevProps, prevState) {
        let data = JSON.stringify(this.state.options);
        
        localStorage.setItem("options", data);
    }

    render() {
        return (
            <div>
                <Header name = {this.state.app_name} desc={this.state.app_description}/>
                <OptionButtons options={this.state.options} removeAllOptions={this.removeAllOptions} />
                <Options handleDeleteOption={this.handleDeleteOption} options={this.state.options} />
                <AddOption addAnOption={this.addAnOption}/>
            </div>
        );
    }
}
