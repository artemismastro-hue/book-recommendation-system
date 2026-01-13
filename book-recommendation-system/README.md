# Book Recommendation System

A personalized book recommendation interface built with React, developed as part of an MSc thesis in Data Analytics and Technologies.

## 🎯 Overview

This application provides personalized book recommendations based on user preferences and ratings. It combines:
- **Content-based filtering**: Matches books by genre, subgenre, and attributes
- **Collaborative filtering**: Uses ratings from similar users
- **Hybrid approach**: Combines both methods for better recommendations

## ✨ Features

- **12 Main Genres**: Fantasy, Sci-Fi, Mystery, Romance, Thriller, Historical, Biography, Self-Help, Horror, Comedy, Adventure, Philosophy
- **38 Subgenres**: Detailed categorization for more precise recommendations
- **50+ Books Database**: Curated collection with ratings and reviews
- **Interactive UI**: Multi-step process for preference selection
- **Rating System**: Rate popular books to improve recommendations
- **Detailed Book Information**: View descriptions, ratings, and reviews

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/book-recommendation-system.git
cd book-recommendation-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser to `http://localhost:3000`

## 🛠️ Technology Stack

- **React** - Frontend framework
- **Lucide React** - Icon library
- **Tailwind CSS** - Styling framework

## 📊 How It Works

### Recommendation Algorithm

The system uses a hybrid scoring algorithm that combines multiple factors:

1. **Genre Match** (+50 points): Books matching selected genres
2. **Subgenre Match** (+30 points): Books matching selected subgenres
3. **Collaborative Filtering** (×10): Average ratings from similar users
4. **Content-Based** (×5): Book's overall rating

Books are sorted by their total score, and the top 12 recommendations are displayed.

### User Journey

1. **Welcome Screen**: Introduction to the system
2. **Genre Selection**: Choose preferred genres and subgenres
3. **Rating**: Rate 15 popular books
4. **Recommendations**: View personalized book suggestions
5. **Details**: Click any book for more information

## 📁 Project Structure

```
book-recommendation-system/
├── src/
│   ├── App.jsx           # Main application component
│   └── index.js          # Entry point
├── public/
│   └── index.html        # HTML template
├── package.json          # Dependencies
└── README.md            # This file
```

## 📚 Dataset

The system includes:
- **Popular Books**: 15 well-known titles for initial rating
- **Recommendation Pool**: 50+ books across all genres
- **Metadata**: Title, author, genre, subgenre, rating, description, reviews

## 🎓 Academic Context

This project was developed as part of an MSc thesis titled:
**"From Data to Reading Choices: Developing a Personalized Book Recommendation Interface"**

**Student**: Mastrogiannopoulou Artemis  
**Program**: MSc in Data Analytics and Technologies  
**Year**: 2024-2025

## 📖 Documentation

For detailed documentation about the recommendation algorithm, system architecture, and evaluation results, please refer to the thesis document.

## 🤝 Contributing

This is an academic project, but suggestions and feedback are welcome! Feel free to:
- Open an issue for bug reports
- Suggest new features
- Propose improvements to the algorithm

## 📄 License

This project is part of academic research. Please cite appropriately if used in academic work.

## 📧 Contact

For questions or feedback, please contact: [your-email@example.com]

## 🙏 Acknowledgments

- Thanks to all the authors whose books are featured in this system
- Icons provided by Lucide React
- UI components styled with Tailwind CSS
