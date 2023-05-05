module.exports = function () {
  return {
    name: "Chatbot",

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
            <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
            <df-messenger
              intent="WELCOME"
              chat-icon="https://codexceleste.com/chatbotsOld/core/images/zaroc1.png"
              chat-title="Chasire"
              agent-id="b09c4b7c-fe00-46fd-8b03-dbed2ab76bdc"
              language-code="es"
            ></df-messenger>
              `,
          },
        ],
      };
    },
  };
};
