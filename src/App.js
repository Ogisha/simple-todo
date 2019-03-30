import React from 'react';
import Header from './components/Header';
import OptionButtons from './components/OptionButtons';
import Options from './components/Options'
import AddOption from './components/AddOption';
import OptionModal from './components/OptionModal';

export default class App extends React.Component {
    state = { 
        app_name: "To-Do App",
        app_description: "A simple organizer and planer",
        options: ["Practise coding", "Have some healty breakfast"],
        selectedOption: false,
        message: ''
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

        else alert("Please enter a valid option!");
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

    openModal = () => this.setState(() => ({ selectedOption: true }));

    closeModal = () => this.setState(() => ({ selectedOption: false }));

    catchMessage = (message) => this.setState(() => ({
        message: message
    }))
 
    componentDidMount() {
        let data = JSON.parse(localStorage.getItem("options"));
        console.log(data)
        this.setState(() => ({ options: data }))
    }

    componentDidUpdate(prevProps, prevState) {
        let data = JSON.stringify(this.state.options);
        localStorage.setItem("options", data);
        console.log(localStorage.getItem("options"))
    }

    render() {
        return (
            <div>
                <Header name={this.state.app_name} desc={this.state.app_description}/>
                <OptionButtons 
                    options={this.state.options} 
                    removeAllOptions={this.removeAllOptions}
                    openModal={this.openModal}
                    catchMessage={this.catchMessage}
                />
                <Options handleDeleteOption={this.handleDeleteOption} options={this.state.options} />
                <AddOption addAnOption={this.addAnOption}/>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    closeModal={this.closeModal}
                    message={this.state.message}
                />
            </div>
        );
    }
}
