import { Button } from "../Button/Button"

export const Tab = ({ Active, Click, title }) => {
    return <Button onClick={Click}>{`${title} ${Active ? "*" : ""}`}</Button>
};