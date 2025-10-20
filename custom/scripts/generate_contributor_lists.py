import os
import json
import requests
import yaml
import time

# === CONFIG ===
META_FILE = "custom/js/meta-fallback.yaml"
DEFAULT_BRANCH = "main"  # or "master"
OUTPUT_FOLDER = "contributors"
IGNORE_FOLDERS = ["reveal.js", "__pycache__"]

# Load GitHub info from meta-fallback.yaml
with open(META_FILE, "r", encoding="utf-8") as f:
    meta = yaml.safe_load(f)

GITHUB_OWNER = meta.get("githubOwner")
GITHUB_REPO = meta.get("githubRepo")
if not GITHUB_OWNER or not GITHUB_REPO:
    raise ValueError("meta-fallback.yaml must contain githubOwner and githubRepo keys")

API_BASE = f"https://api.github.com/repos/{GITHUB_OWNER}/{GITHUB_REPO}/commits"

# Ensure output folder exists
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# Collect HTML files (first-level subfolders only)
html_files = []
for folder in sorted(os.listdir(".")):
    folder_path = os.path.join(".", folder)
    if folder in IGNORE_FOLDERS or not os.path.isdir(folder_path):
        continue
    for file in sorted(os.listdir(folder_path)):
        if file.endswith(".html"):
            rel_path = os.path.join(folder, file).replace("\\", "/")
            html_files.append(rel_path)

print(f"Found {len(html_files)} HTML files to process.\n")

# Process each HTML file
skipped_files = []
for rel_path in html_files:
    print(f"Processing {rel_path} ...")

    params = {"path": rel_path, "per_page": 100}
    try:
        response = requests.get(API_BASE, params=params)
        if response.status_code == 403:
            print(f"  ⚠ Rate limit reached. Skipping {rel_path}.")
            skipped_files.append(rel_path)
            continue
        response.raise_for_status()
        commits = response.json()
    except requests.RequestException as e:
        print(f"  ❌ Error fetching commits for {rel_path}: {e}")
        skipped_files.append(rel_path)
        continue

    # Collect unique contributors
    contributors_map = {}
    for c in commits:
        author = c.get("author")
        commit_info = c["commit"]["author"]
        key = author["login"] if author else commit_info["name"]

        if key not in contributors_map:
            contributors_map[key] = {
                "name": commit_info["name"],
                "avatar": author["avatar_url"] if author else None,
                "githubUrl": author["html_url"] if author else None
            }

    contributors = list(contributors_map.values())

    # Write JSON file
    json_filename = os.path.join(OUTPUT_FOLDER, f"{os.path.basename(rel_path)}.json")
    with open(json_filename, "w", encoding="utf-8") as f:
        json.dump(contributors, f, indent=2, ensure_ascii=False)

    print(f"  ✅ Saved {len(contributors)} contributors to {json_filename}\n")

print("Processing complete.")
if skipped_files:
    print("\nSkipped files due to rate limits or errors:")
    for f in skipped_files:
        print(f" - {f}")
