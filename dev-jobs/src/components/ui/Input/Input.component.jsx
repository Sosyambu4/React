import { InputField, InputLabel } from "./Input.styled"


export const Input = (props) => {
    return (
        <InputLabel>
            <InputField placeholder={props.placeholder} />
        </InputLabel>)

}