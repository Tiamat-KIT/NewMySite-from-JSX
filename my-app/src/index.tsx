/* @refresh reload */
import { render } from 'solid-js/web';
import MyNav from './Top';
import MyIntro from './Myintro';
import MyProduct from './Myproduct';
import Footer from './Footer';

function Mypage(){
    return(
        <div>
            <MyNav/>
            <MyIntro/>
            <MyProduct/>
            <Footer/>
        </div>
    )
}

render(() => <Mypage />, document.getElementById('root') as HTMLElement);
