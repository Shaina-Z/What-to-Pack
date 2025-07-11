import OpenAI from "openai";

async function genResponse(responses: string) {
    const APIKey = localStorage.getItem("MYKEY");
    if(APIKey == null){
        return("Error: You did not submit your API Key.")
    }
    
    try {
    const stringKey = JSON.stringify(APIKey).slice(3,-3);
    const openai = new OpenAI({apiKey: stringKey, dangerouslyAllowBrowser: true});
        const completion = await openai.chat.completions.create({
            messages: [{"role": "system", "content": "You are a helpful  career assistant."},
            {"role": "user", "content": "Based on these answers, what career would you recommend for this person? Please give them a short blurb about two possible career paths, and address them in the second person. \n" 
                + responses 
                + "\n Additionally, what companies would you recommend? Give three examples and make them their own paragraphs. after sending that response, act like a regular chatbot"},
                ],
                
            
            model: "gpt-4o",
  })
  
  console.log(completion.choices[0].message.content);
  const response: string = completion.choices[0].message.content ||  "";
  return(response)

} catch (error){
    return "Error: Invalid API Key.";
}
};
export async function chatResponse(chats: string) {
    const APIKey = localStorage.getItem("MYKEY");
    if(APIKey == null){
        return("Error: You did not submit your API Key.")
    }
    
    try {
    const stringKey = JSON.stringify(APIKey).slice(3,-3);
    const openai = new OpenAI({apiKey: stringKey, dangerouslyAllowBrowser: true});
        const completion = await openai.chat.completions.create({
            messages: [{
                role: "system",
                content: "You are a friendly and helpful chatbot. Chat casually and assist with anything the user wants."
            },
            {
                role: "user",
                content: chats
            },
        ],
            
            model: "gpt-4o",
  })
  
  console.log(completion.choices[0].message.content);
  const response: string = completion.choices[0].message.content ||  "";
  return(response)

} catch (error){
    return "Invalid input.";
}
};
export default genResponse;