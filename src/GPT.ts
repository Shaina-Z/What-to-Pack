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
            messages: [{"role": "system", "content": "You are a helpful trave; assistant."},
            {"role": "user", "content": "Based on these answers, what clothes would you recommend for them to pack based on where they are going?. \n" 
                + responses },
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
export default genResponse;