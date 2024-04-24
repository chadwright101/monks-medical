import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

interface Props {
  cssClasses?: string;
}

const ContactMap = ({ cssClasses }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBEHEWRnqpHLrFtUqs2oyORbfpvRwmdoTM",
  });
  if (!isLoaded)
    return (
      <div
        className={`border rounded-xl bg-white border-black text-[30px] font-light text-black grid place-items-center py-16 w-full h-full ${cssClasses}`}
      >
        Map loading...
      </div>
    );
  return (
    <GoogleMap
      zoom={14}
      center={{ lat: -34.0538354, lng: 23.3699513 }}
      mapContainerClassName={`rounded-xl ${cssClasses}`}
    >
      <MarkerF position={{ lat: -34.0538354, lng: 23.3699513 }} />
    </GoogleMap>
  );
};

export default ContactMap;
