import React from "react";
import { useShopContext } from "../Context/Context";
import { RiDeleteBinLine } from "react-icons/ri";

interface IProps {
  section: string;
}

export const Card: React.FC<IProps> = ({ section }) => {
  const { items, handleDelete } = useShopContext();

  return (
    <div>
      <h1>{section}</h1>
      <div>
        {items.map(
          (item) =>
            item.option === section && (
              <div>
                <p>{item.name}</p>
                <p>Quantity : {item.quantity}</p>
                <button onClick={() => handleDelete(item.id)}>
                  <RiDeleteBinLine />
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
};
