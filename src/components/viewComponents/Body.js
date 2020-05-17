import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';
import Footer from     './Footer';

class Body extends Component {
    render() {
        return (
            
            <div >
                        
            <Header></Header>
            <Content >
              
            </Content>

            <Footer></Footer>
            </div>
        );
    }
}

export default Body;