#!/bin/bash

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is not installed. Please install it with:"
    echo "brew install imagemagick"
    exit 1
fi

# Folder containing images (default is current directory)
folder="${1:-.}"

echo "Processing images in: $folder"

# First pass: Find and list all image files that will be processed
echo "The following files will be processed:"
files_to_process=()

while IFS= read -r file; do
    filename=$(basename "$file")
    extension=$(echo "${filename##*.}" | tr '[:upper:]' '[:lower:]')
    basename="${filename%.*}"

    if [[ "$extension" == "png" ]]; then
        echo "  $filename (will be converted to JPG and resized to max 512px width)"
    else
        echo "  $filename (will be resized to max 512px width)"
    fi

    files_to_process+=("$file")
done < <(find "$folder" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \))

# Check if any files were found
if [ ${#files_to_process[@]} -eq 0 ]; then
    echo "No image files found in $folder."
    exit 0
fi

# Ask for confirmation
echo ""
read -p "Do you want to proceed with processing these files? (y/n): " confirm

if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
    echo "Operation cancelled."
    exit 0
fi

# Process all confirmed image files
echo ""
echo "Processing files..."

for file in "${files_to_process[@]}"; do
    filename=$(basename "$file")
    extension=$(echo "${filename##*.}" | tr '[:upper:]' '[:lower:]')
    basename="${filename%.*}"
    directory=$(dirname "$file")

    echo "Processing: $filename"

    # Create temporary file
    temp_file="$directory/temp_$filename"

    # For PNG files, convert to JPG
    if [[ "$extension" == "png" ]]; then
        # Resize and convert PNG to JPG
        convert "$file" -resize "512x>" "$directory/${basename}.jpg"

        # Remove original PNG file
        rm "$file"

        echo "  Converted and resized: $filename -> ${basename}.jpg"
    else
        # For JPG files, just resize
        convert "$file" -resize "512x>" "$temp_file"

        # Replace original with resized version
        mv "$temp_file" "$file"

        echo "  Resized: $filename"
    fi
done

echo "All images processed successfully!"
