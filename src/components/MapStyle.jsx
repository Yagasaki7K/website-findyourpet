import styled from 'styled-components'

const MapStyle = styled.div`
#evento-mapa { width:100%; height:100%; }
.mapa-projeto {
    height: 37rem;
    width: 100%;
    margin-top: 1rem;
    position:absolute;
    background:#fff;
    color:#210062;
    z-index: 1;
}
.mapa-projeto > div {
    position:relative;
}

.mapa-projeto > div > img {
    position:absolute;
    top:0;
    right:0;
    width:60%;
    transform: translate(30%,-60%);
    border-radius:10px;
}

.mapa-legenda {
    width: 19rem;
    height: 27rem;
    position:absolute;
    left:0;
    bottom:0;
    top: 0;
    margin-top: -1rem;
    margin-left: 4rem;
    z-index:5;
    background:rgba(255,255,255,.8);
    padding:20px;
    border:1px solid #ccc;
    border-radius:15px;
}

@media(max-width:599px){
    .mapa-legenda {
        position:static;
        width:100%;
    }
}

.mapa-legenda>h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size:1.8rem;
    line-height:1.8rem;
    margin:0 0 10px 0;
}

.mapa-legenda>div>div {
    margin:4px 10px;
}

.mapa-legenda>div>div>span {
    display:inline-block;
    width:40px;
    height:30px;
}

.mapa-legenda>div>div>div {
    padding-left:10px;
}

.mapa-legenda {
    .markcolor {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        margin-left: 0rem;

        :first-child {
            margin-top: 3rem;
        }
    }
}
`

export default MapStyle