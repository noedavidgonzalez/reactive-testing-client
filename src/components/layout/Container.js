import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer' 

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}; 
class Content extends Component {
    
    render() {
        const { body } = this.props;
        return (
          <div>
                <Header styles={styles} />
            {body}
            {/* <Footer /> */}
          </div>
        );
    }
}
 

export default Content;