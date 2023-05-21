import { InputStyle, LabelStyle } from "./styles"


export const Input = ({ label, ...props }) => {
    return (
        <>
            <LabelStyle>{label}</LabelStyle>
            <InputStyle {...props}></InputStyle>
        </>
    )
}