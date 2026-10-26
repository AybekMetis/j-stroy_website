import os
import sys
from PIL import Image
# запустк производиться командой python process_images.py название папки, главной картинке обязательно должны быть hero
# Если при запуске передали имя папки, берем его, иначе обрабатываем все
if len(sys.argv) > 1:
    folder_name = sys.argv[1]
    PORTFOLIO_DIR = os.path.join('images', 'portfolio', folder_name)
    if not os.path.exists(PORTFOLIO_DIR):
        print(f"Ошибка: папка '{PORTFOLIO_DIR}' не найдена!")
        sys.exit(1)
    target_dirs = [PORTFOLIO_DIR]
else:
    target_dirs = []
    for root, dirs, files in os.walk('images/portfolio'):
        if any(f.lower().endswith(('.jpg', '.jpeg')) for f in files):
            target_dirs.append(root)

if not target_dirs:
    print("Нет картинок для обработки.")
    sys.exit(0)

for root in target_dirs:
    files = os.listdir(root)
    jpg_files = sorted([f for f in files if f.lower().endswith(('.jpg', '.jpeg'))])
    if not jpg_files:
        continue

    print(f"\nОбработка папки: {root}")
    
    # Ищем файл с именем 'hero'
    hero_file = next((f for f in jpg_files if 'hero' in f.lower()), None)
    
    if hero_file:
        jpg_files.remove(hero_file)
        jpg_files.insert(0, hero_file)
        print(f" Найдена главная: {hero_file} -> станет номером 1")

    for idx, filename in enumerate(jpg_files, start=1):
        file_path = os.path.join(root, filename)
        
        with Image.open(file_path) as img:
            img = img.convert('RGB')
            
            # Версия -960.webp
            img_960 = img.copy()
            img_960.thumbnail((960, 960))
            img_960.save(os.path.join(root, f"{idx}-960.webp"), 'WEBP', quality=82)
            
            # Версия -480.webp
            img_480 = img.copy()
            img_480.thumbnail((480, 480))
            img_480.save(os.path.join(root, f"{idx}-480.webp"), 'WEBP', quality=82)
            
        os.remove(file_path)

print("\n Все картинки успешно обработаны!")