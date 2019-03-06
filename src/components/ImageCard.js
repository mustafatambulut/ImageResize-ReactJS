import React from 'react';

class ImageCard extends React.Component{

constructor(props){
    super(props);

    this.state = {span : 0};
    this.imageRef = React.createRef();
}

componentDidMount(){
    //Burada image'ların yükselikleri 0 gelmesinin nedeni daha resimler yüklenmeden boy değerini almaya calısıyoruz bu yuzden,
    //console.log(this.imageRef.current.clientHeight);

    this.imageRef.current.addEventListener('load', this.setSpans);
}

setSpans = () =>{

    const height = this.imageRef.current.clientHeight;
    const span   = Math.ceil(height / 10);
    
    this.setState({span: span});
}

render(){
        const {description,urls} = this.props.image;
        
        return(
            <div style={{gridRowEnd: `span ${this.state.span}` }}>
                <img 
                    ref={this.imageRef}
                    src={urls.regular} 
                    alt={description}
                />
            </div>
        );
    }
}

export default ImageCard;