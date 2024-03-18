import { getAllRestaurants } from "@/api/RestaurantApi";
import OrderSummary from "@/components/OrderSummary";
import SearchResultCard from "@/components/SearchResultCard";
import { Restaurant } from "@/type";
import { Separator } from "@radix-ui/react-separator";
import { useParams } from "react-router-dom";

const AllRestaurantPage = () => {
    const { allrestaurants, isLoading } = getAllRestaurants();

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
