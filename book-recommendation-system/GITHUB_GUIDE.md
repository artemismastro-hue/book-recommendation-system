# Οδηγός για το GitHub

## Βήμα 1: Δημιουργία GitHub Account (αν δεν έχεις)

1. Πήγαινε στο https://github.com
2. Κάνε Sign Up με το email σου
3. Επιβεβαίωσε το email σου

## Βήμα 2: Δημιουργία Νέου Repository

1. Στο GitHub, κάνε κλικ στο **"+"** πάνω δεξιά
2. Επίλεξε **"New repository"**
3. Συμπλήρωσε:
   - **Repository name**: `book-recommendation-system`
   - **Description**: `Personalized book recommendation interface for MSc thesis`
   - Επίλεξε **Public** (ή Private αν θέλεις)
   - ΜΗΝ προσθέσεις README, .gitignore, ή license (τα έχουμε ήδη)
4. Κάνε κλικ **"Create repository"**

## Βήμα 3: Εγκατάσταση Git (αν δεν το έχεις)

### Για Windows:
1. Κατέβασε το Git από: https://git-scm.com/download/win
2. Τρέξε το installer
3. Χρησιμοποίησε τις default ρυθμίσεις

### Για Mac:
```bash
brew install git
```

### Για Linux:
```bash
sudo apt-get install git
```

## Βήμα 4: Ρύθμιση Git (πρώτη φορά μόνο)

Άνοιξε το terminal/command prompt και τρέξε:

```bash
git config --global user.name "Το Όνομά Σου"
git config --global user.email "to-email-sou@example.com"
```

## Βήμα 5: Ανέβασμα του Project στο GitHub

### Α. Αν έχεις ήδη τα αρχεία σε φάκελο:

1. Άνοιξε terminal/command prompt
2. Πήγαινε στον φάκελο του project:
```bash
cd path/to/book-recommendation-system
```

3. Αρχικοποίησε το Git repository:
```bash
git init
```

4. Πρόσθεσε όλα τα αρχεία:
```bash
git add .
```

5. Κάνε το πρώτο commit:
```bash
git commit -m "Initial commit: Book Recommendation System"
```

6. Σύνδεσε με το GitHub repository (αντικατέστησε το YOUR_USERNAME):
```bash
git remote add origin https://github.com/YOUR_USERNAME/book-recommendation-system.git
```

7. Ανέβασε τα αρχεία:
```bash
git branch -M main
git push -u origin main
```

### Β. Αν δεν έχεις τοπικά τα αρχεία:

1. Κατέβασε τα αρχεία που σου έδωσα
2. Δημιούργησε νέο φάκελο `book-recommendation-system`
3. Βάλε όλα τα αρχεία μέσα με αυτή τη δομή:

```
book-recommendation-system/
├── src/
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── public/
│   └── index.html
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

4. Ακολούθησε τα βήματα του Α παραπάνω

## Βήμα 6: Προσθήκη Περισσότερων Αλλαγών (στο μέλλον)

Όταν κάνεις αλλαγές στον κώδικα:

```bash
# Δες τι έχει αλλάξει
git status

# Πρόσθεσε τις αλλαγές
git add .

# Κάνε commit με περιγραφικό μήνυμα
git commit -m "Περιγραφή των αλλαγών"

# Ανέβασέ τες στο GitHub
git push
```

## Χρήσιμες Εντολές Git

```bash
# Δες το ιστορικό των commits
git log

# Δες τις διαφορές
git diff

# Δες τα branches
git branch

# Φτιάξε νέο branch
git checkout -b new-feature

# Γύρνα πίσω σε commit
git checkout <commit-hash>

# Clone repository σε άλλο PC
git clone https://github.com/YOUR_USERNAME/book-recommendation-system.git
```

## Προβλήματα & Λύσεις

### Πρόβλημα: "Permission denied"
**Λύση**: Χρησιμοποίησε SSH key ή Personal Access Token αντί για password

### Πρόβλημα: "Repository not found"
**Λύση**: Έλεγξε ότι το URL είναι σωστό και ότι έχεις δικαιώματα

### Πρόβλημα: Merge conflicts
**Λύση**: Άνοιξε τα αρχεία, διόρθωσε τα conflicts, και κάνε commit

## Tips

1. **Κάνε commits συχνά** - Μικρά, συχνά commits είναι καλύτερα από μεγάλα σπάνια
2. **Γράφε περιγραφικά commit messages** - "Fixed bug" < "Fixed rating calculation bug in recommendation algorithm"
3. **Χρησιμοποίησε branches** για νέα features
4. **Κάνε pull πριν το push** αν δουλεύεις με άλλους
5. **Διάβασε το .gitignore** για να ξέρεις τι δεν ανεβαίνει

## Για το Thesis

Στην εργασία σου, μπορείς να αναφέρεις:

"The complete source code is available on GitHub at: https://github.com/YOUR_USERNAME/book-recommendation-system"

Και να βάλεις screenshots από το GitHub repository που δείχνουν:
- Τη δομή των αρχείων
- Τα commits
- Το README

## Επιπλέον Resources

- GitHub Docs: https://docs.github.com
- Git Tutorial: https://git-scm.com/docs/gittutorial
- GitHub Desktop (GUI): https://desktop.github.com/
