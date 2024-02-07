// https://www.figma.com/file/uS4XC8jxYd6W4BgKSbOsK8/FE-Design-Interview?node-id=0%3A1&mode=dev

import './imageList.css';
const DATA = {
    "preview": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/preview.png",
    "events": [
      {
        "title": "Person of Interest",
        "subtitle": "Filip Kaliszan",
        "site": "3rd Floor",
        "detail": "Elevator East Lobby",
        "image": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event1.png",
        "timestamp": 1612247209
      },
      {
        "title": "Motion",
        "subtitle": "People Detected",
        "site": "Outside",
        "detail": "Front Door",
        "image": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event2.png",
        "timestamp": 1612207950
      },
      {
        "title": "Crowd",
        "subtitle": "2 or more people",
        "site": "London",
        "detail": "Intersection",
        "image": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event3.png",
        "timestamp": 1612202420
      }
    ] 
  }
  
  const App = () => {
    // console.log(DATA)
    const [userList, setUserList] = React.useState([]);
     const [selectedUser, setSelectedUser] = React.useState(DATA.preview);
    const [time, setTime] = React.useState("");
    
    React.useEffect(() =>{
      setUserList(DATA.events);
      
    },[]);
    
    const formatDate = (timestamp) =>{
        let date = new Date(timestamp  * 1000);
        
        let hr = date.getHours(),  mins = date.getMinutes();
        
        return `${hr}:${mins}`;
    }
    
    const clickHandler = (previewUrl) =>{
        setSelectedUser(previewUrl);
    }
    
    
    return(
     
      // <div className="app">Hello from React component!</div>
        <div className="main-container">
         <div className="image-container" >
            <img src={selectedUser} className="image-container"/>
          </div>
          <div className="list-container">
                {
                  userList &&  userList.map((user, id) =>{
                    // console.log(new Date(user.timestamp))
                    return(
                      
                        // <div className="list-item" key={id}>
                            <List  title={user.title} subTitle={user.subtitle} date={formatDate(user.timestamp)} thumbnail={user.image} details={user.detail} key={id}  interaction = {clickHandler}/>
                        // </div>
                    )
                  } )
                }
                </div>
      
        </div>
     
    )
     
  }
  
  const List = ({title, subTitle, details, thumbnail, date, interaction}) =>{
    const onUserClick = (previewUrl) =>{
        interaction(previewUrl)
    }
    
    return(
      <div className="user-list" onClick={() =>{onUserClick(thumbnail)}}>
      <div className="user-details-col">
        <div className="thumbnail">
          <img src={thumbnail} />
        </div>
        <div className="user-title">
         <span>{title}</span>
        <span>{subTitle}</span>
        </div>
       
      </div>
    
      <div className="user-details">
          {details}
      </div>
      <div className="user-details">
       {date}
      </div>
      </div>
  
  
    )
    
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));
  