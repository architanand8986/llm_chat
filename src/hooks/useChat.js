import { useState, useEffect } from "react";
import useGroq from "./useGroq";
import useCache from "./useCache";


const useChat = (model) => {
	const [prompt, setPrompt] = useState("");
	const [messages, setMessages] = useCache("chatHistory", []);
	const [currentPrompt, setCurrentPrompt] = useState("");

	// Build the full message history for the LLM (all previous + new user prompt if any)
	const llmMessages = [
		...messages,
		...(currentPrompt ? [{ role: "user", content: currentPrompt }] : []),
	];
	const response = useGroq(llmMessages, model);


		useEffect(() => {
			if (response && currentPrompt) {
				setMessages((prev) => [
					...prev,
					{ role: "user", content: currentPrompt },
					{ role: "assistant", content: response },
				]);
				setCurrentPrompt("");
			}
			// eslint-disable-next-line
		}, [response]);

	const sendPrompt = () => {
		if (prompt.trim() === "") return;
		setCurrentPrompt(prompt);
		setPrompt("");
	};

		return {
			prompt,
			setPrompt,
			messages,
			sendPrompt,
		};
};

export default useChat;
