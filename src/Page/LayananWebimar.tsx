import React, {Component} from 'react';


// import component
import Footer from '../components/Footer';
import ArticelGenz from '../components/ArticelGenZ';
import Navbar from '../components/Navbar';
import CardPersonal from '../components/CardPersonal';

class LayananWebimar extends Component {
    render() {
        return(
            <div className='relative max-w-[1785px] mx-auto'>
             <Navbar/>
             <ArticelGenz/>
             <CardPersonal/>
             <Footer/>
            </div>
        )
    }
}

export default LayananWebimar;