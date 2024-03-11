import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../src/components/MapComponent"), {
    ssr: false,
});

export default function Mapa() {
    return (
        <div>
            <MapComponent />
        </div>
    );
}