import requests
from bs4 import BeautifulSoup
import json

url = 'https://pelispanda.re/'
response = requests.get(url)
peliculas = []

# Crea un objeto BeautifulSoup
soup = BeautifulSoup(response.text, 'html.parser')


# Busca todos los elementos que tengan la clase 'item'
items = soup.find_all('div', {'class': 'card card--big'})



# Recorre cada elemento
for item in items:
    #extrae la imagen
    imagen = item.find('img')['data-src']
    alt = item.find('img')['alt']
    categoria = item.find('span', {'class': 'card__category'}).text
    rate = item.find('span', {'class': 'card__rate'}).text
    #extrae el titulo
    titulo = item.find('h3', {'class': 'card__title'}).text

    

    peliculas.append(
        {
            'id': str(len(peliculas) + 1),
            'imagen': imagen,
            'titulo': titulo,
            'alt': alt,
            'categoria': categoria,
            'rate': rate
        }
    )

    #guardar en un archivo json
    with open('peliculas.json', 'w') as file:
        json.dump(peliculas, file, indent=4)









    









