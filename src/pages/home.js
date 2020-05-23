import React, {Component} from 'react';
import Head from '../components/viewComponents/Head';
import Body from '../components/viewComponents/Body';

class Home extends Component {

        render(props){
            return (
             
                 <div >
                 <Head></Head>
                 <h3>Home</h3>
                 <Body />
                 </div>
                 
            
             
            );
        }
}

export default Home;