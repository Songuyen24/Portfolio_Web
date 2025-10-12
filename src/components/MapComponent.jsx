import React from 'react';

const GoogleMap = ({ className = "w-full h-96" }) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.41842767655!2d106.36556088291016!3d10.754730844422897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sTh%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1697171234567!5m2!1svi!2s"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Bản đồ Hồ Chí Minh"
      className={className}
    ></iframe>
  );
};

// Alternative OpenStreetMap version (requires leaflet)
const OpenStreetMap = ({ className = "w-full h-96" }) => {
  return (
    <div className={`${className} bg-gray-100 rounded-lg overflow-hidden`}>
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=106.6297%2C10.7544%2C106.7297%2C10.8044&layer=mapnik&marker=10.7769%2C106.7009"
        width="100%"
        height="400"
        style={{ border: 0 }}
        title="OpenStreetMap - Hồ Chí Minh"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

// Enhanced map with multiple location options
const InteractiveMap = ({ 
  location = "hochiminh", 
  className = "w-full h-96",
  showControls = true 
}) => {
  const locations = {
    hochiminh: {
      name: "Hồ Chí Minh",
      embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.41842767655!2d106.36556088291016!3d10.754730844422897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sTh%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1697171234567!5m2!1svi!2s"
    },
    hanoi: {
      name: "Hà Nội", 
      embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.97355106925!2d105.78486271562499!3d21.022736000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1697171234567!5m2!1svi!2s"
    }
  };

  const currentLocation = locations[location] || locations.hochiminh;

  return (
    <div className="space-y-4">
      {showControls && (
        <div className="flex space-x-2">
          <button 
            className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium"
            onClick={() => window.open(`https://www.google.com/maps/search/${currentLocation.name}`, '_blank')}
          >
            🗺️ Mở Google Maps
          </button>
          <button 
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            onClick={() => window.open(`https://maps.apple.com/?q=${currentLocation.name}`, '_blank')}
          >
            🍎 Mở Apple Maps
          </button>
        </div>
      )}
      
      <iframe
        src={currentLocation.embed}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Bản đồ ${currentLocation.name}`}
        className={className}
      ></iframe>
    </div>
  );
};

export { GoogleMap, OpenStreetMap, InteractiveMap };
export default GoogleMap;