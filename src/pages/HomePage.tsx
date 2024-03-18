import SearchBar, { SearchForm } from "@/components/Searchbar";
import { useNavigate } from "react-router-dom";

const HomePage = () =>{

    const navigate = useNavigate();
    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
        pathname: `/search/${searchFormValues.searchQuery}`,
        });
    };

    return (
        <div className="flex flex-col gap-12">
            <div className="bg-blue-100  rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="font-serif text-5xl font-bold tracking-tight text-blue-700">
                    Order your favorite cuisine today
                </h1>
                <span className="font-mono font-bold text-xl">Food is just a click away</span>
                    <SearchBar
                        placeHolder="Search by City or Town"
                        onSubmit={handleSearchSubmit}
                    />
            </div>
        </div>
    );
};

export default HomePage;