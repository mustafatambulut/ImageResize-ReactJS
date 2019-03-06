import React from "react";

class SearchBar extends React.Component{
    state = { term: ''};

    //Bunun yerine input'a "onChange={(e) => console.log(e.target.value) }" aynı işlemi yapar
    onInputChange(event){
        //console.log(event.target.value);
    }

    // normal fonk. tanımlandıgında this.state undefıned hatasını alırsınız bunun anlamı
    // this.onFormSubmit = this.onFormSubmit.bind(this) yapılmamıs olması bunun ıcın arrow func.
    //kullanarak otomatık bind etmesini sağlayarak bu hatadan kurtuluyoruz
    onFormSubmit = (event) =>{
        //Otomatik olarak sunucuya veri göndermesini kesiyoruz
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        //console.log(this.state.term);
    }
    // onInputClick(){
    // }

    // onInputSubmit(){
    // }
    render(){

        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                  <label>Image Search</label>
                  <input type="text" 
                         value={this.state.term}
                         onClick={this.onInputClick}
                         onChange={e => this.setState({ term: e.target.value })}
                         />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;