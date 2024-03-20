import { getAllRestaurants } from "@/api/RestaurantApi";
import SearchResultCard from "@/components/SearchResultCard";
import { Separator } from "@radix-ui/react-separator";


const AllRestaurantPage = () => {
    const { allrestaurants } = getAllRestaurants();

    if (!allrestaurants) {
        return null; // or loading indicator
    }

    return (
        <div>
            {allrestaurants.map((restaurant) => (
                <div>
                    <SearchResultCard restaurant={restaurant} />
                    <Separator className="my-4" />
                </div>
            ))}
        </div>
    );
};
export default AllRestaurantPage;
