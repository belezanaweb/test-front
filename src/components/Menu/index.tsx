import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IMenu } from "./Menu.interface";
import "./Menu.scss";


const Menu: FC<IMenu> = ({ items }) => {

  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (updateStep: number) => setCurrentStep(updateStep)
  const location = useLocation().pathname
  const activePath = (): number => {
    switch (location) {
      case "/":
        return 0;
      case "/payment":
        return 1;
      case "/confirmation":
        return 2;
      default:
        return 0;
    }
  }

    useEffect(() => {
      setCurrentStep(activePath())
    }, [location])

    return (
      <div className="menu">
        {items.map((item, index) => (
          <Link key={index} className={`menu__items ${index === currentStep ? 'active' : ""}`} to={item.path} onClick={() => handleStepChange(index)} >{item.label}</Link>
        ))}

      </div>
    );
  }
  export default Menu;
