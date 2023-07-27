import React, { useEffect } from 'react';

const ONEChatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.one.ie/js/widget/r5mimf8t58skngac/embed.js?id=embed_chatbot_container_id';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="embed_chatbot_container_id" />;
};

export default ONEChatbot;