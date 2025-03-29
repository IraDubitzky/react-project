import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
    iconUrl: markerIconUrl,
    shadowUrl: markerShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

interface MapProps {
    address: string;
}

const Map = ({ address }: MapProps) => {
    const [coords, setCoords] = useState<[number, number] | null>(null);

    useEffect(() => {
        const fetchCoords = async () => {
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
                );
                const data = await res.json();
                if (data && data.length > 0) {
                    const { lat, lon } = data[0];
                    setCoords([parseFloat(lat), parseFloat(lon)]);
                }
            } catch (err) {
                console.error("Failed to fetch location:", err);
            }
        };

        fetchCoords();
    }, [address]);

    if (!coords) return <p>Loading map...</p>;

    return (
        <MapContainer
            center={coords}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "120px", width: "100%", borderRadius: "8px" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coords} icon={customIcon}>
                <Popup>{address}</Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
