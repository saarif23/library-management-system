import Faq from "../Components/Faq";
import Banner from "../Components/Header/Banner";
import Categories from "../Components/HomeComponents/Categories";
import FamousBooks from "../Components/HomeComponents/FamousBooks";
import NovelistAuthor from "../Components/HomeComponents/NovelistAuthor";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <NovelistAuthor></NovelistAuthor>
            <Faq></Faq>
            <FamousBooks></FamousBooks>
        </div>
    );
};

export default Home;