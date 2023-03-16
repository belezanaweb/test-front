import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMenu } from "./Menu.interface";
import "./Menu.scss";


const Menu: FC<IMenu> = ({items, step}) => {

  const [currentStep, setCurrentStep] = useState(step);

  const handleStepChange = (updateStep: number) => setCurrentStep(updateStep)

  return (
    <div className="menu">
      {items.map((item, index) => (
        <Link key={index} className={`menu__items ${index === currentStep ? 'active' : ""}`} to={item.path} onClick={() => handleStepChange(index)} >{item.label}</Link>
      ))}

    </div>
  );
}
export default Menu;
