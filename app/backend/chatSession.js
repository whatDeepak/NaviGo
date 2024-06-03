import axios from 'axios';

// Function to create a chat session
export async function createChatSession(apiKey, externalUserId) {
    const url = 'https://gateway-dev.on-demand.io/chat/v1/sessions';
    const headers = {
        'apikey': apiKey,
        'Content-Type': 'application/json'
    };
    const body = JSON.stringify({ pluginIds: [], externalUserId });

    try {
        const response = await axios.post(url, body, { headers });
        if (response.status === 200) {
            return response.data.chatSession.id;
        } else {
            throw new Error('Failed to create chat session');
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Function to submit a query
export async function submitQuery(apiKey, sessionId, query) {
    const url = `https://gateway-dev.on-demand.io/chat/v1/sessions/${sessionId}/query`;
    const headers = {
        'apikey': apiKey,
        'Content-Type': 'application/json'
    };
    const body = JSON.stringify({
        endpointId: 'predefined-openai-gpt4o',
        query,
        pluginIds: ['plugin-1717437831', 'plugin-1717340460'],
        responseMode: 'sync',
    });

    try {
        const response = await axios.post(url, body, { headers });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to get query response');
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}
