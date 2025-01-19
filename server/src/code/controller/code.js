import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  organization: process.env.ORG,
  apiKey: process.env.OPENAI_API_KEY,
});

export const createChat = async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      // "id": "chatcmpl-ft:gpt-4o-2024-08-06:barak::Ar1tgxBb",
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: req.body.prompt,
        },
      ],
    });

    res.json({
      completion: completion.choices[0].message,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
