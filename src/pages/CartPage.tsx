import { getAllRestaurants } from "@/api/RestaurantApi";
import { CartItem } from "./DetailPage";
import CartOrderSummary from "@/components/CartOrderSummary";
import { useState } from "react";
import { useCreateCheckoutSession } from "@/api/OrderApi";
import { Card, CardFooter } from "@/components/ui/card";
import CheckoutButton from "@/components/CheckoutButton";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";

const CartPage = () => {
    const { allrestaurants, isLoading } = getAllRestaurants();
    const [cartItemsState, setCartItemsState] = useState({});
    const { createCheckoutSession, isLoading: isCheckoutLoading } =
        useCreateCheckoutSession();

    if (!allrestaurants) {
        console.log("No restaurants found");
        return null;
    }

    return (
        <div>
            {isLoading
                ? "Loading..."
                : allrestaurants.map((restaurant) => {
                      const cartItemsJson = sessionStorage.getItem(
                          `cartItems-${restaurant._id}`
                      );

                      const cartItems = cartItemsJson
                          ? JSON.parse(cartItemsJson)
                          : [];

                      const removeFromCart = (
                          item: CartItem,
                          restaurantId: string
                      ) => {
                          const cartItemsJson = sessionStorage.getItem(
                              `cartItems-${restaurantId}`
                          );
                          const cartItems = cartItemsJson
                              ? JSON.parse(cartItemsJson)
                              : [];

                          const updatedCartItems = cartItems.filter(
                              (cartItem: CartItem) => cartItem._id !== item._id
                          );

                          sessionStorage.setItem(
                              `cartItems-${restaurantId}`,
                              JSON.stringify(updatedCartItems)
                          );

                          setCartItemsState({
                              ...cartItemsState,
                              [restaurantId]: updatedCartItems,
                          });
                      };

                      const onCheckout = async (userFormData: UserFormData) => {
                        if (!restaurant) {
                          return;
                        }
                    
                        const checkoutData = {
                          cartItems: cartItems.map((cartItem: CartItem) => ({
                            menuItemId: cartItem._id,
                            name: cartItem.name,
                            quantity: cartItem.quantity.toString(),
                          })),
                          restaurantId: restaurant._id,
                          deliveryDetails: {
                            name: userFormData.name,
                            addressLine1: userFormData.addressLine1,
                            city: userFormData.city,
                            country: userFormData.country,
                            email: userFormData.email as string,
                          },
                        };
                    
                        const data = await createCheckoutSession(checkoutData);
                        window.location.href = data.url;
                      };

                      if (cartItems.length > 0) {
                          return (
                              <Card className="my-5">
                                  <CartOrderSummary
                                      key={restaurant._id}
                                      restaurant={restaurant}
                                      cartItems={cartItems}
                                      removeFromCart={removeFromCart}
                                  />
                                  <CardFooter>
                                      <CheckoutButton
                                          disabled={cartItems.length === 0}
                                          onCheckout={onCheckout}
                                          isLoading={isCheckoutLoading}
                                      />
                                  </CardFooter>
                              </Card>
                          );
                      }
                  })}
        </div>
    );
};
export default CartPage;
