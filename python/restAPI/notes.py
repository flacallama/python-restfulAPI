

def do_you_know():
    people_you_know = input(" write people you know separated by commas ")
    person = input(" Type one person you know ")
    normalized_people = [peop.strip().lower() for peop in people_you_know.split(",")]
    print(normalized_people)
    if person in normalized_people:
        print("you know {}".format(person))

do_you_know()
