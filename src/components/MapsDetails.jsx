import styled from 'styled-components'
import Colors from '../utils/Colors'

const MapDetails = styled.div`
    .map-center{
        display: flex;
        justify-content: center;
    }

    .map-container {
        margin-top: 10px;
        height: 40rem;
        width: 80%;
    }

    .sidebar {
        background: ${Colors.primary};
        color: #fff;
        padding: 6px 12px;
        font-family: monospace;
        z-index: 1;
        position: absolute;
        top: 160px;
        left: 140px;
        margin: 12px;
        border-radius: 4px;
    }

    @media screen and (min-width: 1920px) {
        .sidebar {
            left: 200px;
        }
    }
`

export default MapDetails
