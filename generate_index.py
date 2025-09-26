import os
import time

# Base directory and output file
base_dir = "."
output_file = "index.html"

# Folders to ignore
ignore_folders = ["reveal.js", "__pycache__"]

# Find all HTML files in subfolders
slide_files = []
for folder in sorted(os.listdir(base_dir)):
    folder_path = os.path.join(base_dir, folder)
    if folder in ignore_folders or not os.path.isdir(folder_path):
        continue

    for file in sorted(os.listdir(folder_path)):
        if file.endswith(".html"):
            file_path = os.path.join(folder, file).replace("\\", "/")
            # Use folder name + filename (without .html) as title
            title = f"{file[:-5].replace('-', ' ').title()}"

            # Converting the time in seconds to a timestamp
            m_ti = time.ctime(os.path.getmtime(file_path))
            t_obj = time.strptime(m_ti)
            T_stamp = time.strftime("%Y-%m-%d %H:%M:%S", t_obj)

            download_link = file_path+"?print-pdf"
            slide_files.append((folder.replace('-', ' ').title(), title, file_path, download_link, T_stamp))

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
<link rel="stylesheet" href="custom/theme/haervig.css">
</head>
<body>
<div class="reveal">
  <div class="slides">
    <section>
      <table border="1" cellpadding="2" cellspacing="0">
        <thead>
            <tr>
            <th><b>Slide deck</b></th>
            <th><b>Title</b></th>
            <th><b>Links</b></th>
            <th><b>Last modified</b></th>
            </tr>
        </thead>
        <tbody>
""")
    for folder,title, path, download_link, modified in slide_files:
        f.write(f'<tr><td>{folder}</td><td><a href="{path}">{title}</a></td><td><a href="{download_link}">PDF</a></td><td>{modified}</td></tr>\n')


    f.write("""

            </tbody>
        </table>
    </section>
  </div>
</div>

<!-- Reveal.js JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js-plugins@latest/customcontrols/plugin.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js-plugins@latest/chalkboard/plugin.js"></script>
    <script src="main.js" type="module"></script>
</body>
</html>
""")

print(f"Generated {output_file} with {len(slide_files)} slide decks.")
