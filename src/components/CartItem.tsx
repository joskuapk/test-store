import storeItems from "../data/items.json";
import { useShoppingCart } from "./../context/ShoppingCartContext";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "./../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id == id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        {item.name}{" "}
        <div>
          <span className="text-muted">x{quantity}</span>
        </div>
      </div>
      <div className="text-muted" style={{ fontSize: ".75rem" }}>
        {"Unit price: "}
        {formatCurrency(item.price)}
      </div>
      <div>
        {"Sub: "}
        {formatCurrency(item.price * quantity)}
      </div>

      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}

export default CartItem;
