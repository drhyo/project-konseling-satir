import {Component} from "react";

import Navbar from "../components/Navbar";
import Registration from "../components/Registration";
import About from "../components/About";
import Consultation from "../components/Consultation";
import IconWebimar from "../components/IconWebimar";
import ArticelWebimar from "../components/ArticelWebimar";
import CardPersonal from "../components/CardPersonal";
import Introduction from "../components/Introduction";
import Articel from "../components/Articel";
import Question from "../components/Question";
import Footer from "../components/Footer";


class HomePage extends Component {
    render() {
        return(
            <>
                <div className=" relative max-w-[1785px] mx-auto">
                    <Navbar/>
                    <Registration/>
                    <About/>
                    <Consultation/>
                    <IconWebimar/>
                    <ArticelWebimar/>
                    <CardPersonal/>
                    <Introduction/>
                    <Articel/>
                    <Question/> 
                    <Footer/>
                </div>
                
            </>
        )
    }

}


export default HomePage;