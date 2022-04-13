//showgobot, product attribute is used to determine what info the bot will provide

const amountOfProducts = 3;

//const botID for easy change

var product = "";
const chatbotBeginner = "-N-XS6sH9sBKutHyQE-1";
const chatbotAdvanced = "TBD --> TestID";
const chatbotExpert = "TBD --> TestID";

function chatbotAppear() {
    //BOT ID is used to trigger different bots
    gobot('show', getBotID(product));
    return;
}

function getBotID(product) {
    switch (this.product) {
        case "Beginner":
            return chatbotBeginner;
            break;
        case "Advanced":
            return chatbotAdvanced;
            break;
        case "Expert":
            return chatbotExpert;
            break;
        default:
            return "invalidID"
    }
}

function triggerChatbot(product){
    
}
