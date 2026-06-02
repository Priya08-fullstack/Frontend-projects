from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)

from flask import send_from_directory
@app.route('/')
def home():
    return send_from_directory('.','index.html')
@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.',path)


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if os.path.exists("users.json"):
        with open("users.json", "r") as f:
            users = json.load(f)
    else:
        users = []

    for user in users:
        if user["email"] == username and user["password"] == password:
            return jsonify({"status": "success"})

    return jsonify({"status": "fail"}) 

    
@app.route('/register', methods=['POST'])
def register():
    data = request.json

    user = {
        "name": data.get("name"),
        "email": data.get("email"),
        "password": data.get("password")
    }

    
    if os.path.exists("users.json"):
        with open("users.json", "r") as f:
            users = json.load(f)
    else:
        users = []

    
    for u in users:
        if u["email"] == user["email"]:
            return jsonify({"status": "exists"})

    users.append(user)

    
    with open("users.json", "w") as f:
        json.dump(users, f)

    return jsonify({"status": "registered"}) 

@app.route('/admin-login', methods=['POST'])
def admin_login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    print(username,password)
    if username == "admin" and password == "admin123":
        return jsonify({"status": "success"})
    else:
        return jsonify({"status": "fail"}) 





@app.route('/add-product', methods=['POST'])
def add_product():
    data = request.json

    product = {
        "name": data.get("name"),
        "price": data.get("price"),
        "image": data.get("image")
    }

    if os.path.exists("products.json"):
        with open("products.json", "r") as f:
            products = json.load(f)
    else:
        products = []

    products.append(product)

    with open("products.json", "w") as f:
        json.dump(products, f)

    return jsonify({"message": "Product added"})



@app.route('/products', methods=['GET'])
def get_products():
    if os.path.exists("products.json"):
        with open("products.json", "r") as f:
            products = json.load(f)
    else:
        products = []

    return jsonify(products)


if __name__ == '__main__':
    app.run(debug=True) 
