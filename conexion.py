import mysql.connector
from mysql.connector import Error

# Datos de conexión
host = "localhost"
user = "root"
password = ""
database = "semana 8"

try:
    # Establecer la conexión
    connection = mysql.connector.connect(
        host=host,
        user=user,
        password=password,
        database=database
    )
    
    if connection.is_connected():
        print("Conexión exitosa a la base de datos")
        
except Error as e:
    print(f"Error al conectar a la base de datos: {e}")
