
import { Tab } from "../Tab/Tab";


export const Tabs = ({ restaurants, activeIndex, tabClick }) => {
    return (
        <div>
            {restaurants.map(({ id, name }, index) => (
                <Tab
                    keu={id}
                    title={name}
                    Click={() => tabClick(index)}
                    Active={activeIndex === index}
                />
            ))}
        </div>
    );
};