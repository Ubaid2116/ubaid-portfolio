const QA_DATABASE = {
    greetings: {
      patterns: ['hello', 'hi', 'hey', 'greetings'],
      response:
        "Hello! Welcome to Agentia World. I'm here to help you learn about our AI solutions. What would you like to know?"
    },
    about: {
      patterns: ['what is agentia', 'about agentia', 'tell me about', 'company info'],
      response:
        "Agentia World is a cutting-edge AI platform that empowers businesses with advanced artificial intelligence solutions. We specialize in autonomous agents, neural networks, and intelligent automation systems."
    },
    services: {
      patterns: ['services', 'what do you offer', 'solutions', 'products'],
      response:
        "We offer several AI solutions:\n• Custom AI Agents\n• Neural Network Development\n• Automation Systems\n• Machine Learning Integration\n• AI Consulting Services"
    },
    pricing: {
      patterns: ['pricing', 'cost', 'how much', 'price', 'plans'],
      response:
        "We offer flexible pricing plans:\n• Starter: Basic AI capabilities for small projects\n• Professional: Advanced features for growing businesses\n• Enterprise: Custom solutions for large organizations\n\nContact us for detailed pricing information."
    },
    contact: {
      patterns: ['contact', 'reach', 'support', 'help', 'talk to human'],
      response:
        "You can reach us through:\n• Email: contact@agentia.world\n• Phone: (555) 123-4567\n• Contact form on our website\n\nOur team typically responds within 24 hours."
    },
    technology: {
      patterns: ['technology', 'how it works', 'tech stack', 'platform'],
      response:
        "Our technology stack includes:\n• Advanced Neural Networks\n• Natural Language Processing\n• Machine Learning Algorithms\n• Cloud Infrastructure\n• Real-time Processing Systems"
    },
    default: {
      response:
        "I can help you learn about our services, pricing, technology, or how to get in touch. What would you like to know?"
    }
  }
  
  export async function POST(req: Request) {
    try {
      const { messages } = await req.json()
      const lastMessage = messages[messages.length - 1].content.toLowerCase()
  
      // Find matching response
      let response = QA_DATABASE.default.response
      for (const qa of Object.values(QA_DATABASE)) {
        if (
          'patterns' in qa &&
          qa.patterns?.some((pattern) => lastMessage.includes(pattern))
        ) {
          response = qa.response
          break
        }
      }
  
      return new Response(JSON.stringify({ response }), {
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (error) {
      console.error('Error in chat API:', error)
      return new Response('Error processing chat request', { status: 500 })
    }
  }
  