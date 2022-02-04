import { Heading } from "../components/styles";
import { Header } from "../module/index";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { Adduser} from "../components/index";
import AllUsers from "../api/alluser";

const Dashboard =()=>{
    const location = useLocation();
    const myName =location.state
    console.log(location)
    const navigation = useNavigate();
    return(
        <>
        <Header/>
        <Adduser/>
        <AllUsers/>
        </>
    )
}
export default Dashboard;