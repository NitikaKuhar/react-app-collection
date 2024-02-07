import React, {useState, useEffect} from 'react';
import axios from "axios";
import ImageList from './imageList';
import './imageSlider.css';

const  data = {
    "imageList": [
      {
        "id": 0,
        "title": "I don't want to work today, let's go home",
        "url": "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog1.jpeg",
        "ratings": 2
      },
      {
        "id": 1,
        "title": "Service dog in training on his first outing around trains! Looking forward to seeing this bit to great things for his person",
        "url": "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog3.jpeg",
        "ratings": 3
      },
      {
        "id": 2,
        "title": "Toronto service dog helps ROM staff member and looks adorable doing it",
        "url": "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog2.jpeg",
        "ratings": 4
      },
      {
        "id": 3,
        "title": "WW2 photograph of a company mascot dog",
        "url": "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog4.jpeg",
        "ratings": 5
      },
      {
        "id": 4,
        "title": "Charlotte is fully grown so is able to get her final working harness and gear! She is absolutely loving showing off her spiffy new outfit to all her friends and family",
        "url": "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog5.jpeg",
        "ratings": 1
      },
      {
        "id": 5,
        "title": "This is my new Urban Search and Rescue puppy. Ares.",
        "url": "https://img.cdn4dd.com/s/managed/interview/tps-dogs/dog6.jpeg",
        "ratings": 2
      }
    ]
  }
  

const ImageSlider = () =>{
    const [imageList, setImageList] = useState([]);
    const [currSlide, setCurrSlide] = useState(0);

    const url = `https://img.cdn4dd.com/s/managed/interview/tps-dogs/api.json`;

    const fetchImageList = (length) => {
        return axios
          .get(url)
          .then((response) => {
            const dogs = [];
            response.data.data.children.forEach((c) => {
              const title = c.data.title;
              const url = c.data.preview?.images[0]?.resolutions[2]?.url;
              if (url) {
                dogs.push({ title: title, url: url.replaceAll("&amp;", "&") });
              }
            });
            // console.log(response);
            return dogs.slice(0, length);
          })
          .catch((err) => console.log(err));
      };
    useEffect(() => {
        fetchImageList(10)
          .then((res) => {
            console.log(res);
            setImageList(res);
            // setImageList(JSONData.imageList);
          })
          .catch((err) => console.log(err));
      }, []);

      const changeSlide = (movingDirection) =>{
        let slide = 0;
        if(currSlide + movingDirection < 0){
            slide = imageList.length - 1;

        }
        else{
            slide = (currSlide+movingDirection) % imageList.length;
        }

        setCurrSlide(slide);

      }

      return(
        <div className="image-container">
            <div className='image-list' style={{transform:` translateX(${-currSlide * 100}%)`}}>
                {
                    imageList.length  > 0 && imageList.map((image, id) =>{
                        return (
                            <ImageList url={image.url} title={image.title} key={id}/>
                        )
                    })
                }

            </div>

            <div className='arrows'>
                <button onClick={() => changeSlide(-1)}>{"<"}</button>
                <button  onClick={() => changeSlide(1)}>{">"}</button>

            </div>

        </div>
      )
}

export default ImageSlider;