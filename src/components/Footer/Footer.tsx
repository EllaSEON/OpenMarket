import { Link } from "react-router-dom";
import * as S from "./style";
import InstaIcon from "../../assets/images/icon-insta.svg";
import FacebookIcon from "../../assets/images/icon-facebook.svg";
import YoutubeIcon from "../../assets/images/icon-youtube.svg";

function Footer() {
  return (
    <S.FooterLayout>
      <S.ContentBox>
        <S.TopWrap>
          <S.PolicyList>
            <li>
              <Link to="#">호두마켓 소개</Link>
            </li>
            <li>
              <Link to="#">이용약관</Link>
            </li>
            <li>
              <Link to="#">
                <strong>개인정보처리방침</strong>
              </Link>
            </li>
            <li>
              <Link to="#">전자금융거래약관</Link>
            </li>
            <li>
              <Link to="#">청소년보호정책</Link>
            </li>
            <li>
              <Link to="#">제휴문의</Link>
            </li>
          </S.PolicyList>
          <S.SnsBtnList>
            <li>
              <Link to="#">
                <img src={InstaIcon} alt="인스타 바로가기" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={FacebookIcon} alt="페이스북 바로가기" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={YoutubeIcon} alt="유튜브 바로가기" />
              </Link>
            </li>
          </S.SnsBtnList>
        </S.TopWrap>
        <S.BottomWrap>
          <p>(주) 호두마켓</p>
          <address>서울특별시 마포구 유니콘로 777-77</address>
          <dl>
            <dt>사업자등록번호</dt>
            <dd>000-00-00000</dd>
            <dd>통신판매업</dd>
          </dl>
          <dl>
            <dt>대표</dt>
            <dd>선은혜</dd>
          </dl>
        </S.BottomWrap>
      </S.ContentBox>
    </S.FooterLayout>
  );
}

export default Footer;
