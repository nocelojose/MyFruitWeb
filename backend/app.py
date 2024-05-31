from flask import Flask, jsonify, request 

app = Flask(__name__)

fruit_prices = {
    'apple': 0.50,
    'orange': 0.75,
    'banana': 0.25,
    'mango': 1.00,
    'peach': 0.65, 
    'pineapple' : 0.75
}

@app.route('/api/fruits', methods = ['GET'])
def get_fruits():
    return jsonify(fruit_prices)

@app.route('/api/calculate', methods=['POST'])
def calculate_totalprice():
    data = request.json
    fruit = data.get('fruit')
    quantity = data.get('quantity')
    if fruit in fruit_prices:
        totalPrice = fruit_prices[fruit] * quantity
        return jsonify({"totalPrice": totalPrice})
    else:
        return jsonify({"error": "Invalid fruit choice"}), 404

if __name__ == "__main__":
    app.run(debug=True)