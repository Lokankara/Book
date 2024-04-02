import re
import json
import requests

def fetch_file_content(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        print(f"Failed to fetch file content from {url}.")
        return None

def parse_ebook_numbers(content):
    ebook_numbers = []
    pattern = r'(.+), by (.+)\s+(\d{4,5})'
    matches = re.findall(pattern, content)
    for match in matches:
        title, author, ebook_number = match
        ebook_numbers.append((ebook_number, title.strip(), author.strip()))
    return ebook_numbers

def get_image_url(ebook_number):
    return f"https://www.gutenberg.org/cache/epub/{ebook_number}/pg{ebook_number}.cover.medium.jpg"

def main():
    urls = ["https://www.gutenberg.org/dirs/GUTINDEX." + str(year) for year in range(1996, 2025)]
    all_books = {year: [] for year in range(1996, 2025)}
    for url in urls:
        year = int(url.split(".")[-1])
        content = fetch_file_content(url)
        if content:
            ebook_numbers = parse_ebook_numbers(content)
            for ebook_number, title, author in ebook_numbers:
                image_url = get_image_url(ebook_number)
                print(f"URL: {image_url}")
                book_data = {
                    "ebook_number": ebook_number,
                    "title": title,
                    "author": author,
                }
                all_books[year].append(book_data)

    with open("books_data.json", "w") as json_file:
        json.dump(all_books, json_file, indent=4)

if __name__ == "__main__":
    main()
