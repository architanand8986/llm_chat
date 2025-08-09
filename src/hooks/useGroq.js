import React, { useState, useEffect} from 'react'
import { Groq } from 'groq-sdk';

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser:true,
});


// messages: array of {role, content}, model: string
function useGroq(messages, model = "llama-3.3-70b-versatile") {
    const [response, setResponse] = useState("");

    useEffect(() => {
        const fetchResponse = async () => {
            try {
                const chatCompletion = await groq.chat.completions.create({
                    messages: messages,
                    model: model,
                    temperature: 1,
                    max_completion_tokens: 1024,
                    top_p: 1,
                    stream: true,
                });

                let fullResponse = "";
                for await (const chunk of chatCompletion) {
                    fullResponse += chunk.choices[0]?.delta?.content || "";
                }
                setResponse(fullResponse);
            } catch (error) {
                console.error("Error fetching response:", error);
            }
        };

        // Only fetch if last message is from user and not empty
        if (messages && messages.length > 0 && messages[messages.length-1].role === "user" && messages[messages.length-1].content) {
            fetchResponse();
        }
    }, [JSON.stringify(messages), model]);

    return response;
}

export default useGroq;