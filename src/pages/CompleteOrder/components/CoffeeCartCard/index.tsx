import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../context/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

interface CoffeeCartCardProps {
    coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
    const { changeCartItemQuantity, removeCartItem} = useCart();

    const coffeeTotal = coffee.price * coffee.quantity;

    const formattedPrice = formatMoney(coffeeTotal);

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, "increase")
    }

    function handleDecrease() {
        changeCartItemQuantity(coffee.id, "decrease")
    }

    function handleRemove() {
        removeCartItem(coffee.id)
    }

    return (
        <CoffeeCartCardContainer>
            <div>
                <img src={`/coffees/${coffee.photo}`} />

                <div>
                    <RegularText color="subtitle">
                        {coffee.name}
                    </RegularText>
                    <ActionsContainer>
                        <QuantityInput 
                            onIncrease={handleIncrease} 
                            onDecrease={handleDecrease}  
                            size="small" 
                            quantity={coffee.quantity} 
                        />
                        <RemoveButton onClick={handleRemove}>
                            <Trash size={16} />
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ {formattedPrice}</p>
        </CoffeeCartCardContainer>
    )
} 