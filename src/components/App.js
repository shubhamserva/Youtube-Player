import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'


const KEY = 'AIzaSyA_I5AZfDJMUG6CfGbeZFiI6deRJui1AuI'
class App extends React.Component{

   state = {
       videos:[],
       selectedVideo:null
   }
   componentDidMount(){
       this.onSearchSubmit('yo');
   }

    onSearchSubmit = async query =>{
        const response = await youtube.get('/search',{
            params:{
                q:query,
                    part: 'snippet', 
                    type: 'video',
                    maxResults: 5,
                    key: `${KEY}`
            }
        })
        this.setState({videos:response.data.items});
        this.setState({selectedVideo:response.data.items[0]})

    };
    onVideoSelect = video =>{
        this.setState({
            selectedVideo:video
        })
        console.log("from app",video)
    }
    render(){
        return(
           
            <div className="ui container">
                 <h2 className='custom-header'>Welcome to Youtube</h2>
                <SearchBar onFormSubmit = {this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                <VideoDetail video = {this.state.selectedVideo} />
                </div>
              
                <div className="five wide column">
                <VideoList  
                onVideoSelect= {this.onVideoSelect}
                videos= {this.state.videos}/>
                </div>
                </div>
                </div>
                <h2 className='custom-footer'>Developed By :Shubham Serva </h2>
            </div>  
            
        )
    }
}
export default App;