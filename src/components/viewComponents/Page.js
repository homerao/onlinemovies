import React, {Component} from 'react';
import Head from './Head';
import Body from './Body';

class Page extends Component {

        render(){
            return (
             
                 <div id="root">
                 <Head></Head>
                 <Body />
                 </div>
                 
            
             
            );
        }
}

export default Page;