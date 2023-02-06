import React from "react";
import { useShopContext } from "../Context/Context";
import { Card } from "./Card";

export const Dashboard = () => {
  const { sections } = useShopContext();

  return (
    <section>
      {sections.map((section, index) => {
        return <Card key={index} section={section} />;
      })}
    </section>
  );
};
