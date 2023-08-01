import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    window.chatbotSettings = {
      chat_bubble_style: "standard",
      chat_bubble_text: "Chat",
      chat_bubble_icon: "facebook",
      chat_bubble_icon_url:
        "https://bot.ewr1.vultrobjects.com/team/5384/one-icon.png",
      locale: "en",
      sound: "118.mp3",
      popup_chat_window: 1,
      theme: "standard",
      custom_font: "Ubuntu",
      icon_color: "#101010",
      header_bg_color: "rgba(255, 255, 255, 1)",
      body_bg_color: "#F4F6FB",
      user_msg_text_color: "#FFFFFF",
      start_chat_button_radius_style: "circle",
      start_chat_button_radius: 8,
      style: "float",
      position: "right",
      left_spacing: 20,
      right_spacing: 20,
      bottom_spacing: 20,
      max_popup_width: "100%",
      max_chat_width: "100%",
      embed_div_height: 620,
      custom_css: ".image .time {display:none;",
      div_id: "",
      ref: "",
      gtag_id: "G-246FV4VEDQ",
    };

    // Loading the script
    const script = document.createElement("script");
    script.id = "chatbotWidgetV1";
    script.src =
      "https://sdk.dfktv2.com/js/sdk.js?v=21a50494d4e7954130c696e86d011798";

    // Onload event
    script.onload = () => {
      window.chatbotSDK.init({
        baseUrl: "https://sdk.dfktv2.com",
        flowToken: "zpemz56hexc08alh",
      });
    };

    // Adding the script to the <head> section
    document.getElementsByTagName("head")[0].appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.getElementById("chatbotWidgetV1")?.remove();
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return null; // This component doesn't render anything itself
};

export default Chatbot;