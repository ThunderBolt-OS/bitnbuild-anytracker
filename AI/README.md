## Sales forecasting for multi-product multi-rack (inside warehouse) retail using Deep Neural Networks

The goal of this model is to forecast 3-month sales for 50 different products in 10 different stores when given 5 years of store item sales data using Deep Neural Network (3d LSTM)


## Installation
1. Install python virtualenv
```bash
pip install virtualenv
```

2. Create virtual environment
```bash 
python -m virtualenv venv #for windows
python3 -m venv venv #for linux
python3 -m virtualenv venv # if above linux command doesn't work
```

3. Activate virtual environment
```bash
venv\Scripts\activate #for windows
source venv/bin/activate #for linux
```

4. Install requirements
```bash
pip install -r requirements.txt
```