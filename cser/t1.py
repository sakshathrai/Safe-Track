import http.server
import json

def extract_actions(user_input):

    data =[
  {
    "Question": "I want to send money to my friend",
    "Answers": {
      "scan": "yes",
      "num": "yes",
      "upi": "yes",
      "acc": "yes",
      "Ticket": "no",
      "Education": "no",
      "recharge": "no",
      "Electricity": "no",
      "donate": "no",
      "credit ": "no",
      "postpaid": "no",
      "water": "no",
      "cylinder Booking": "no",
      "Loan-repay": "no",
      "Flight": "no",
      "Settings": "no"
    }
  },
  {
    "Question": "Where can I find my Transaction History",
    "Answers": {
      "scan": "no",
      "num": "no",
      "upi": "no",
      "acc": "yes",
      "Ticket": "no",
      "Education": "no",
      "recharge": "yes",
      "Electricity": "no",
      "donate": "no",
      "credit ": "no",
      "postpaid": "no",
      "water": "no",
      "cylinder Booking": "no",
      "Loan-repay": "no",
      "Flight": "no",
      "Settings": "no"
    }
  },
  {
    "Question": "Where can I find my profile",
    "Answers": {
      "scan": "no",
      "num": "no",
      "upi": "no",
      "acc": "no",
      "Ticket": "no",
      "Education": "no",
      "recharge": "no",
      "Electricity": "no",
      "donate": "no",
      "credit ": "no",
      "postpaid": "no",
      "water": "no",
      "cylinder Booking": "no",
      "Loan-repay": "no",
      "Flight": "no",
      "Settings": "yes"
    }
  },
  {
    "Question": "Show me settings",
    "Answers": {
      "scan": "no",
      "num": "no",
      "upi": "no",
      "acc": "yes",
      "Ticket": "no",
      "Education": "no",
      "recharge": "no",
      "Electricity": "no",
      "donate": "no",
      "credit ": "no",
      "postpaid": "no",
      "water": "no",
      "cylinder Booking": "no",
      "Loan-repay": "no",
      "Flight": "no",
      "Settings": "yes"
    }
  },
  {
    "Question": "Where can I reset my password",
    "Answers": {
      "scan": "no",
      "num": "no",
      "upi": "no",
      "acc": "no",
      "Ticket": "no",
      "Education": "no",
      "recharge": "no",
      "Electricity": "no",
      "donate": "no",
      "credit ": "no",
      "postpaid": "no",
      "water": "no",
      "cylinder Booking": "no",
      "Loan-repay": "no",
      "Flight": "no",
      "Settings": "yes"
    }
  },
  {
    "Question": "Show me my bank balance",
    "Answers": {
      "scan": "no",
      "num": "no",
      "upi": "no",
      "acc": "yes",
      "Ticket": "no",
      "Education": "no",
      "recharge": "no",
      "Electricity": "no",
      "donate": "no",
      "credit ": "no",
      "postpaid": "no",
      "water": "no",
      "cylinder Booking": "no",
      "Loan-repay": "no",
      "Flight": "no",
      "Settings": "no"
    }
  },
  {
    "Question": "Where to reset my mpin",
    "Answers": {
      "scan": "no",
      "num": "no",
      "upi": "no",
      "acc": "no",
      "Ticket": "no",
      "Education": "no",
      "recharge": "no",
      "Electricity": "no",
      "donate": "no",
      "credit ": "no",
      "postpaid": "no",
      "water": "no",
      "cylinder Booking": "no",
      "Loan-repay": "no",
      "Flight": "no",
      "Settings": "yes"
    }
  },
  {
    "Question": "Is there Ticket Bookings",
    "Answers": {
      "scan": "no",
      "num": "no",
      "upi": "no",
      "acc": "no",
      "Ticket": "yes",
      "Education": "no",
      "recharge": "no",
      "Electricity": "no",
      "donate": "no",
      "credit ": "no",
      "postpaid": "no",
      "water": "no",
      "cylinder Booking": "no",
      "Loan-repay": "no",
      "Flight": "no",
      "Settings": "no"
    }
  },
  {
    "Question": "I want to pay my electricity bill",
    "Answers": {
      "scan": "no",
      "num": "no",
      "upi": "no",
      "acc": "no",
      "Ticket": "no",
      "Education": "no",
      "recharge": "yes",
      "Electricity": "yes",
      "donate": "no",
      "credit ": "no",
      "postpaid": "no",
      "water": "no",
      "cylinder Booking": "yes",
      "Loan-repay": "no",
      "Flight": "no",
      "Settings": "no"
    }
  },
  {
    "Question": "I want to pay my cylinder bill",
    "Answers": {
      "scan": "no",
      "num": "no",
      "upi": "no",
      "acc": "no",
      "Ticket": "no",
      "Education": "no",
      "recharge": "no",
      "Electricity": "no",
      "donate": "no",
      "credit ": "no",
      "postpaid": "no",
      "water": "no",
      "cylinder Booking": "yes",
      "Loan-repay": "no",
      "Flight": "no",
      "Settings": "no"
    }
  },
  {
    "Question": "I want to pay my wifi bill",
    "Answers": {
      "scan": "no",
      "num": "no",
      "upi": "no",
      "acc": "no",
      "Ticket": "no",
      "Education": "no",
      "recharge": "yes",
      "Electricity": "no",
      "donate": "no",
      "credit ": "no",
      "postpaid": "no",
      "water": "no",
      "cylinder Booking": "no",
      "Loan-repay": "no",
      "Flight": "no",
      "Settings": "no"
    }
  },
  {
    "Question": "I want to pay my water bill",
    "Answers": {
      "scan": "no",
      "num": "no",
      "upi": "no",
      "acc": "no",
      "Ticket": "no",
      "Education": "no",
      "recharge": "no",
      "Electricity": "no",
      "donate": "no",
      "credit ": "no",
      "postpaid": "no",
      "water": "yes",
      "cylinder Booking": "no",
      "Loan-repay": "no",
      "Flight": "no",
      "Settings": "no"
    }
  }
]



    user_input_lower = user_input.lower()
    actions = set()

    for entry in data:
        question_lower = entry["Question"].lower()
        if any(word in user_input_lower for word in question_lower.split()):
            actions.update(action for action, response in entry["Answers"].items() if response.lower() == 'yes')

    return list(actions) if actions else None

class APIServer(http.server.BaseHTTPRequestHandler):
    def _set_headers(self, content_type="application/json"):
        self.send_response(200)
        self.send_header("Content-type", content_type)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers()

    def do_GET(self):
        self._set_headers()
        response_data = {
            "SAFE-TRACK BOT": "Hi! I'm here to assist you."
        }
        self.wfile.write(json.dumps(response_data).encode())

    def do_POST(self):
        content_length = int(self.headers["Content-Length"])
        post_data = self.rfile.read(content_length).decode("utf-8")

        actions = extract_actions(post_data)

        response_data = {
            "Actions": actions if actions else "I'm not sure how to help with that."
        }

        self._set_headers()
        self.wfile.write(json.dumps(response_data).encode())

if __name__ == '__main__':
    server_address = ('', 8080)
    httpd = http.server.HTTPServer(server_address, APIServer)
    print('Server running on port 8080...')
    httpd.serve_forever()

