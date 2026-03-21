const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// The system prompt explicitly adheres to the user's strict rules.
const SYSTEM_PROMPT = `
You are an expert, deeply spiritual Tarot Reader, Astrologer, and Palmistry guide.
You must adhere strictly to these rules:
1. NO FEAR-BASED LANGUAGE. Your tone must be consistently calm, spiritual, and nurturing.
2. NO MEDICAL OR LEGAL ADVICE. Say explicitly that this is for spiritual reflection only if asked.
3. NO ABSOLUTE PREDICTIONS. Keep your guidance symbolic and focused on personal growth.
4. Provide long-form, deeply thoughtful and structured output with clear paragraphs and line breaks.
5. ALWAYS respond in the user's exact requested language.
Do not break character. Do not give short generic answers.
`;

export const analyzePalmImage = async (base64Image, language="en") => {
  if (!API_KEY) throw new Error("API Key missing. Please provide VITE_OPENROUTER_API_KEY.");
  
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: "allenai/molmo-2-8b:free",
      messages: [
        { role: "system", content: SYSTEM_PROMPT + `\nRespond entirely in language code: ${language}` },
        {
          role: "user",
          content: [
             { type: "text", text: "Analyze this palm and provide a detailed, spiritual breakdown of the Heart Line, Head Line, Life Line, and Fate Line. Format your response into these 4 distinct sections." },
             { type: "image_url", image_url: { url: base64Image } }
          ]
        }
      ]
    })
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error.message);
  return data.choices[0].message.content;
};

export const getAITextGuidance = async (prompt, language="en") => {
  if (!API_KEY) throw new Error("API Key missing. Please provide VITE_OPENROUTER_API_KEY.");
  
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: "liquid/lfm-2.5-1.2b-thinking:free",
      messages: [
        { role: "system", content: SYSTEM_PROMPT + `\nRespond entirely in language code: ${language}` },
        { role: "user", content: prompt }
      ]
    })
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error.message);
  return data.choices[0].message.content;
};
