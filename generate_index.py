import os

# Base directory and output file
base_dir = "."
output_file = "index.html"

# Folders to ignore
ignore_folders = ["reveal.js", "__pycache__"]

# Find all slide decks
slide_decks = []
for folder in sorted(os.listdir(base_dir)):
    folder_path = os.path.join(base_dir, folder)
    index_path = os.path.join(folder_path, "index.html")
    if folder in ignore_folders:
        continue
    if os.path.isdir(folder_path) and os.path.exists(index_path):
        title = folder.replace("-", " ").title()
        download_link = index_path+"?print-pdf"
        slide_decks.append((title, os.path.join(folder, "index.html").replace("\\","/"), download_link))

# Generate main index.html
with open(output_file, "w") as f:
    f.write("""<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>All Slide Decks</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Reveal.js CSS -->
<link rel="stylesheet" href="reveal.js/dist/reset.css">
<link rel="stylesheet" href="reveal.js/dist/reveal.css">
<link rel="stylesheet" href="reveal.js/dist/theme/white.css">
</head>
<body>
<div class="reveal">
  <div class="slides">
    <section>
      <table border="1" cellpadding="2" cellspacing="0">
        <thead>
            <tr>
            <th><b>Slidedeck title</b></th>
            <th colspan="3"><b>Links</b></th>
            </tr>
        </thead>
        <tbody>
""")
    for title, path, download_link in slide_decks:
        f.write(f'<tr><td>{title}</td><td><a href="{path}">Slides</a></td><td><a href="{download_link}">Download PDF</a></td></tr>\n')


    f.write("""

            </tbody>
        </table>
    </section>
  </div>
</div>

<!-- Reveal.js JS -->
<script src="reveal.js/dist/reveal.js"></script>
<script src="main.js" type="module"></script>
</body>
</html>
""")

print(f"Generated {output_file} with {len(slide_decks)} slide decks.")
