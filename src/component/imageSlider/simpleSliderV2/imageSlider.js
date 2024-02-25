import React,  {Component} from 'react';
import ImageCarousel from './imageCarousel';
import './styles.css';


class ImageSliderV2 extends Component{
    constructor(props){
        super(props);

        this.state = {
            images:[
                "https://picsum.photos/800/600?random=1",
                "https://picsum.photos/800/600?random=2",
                "https://picsum.photos/800/600?random=3",
                "https://picsum.photos/800/600?random=4",
                "https://picsum.photos/800/600?random=5",
                "https://picsum.photos/800/600?random=6",
                "https://picsum.photos/800/600?random=7",
                "https://picsum.photos/800/600?random=8",
                "https://picsum.photos/800/600?random=9",
                "https://picsum.photos/800/600?random=10"
            ]
        }
    }
    render(){
        return(
            <div className="image-carousel">
                <ImageCarousel imagesList={this.state.images}/>
            </div>
        )
    }
}

export default ImageSliderV2;