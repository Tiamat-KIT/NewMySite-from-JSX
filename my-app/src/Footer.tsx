import {Col, Row} from "solid-bootstrap";
function Footer(){
    return(
        <footer class="pt-4 my-md-5 pt-md-5 border-top">
            <Row>
                <Col class="col-12 col-md">
                </Col>
                <Col class="col-md">
                    <h5>SNS</h5>
                    <ul class="list-unstyled text-small">
                        <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://twitter.com/Fill_Axt">Twitter</a></li>
                        <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://qiita.com/RabbitGeek_Fill">Qiita</a></li>
                        <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://github.com/Tiamat-KIT">GitHub</a></li>
                        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Zenn</a></li>
                        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">マシュマロ</a></li>
                    </ul>
                </Col>
            </Row>
        </footer>
    )
}
export default Footer;