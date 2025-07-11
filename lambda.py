people = [
    {"name" : "Jack", "house": "G108"},
    {"name": "Spencer", "house": "G97"},
    {"name": "Myles", "house": "G80"}
]


# def f(person):
#     return person["name"]

people.sort(key=lambda person: person["name"])

print(people)