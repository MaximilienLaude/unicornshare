import React from 'react';
import Category from './Category';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: []
        }
    }

    getImage =  () => {
        fetch("https://jsonplaceholder.typicode.com/photos/" + this.props.match.params.id)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ image: data});
            })
            .catch((error) => console.log(error.message));
    }

    componentDidMount() {
        this.getImage();
    }

    render(){
        return(
            <div>
                <Category />
                <div>
                    <img src={this.state.image.url} alt='' />
                </div>
                <div>
                    <h2>{this.state.image.title}</h2>
                    <p>{/* description de l'image */}</p>
                    <p>{/* commentaires de l'image */}</p>
                    <textarea></textarea>
                    <button>Publier</button>
                </div>
            </div>
        )
    }
}

export default Image;