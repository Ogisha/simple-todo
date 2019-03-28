import React from 'react';
import Header from './components/Header';
import OptionButtons from './components/OptionButtons';
import Options from './components/Options'
import AddOption from './components/AddOption';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.addAnOption = this.addAnOption.bind(this);
        this.state = { 
            app_name: "To-Do App",
            app_description: "A simple organizer and planer",
            options: ["Practise coding", "Have some healty breakfast"]};
    }

    removeAllOptions() {
        if (this.state.options.length != 0) 
            this.setState({options: []});
    }

    addAnOption(e) {
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

    render() {
        return (
            <div>
                <Header name = {this.state.app_name} desc={this.state.app_description}/>
                <OptionButtons options={this.state.options} removeAllOptions={this.removeAllOptions} />
                <Options options={this.state.options} />
                <AddOption addAnOption={this.addAnOption}/>
            </div>
        );
    }
}