import { Container,Row,Col } from 'solid-bootstrap'
import mypic from './mypic.png'
function MyIntro(){

    return(
        <Container class={"shadow-none p-3 mb-5 bg-light rounded"}>
        <img src={mypic} width={"150vm"} height={"150vm"} class={"rounded float-end border border-2 border-info"}></img>
        <h2>自己紹介<i class="fa-solid fa-power-off" style="color: blue;"></i></h2>
        <p>北陸の某私立工業大学の学生です。スイーツ大好きスイーツ男子。</p>
        <p>授業では、PythonやJavaを扱って勉強していますが、趣味で、HTMLやTypeScriptを扱っています。(CSSはフレームワーク頼り)工大生にしては珍しく彼女がいます</p>
        </Container>
    )
}
export default MyIntro;
