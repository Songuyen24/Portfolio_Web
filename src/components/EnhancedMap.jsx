import React, { useState } from 'react';
import { FiMapPin, FiExternalLink, FiNavigation, FiMap } from 'react-icons/fi';

const EnhancedMap = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.41842767655!2d106.36556088291016!3d10.754730844422897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sTh%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1697171234567!5m2!1svi!2s";

  const handleDirections = () => {
    // Check if geolocation is available
    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          window.open('https://www.google.com/maps/dir//Ho+Chi+Minh+City,+Vietnam', '_blank');
        }, 
        () => {
          // Fallback if geolocation fails
          window.open('https://www.google.com/maps/dir//Ho+Chi+Minh+City,+Vietnam', '_blank');
        }
      );
    } else {
      // Fallback if geolocation not available
      window.open('https://www.google.com/maps/dir//Ho+Chi+Minh+City,+Vietnam', '_blank');
    }
  };

  const handleOpenMaps = () => {
    window.open('https://www.google.com/maps/search/Ho+Chi+Minh+City,+Vietnam', '_blank');
  };

  return (
    <div style={{ position: 'relative', borderRadius: '0.5rem', overflow: 'hidden' }}>
      {/* Map Controls */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={handleDirections}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.5rem 1rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#dcfce7',
            color: '#16a34a'
          }}
        >
          <FiNavigation className="w-4 h-4" />
          Chỉ đường
        </button>
        <button
          onClick={handleOpenMaps}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.5rem 1rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#e0f2fe',
            color: '#0891b2'
          }}
        >
          <FiExternalLink className="w-4 h-4" />
          Mở Maps
        </button>
      </div>

      {/* Map iframe */}
      <iframe
        src={mapUrl}
        style={{
          width: '100%',
          height: '24rem',
          border: 'none',
          borderRadius: '0.5rem'
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Bản đồ Hồ Chí Minh"
      ></iframe>

      {/* Privacy Notice */}
      <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#fefce8',
        border: '1px solid #fde047',
        borderRadius: '0.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
          <div style={{ marginTop: '0.125rem' }}>💡</div>
          <div>
            <p style={{ fontWeight: '500', color: '#92400e', marginBottom: '0.25rem' }}>Lưu ý về quyền riêng tư</p>
            <p style={{ color: '#a16207', fontSize: '0.875rem' }}>
              Vì lý do bảo mật, bản đồ hiển thị khu vực chung thay vì địa chỉ cụ thể. 
              Vui lòng liên hệ trực tiếp để nhận thông tin chi tiết khi cần gặp mặt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedMap;