import { Button } from "../Button/Button"

export const Tab = ({ isActive, onClick, title }) => {
    return <Button onClick={onClick}>{`${title} ${isActive ? "*" : ""}`}</Button>;
};