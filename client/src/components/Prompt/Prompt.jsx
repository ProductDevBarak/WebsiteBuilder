import { useState } from "react";
import { createChat } from "../../utils/code";
import { useNavigate } from "react-router-dom";

export default function Prompt() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call createChat and wait for the response
    const response = await createChat(prompt, navigate);

    console.log(response);
    setPrompt("");
  };

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={prompt}
        onChange={handleChange}
        placeholder="Type your prompt here..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}
