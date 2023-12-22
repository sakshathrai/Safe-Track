import http.server
import json

def extract_actions(user_input):

    data =[
  {
    "Question": "I want to send money to my friend",
    "Answers": {
      "Sacn And Pay": "yes",
      "Mobile Numbers": "yes",
      "Through UPI": "yes",
      "Account Balance": "yes",
      "Tickets Booking": "no",
      "Upi": "yes",
      "Recharge": "yes",
      "FastTag Recharge": "no",
      "TV recharge": "no",
      "Mobile Recharge": "yes",
      "Credit card payment": "no",
      "Travel tickets  movie tickets": "no",
      "Bill": "no",
      "Cylinder Booking": "no",
      "Change Password": "no",
      "Subscriptions": "yes",
      "Settings": "no"
    }
  },
  {
    "Question": "Where can I find my Transaction History",
    "Answers": {
      "Sacn And Pay": "no",
      "Mobile Numbers": "no",
      "Through UPI": "no",
      "Account Balance": "no",
      "Tickets Booking": "no",
      "Upi": "no",
      "Recharge": "yes",
      "FastTag Recharge": "no",
      "TV recharge": "no",
      "Mobile Recharge": "no",
      "Credit card payment": "no",
      "Travel tickets  movie tickets": "no",
      "Bill": "no",
      "Cylinder Booking": "no",
      "Change Password": "no",
      "Subscriptions": "no",
      "Settings": "no",
      "History": "yes",
      "Transactions": "yes"
    }
  },
  {
    "Question": "Where can I find my profile",
    "Answers": {
      "Sacn And Pay": "no",
      "Mobile Numbers": "no",
      "Through UPI": "no",
      "Account Balance": "no",
      "Tickets Booking": "no",
      "Upi": "no",
      "Recharge": "no",
      "FastTag Recharge": "no",
      "TV recharge": "no",
      "Mobile Recharge": "no",
      "Credit card payment": "no",
      "Travel tickets  movie tickets": "no",
      "Bill": "no",
      "Cylinder Booking": "no",
      "Change Password": "no",
      "Subscriptions": "no",
      "Settings": "yes",
      "Profile": "yes",
      "User Settings": "yes"
    }
  },
  {
    "Question": "Show me settings",
    "Answers": {
      "Sacn And Pay": "no",
      "Mobile Numbers": "no",
      "Through UPI": "no",
      "Account Balance": "yes",
      "Tickets Booking": "no",
      "Upi": "no",
      "Recharge": "no",
      "FastTag Recharge": "no",
      "TV recharge": "no",
      "Mobile Recharge": "no",
      "Credit card payment": "no",
      "Travel tickets  movie tickets": "no",
      "Bill": "no",
      "Cylinder Booking": "no",
      "Change Password": "no",
      "Subscriptions": "no",
      "Settings": "yes",
      "User Settings": "yes"
    }
  },
  {
    "Question": "Where can I reset my password",
    "Answers": {
      "Sacn And Pay": "no",
      "Mobile Numbers": "no",
      "Through UPI": "no",
      "Account Balance": "no",
      "Tickets Booking": "no",
      "Upi": "no",
      "Recharge": "no",
      "FastTag Recharge": "no",
      "TV recharge": "no",
      "Mobile Recharge": "no",
      "Credit card payment": "no",
      "Travel tickets  movie tickets": "no",
      "Bill": "no",
      "Cylinder Booking": "no",
      "Change Password": "yes",
      "Subscriptions": "no",
      "Settings": "yes",
      "Password Reset": "yes",
      "Resetting Password": "yes"
    }
  },
  {
    "Question": "Show me my bank balance",
    "Answers": {
      "Sacn And Pay": "no",
      "Mobile Numbers": "no",
      "Through UPI": "no",
      "Account Balance": "yes",
      "Tickets Booking": "no",
      "Upi": "no",
      "Recharge": "no",
      "FastTag Recharge": "no",
      "TV recharge": "no",
      "Mobile Recharge": "no",
      "Credit card payment": "no",
      "Travel tickets  movie tickets": "no",
      "Bill": "no",
      "Cylinder Booking": "no",
      "Change Password": "no",
      "Subscriptions": "no",
      "Settings": "no",
      "Balance": "yes",
      "Bank Balance": "yes"
    }
  },
  {
    "Question": "Where to reset my mpin",
    "Answers": {
      "Sacn And Pay": "no",
      "Mobile Numbers": "no",
      "Through UPI": "no",
      "Account Balance": "no",
      "Tickets Booking": "no",
      "Upi": "no",
      "Recharge": "no",
      "FastTag Recharge": "no",
      "TV recharge": "no",
      "Mobile Recharge": "no",
      "Credit card payment": "no",
      "Travel tickets  movie tickets": "no",
      "Bill": "no",
      "Cylinder Booking": "no",
      "Change Password": "yes",
      "Subscriptions": "no",
      "Settings": "yes",
      "M-PIN Reset": "yes",
      "Resetting M-PIN": "yes"
    }
  },
  {
    "Question": "Is there Ticket Bookings",
    "Answers": {
      "Sacn And Pay": "no",
      "Mobile Numbers": "no",
      "Through UPI": "no",
      "Account Balance": "no",
      "Tickets Booking": "yes",
      "Upi": "no",
      "Recharge": "no",
      "FastTag Recharge": "no",
      "TV recharge": "no",
      "Mobile Recharge": "no",
      "Credit card payment": "no",
      "Travel tickets  movie tickets": "yes",
      "Bill": "no",
      "Cylinder Booking": "no",
      "Change Password": "no",
      "Subscriptions": "no",
      "Settings": "no",
      "Ticketing": "yes",
      "Bookings": "yes"
    }
  },
  {
    "Question": "I want to pay my electricity bill",
    "Answers": {
      "Sacn And Pay": "no",
      "Mobile Numbers": "no",
      "Through UPI": "no",
      "Account Balance": "no",


 "Tickets Booking": "no",
      "Upi": "no",
      "Recharge": "yes",
      "FastTag Recharge": "no",
      "TV recharge": "no",
      "Mobile Recharge": "no",
      "Credit card payment": "no",
      "Travel tickets  movie tickets": "no",
      "Bill": "yes",
      "Cylinder Booking": "no",
      "Change Password": "no",
      "Subscriptions": "no",
      "Settings": "no",
      "Electricity Bill": "yes"
    }
  },
  {
    "Question": "I want to pay my cylinder bill",
    "Answers": {
      "Sacn And Pay": "no",
      "Mobile Numbers": "no",
      "Through UPI": "no",
      "Account Balance": "no",
      "Tickets Booking": "no",
      "Upi": "no",
      "Recharge": "no",
      "FastTag Recharge": "no",
      "TV recharge": "no",
      "Mobile Recharge": "no",
      "Credit card payment": "no",
      "Travel tickets  movie tickets": "no",
      "Bill": "yes",
      "Cylinder Booking": "yes",
      "Change Password": "no",
      "Subscriptions": "no",
      "Settings": "no",
      "Gas Bill": "yes",
      "Cylinder Payment": "yes"
    }
  },
  {
    "Question": "I want to pay my wifi bill",
    "Answers": {
      "Sacn And Pay": "no",
      "Mobile Numbers": "no",
      "Through UPI": "no",
      "Account Balance": "no",
      "Tickets Booking": "no",
      "Upi": "no",
      "Recharge": "yes",
      "FastTag Recharge": "no",
      "TV recharge": "no",
      "Mobile Recharge": "no",
      "Credit card payment": "no",
      "Travel tickets  movie tickets": "no",
      "Bill": "yes",
      "Cylinder Booking": "no",
      "Change Password": "no",
      "Subscriptions": "no",
      "Settings": "no",
      "WiFi Bill": "yes"
    }
  },
  {
    "Question": "I want to pay my water bill",
    "Answers": {
      "Sacn And Pay": "no",
      "Mobile Numbers": "no",
      "Through UPI": "no",
      "Account Balance": "no",
      "Tickets Booking": "no",
      "Upi": "no",
      "Recharge": "no",
      "FastTag Recharge": "no",
      "TV recharge": "no",
      "Mobile Recharge": "no",
      "Credit card payment": "no",
      "Travel tickets  movie tickets": "no",
      "Bill": "yes",
      "Cylinder Booking": "no",
      "Change Password": "no",
      "Subscriptions": "no",
      "Settings": "no",
      "Water Bill": "yes"
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
    print('Server running on port 8080')
    httpd.serve_forever()
