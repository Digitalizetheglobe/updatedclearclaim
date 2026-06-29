"use client";
import { useState } from "react";
import Image from "next/image";

const WhatsAppPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber] = useState("+91 8600421300");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim() || !phoneNumber.trim()) return;

    const formattedPhoneNumber = phoneNumber.replace(/\s+/g, "");
    const url = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
    setMessage("");
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={() => setShowPopup(!showPopup)}
        style={{
          position: "fixed",
          bottom: "30px",
          left: "30px",
          backgroundColor: "rgb(33, 202, 95)",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
        }}
      >
        <Image src="/images/whatsapp.png" alt="WhatsApp" width={25} height={25} />
      </button>

      {/* WhatsApp Chat Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            left: "30px",
            width: "320px",
            backgroundColor: "#fff",
            borderRadius: "15px",
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
            zIndex: 2000,
            fontFamily: "Arial, sans-serif",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#075E54",
              color: "#fff",
              padding: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <span>Clear Claim</span>
            <span onClick={() => setShowPopup(false)} style={{ cursor: "pointer", fontSize: "20px" }}>×</span>
          </div>

          {/* Chat Body */}
          <div
            style={{
              padding: "15px",
              backgroundColor: "#ECE5DD",
              minHeight: "100px",
            }}
          >
            <div
              style={{
                backgroundColor: "#DCF8C6",
                padding: "10px",
                borderRadius: "8px",
                maxWidth: "90%",
                fontSize: "14px",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              Hey! 👋 Enter a message below to chat with us on WhatsApp.
            </div>
          </div>

          {/* Chat Input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px",
              backgroundColor: "#fff",
            }}
          >
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              style={{
                flex: 1,
                padding: "10px 15px",
                borderRadius: "25px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "14px",
              }}
            />

            <button
              onClick={handleSendMessage}
              style={{
                backgroundColor: "#25D366",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image src="/images/send.png" alt="Send" width={20} height={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppPopup;
