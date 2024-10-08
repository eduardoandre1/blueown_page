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
        <h3>{title}</h3>
        </SolutionsBlock>) 
}
const SolutionsBlock = styled.section<{ $column?: string ,$row?:string}>`
width: calc(100% - 5px) ;
height: calc(100% - 5px);
grid-column: ${props => props.$column};
grid-row: ${props => props.$row};
border: 6px double lightblue ;
position: relative;
display: flex;
overflow: hidden;
flex-direction: column-reverse;
p{
    overflow: auto;
    color: lightblue;
    font-size: large;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35%;
    width: 95%;
    margin: 0 auto;
    font-size: clamp(15px,10px, + 20dvw, 1.4rem) ;
    z-index: 1;
}

h3{
    all: unset;
    color: lightblue;
    justify-content: center;
    text-align: center;
    font-size: 2.1em;
    z-index: 2;
    font-family: 'Rubik Mono One';
}
img{
    width: 100%;
    height:100%;
    position: absolute;
    top: 100%;
    opacity: 0.6;
    z-index: -1;
    

}
:hover{
    img{
        animation: downImage 1.5s ease-in forwards; 
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
@media (max-width:768px) {
    height: 60dvh;
}
`
