import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props) {
    const { title , onClick } = props;
    return ( <StyledButton onClick={onClick}> {title || "Button"} </StyledButton> );
}

export default Button;