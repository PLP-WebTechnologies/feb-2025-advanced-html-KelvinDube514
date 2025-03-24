// Yuki Chatbot for Level Up Emporium
class YukiChatbot {
    constructor() {
        this.responses = {
            greeting: [
                "Hello! I'm Yuki, your Level Up Emporium assistant. How can I help you today?",
                "Hi there! Welcome to Level Up Emporium. I'm Yuki, and I'm here to assist you!",
                "Greetings! I'm Yuki, your gaming companion. What can I do for you?"
            ],
            farewell: [
                "Goodbye! Enjoy your gaming adventures!",
                "See you later! Don't forget to check out our latest releases!",
                "Take care! Come back soon for more gaming fun!"
            ],
            thanks: [
                "You're welcome! Is there anything else I can help you with?",
                "My pleasure! Let me know if you need anything else!",
                "Glad I could help! What else would you like to know?"
            ],
            games: [
                "We have a wide selection of games including action, RPG, strategy, sports, and indie games. What genre interests you?",
                "Our featured games include FC 25, Demon Slayer, Assassin's Creed Shadows, and more. Would you like to know more about any specific game?",
                "We regularly update our game collection. Would you like to see our latest releases?"
            ],
            prices: [
                "Our game prices range from ¥9,800 to ¥29,800. Would you like to see specific game prices?",
                "We offer competitive prices and regular discounts. Would you like to know about our current deals?",
                "All our prices are in Japanese Yen (¥). Would you like to see prices for specific games?"
            ],
            events: [
                "We host various gaming events including the Tokyo Gaming Festival, Fighting Game Championships, and RPG Guild Meetups. Would you like to know more about any specific event?",
                "Our next major event is the Tokyo Gaming Festival 2025 from April 15-17. Would you like to register?",
                "We have regular community events and tournaments. Would you like to see our upcoming schedule?"
            ],
            accessories: [
                "We offer a wide range of gaming accessories including headsets, keyboards, mice, and more. What type of accessory are you looking for?",
                "Our accessories section includes premium brands like Razer, Logitech, and SteelSeries. Would you like to see specific products?",
                "We have gaming chairs, monitors, and other essential gaming gear. What interests you?"
            ],
            default: [
                "I'm not sure I understand. Could you please rephrase that?",
                "I'm still learning! Could you try asking that in a different way?",
                "I'm not sure about that. Would you like to know about our games, events, or accessories instead?"
            ]
        };
    }

    getResponse(input) {
        input = input.toLowerCase();
        
        // Check for greetings
        if (input.match(/^(hi|hello|hey|greetings)/)) {
            return this.getRandomResponse('greeting');
        }
        
        // Check for farewells
        if (input.match(/^(bye|goodbye|see you|farewell)/)) {
            return this.getRandomResponse('farewell');
        }
        
        // Check for thanks
        if (input.match(/^(thanks|thank you|appreciate it)/)) {
            return this.getRandomResponse('thanks');
        }
        
        // Check for game-related queries
        if (input.match(/^(games|game|gaming|play|playing)/)) {
            return this.getRandomResponse('games');
        }
        
        // Check for price-related queries
        if (input.match(/^(price|cost|expensive|cheap|budget)/)) {
            return this.getRandomResponse('prices');
        }
        
        // Check for event-related queries
        if (input.match(/^(event|events|tournament|festival|meetup)/)) {
            return this.getRandomResponse('events');
        }
        
        // Check for accessory-related queries
        if (input.match(/^(accessory|accessories|gear|equipment|hardware)/)) {
            return this.getRandomResponse('accessories');
        }
        
        // Default response
        return this.getRandomResponse('default');
    }

    getRandomResponse(category) {
        const responses = this.responses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize chatbot
const yuki = new YukiChatbot();

// Chat interface functionality
document.addEventListener('DOMContentLoaded', () => {
    const chatInterface = document.getElementById('chat-interface');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const toggleChat = document.getElementById('toggle-chat');

    // Toggle chat interface
    toggleChat.addEventListener('click', () => {
        chatInterface.classList.toggle('active');
    });

    // Send message
    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            // Add user message
            addMessage('user', message);
            
            // Get and add bot response
            const response = yuki.getResponse(message);
            setTimeout(() => addMessage('bot', response), 500);
            
            // Clear input
            userInput.value = '';
        }
    }

    // Add message to chat
    function addMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}); 