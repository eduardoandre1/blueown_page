import styled from "styled-components";
interface inputSoltionBlock {
    text: string | undefined;
    title : string | undefined;
    column: string | undefined;
    row: string | undefined;
}

export default function SolutionBlock({text,title,row,column}:inputSoltionBlock){
    return(<SolutionsBlock $column={column} $row={row}>
        <div>
        <img src="https://www.jotform.com/blog/wp-content/uploads/2020/07/How-to-Become-a-Web-Designer-Your-Go-to-Guide-to-Kick-start-Your-Career-03-2.png" alt="guy build a web page" />
        </div>
        <p>{text}</p>
        <h2>{title}</h2>
        </SolutionsBlock>) 
}
const SolutionsBlock = styled.section<{ $column?: string ,$row?:string}>`
width: 100% ;
height: 100%;
grid-column: ${props => props.$column};
grid-row: ${props => props.$row};
border: 6px double lightblue ;
position: relative;
display: flex;
overflow: hidden;
flex-direction: column-reverse;
p{
    overflow: auto;
    color: white;
    font-size: large;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35%;
    width: 95%;
    margin: 0 auto;
    font-size: 1em ;
    z-index: 1;
}

h2{
    all: unset;
    color: lightblue;
    justify-content: center;
    text-align: center;
    font-size: 2.7em;
    z-index: 1;
}
img{
    width: 100%;
    height:100%;
    position: absolute;
    top: 100%;
    opacity: 0.6;
    z-index: 0;
    

}
:hover{
    img{
        animation: downImage 2s linear forwards; 
    }
    h2{
        color: white;
    }
}
@keyframes downImage {
    0% { transform:translate(0%,0%)}
    100% { transform:translate(0%,-100%)}
}
div{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
}

`
