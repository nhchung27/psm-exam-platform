# 🎓 PSM Exam Platform

> Professional Scrum Master (PSM) Certification Preparation Platform

A modern, feature-rich exam platform for PSM I and PSM II certification preparation with comprehensive analytics, progress tracking, and a beautiful dark theme interface.

## ✨ Features

### 📊 Dashboard Analytics
- **Performance Overview**: Track your progress with detailed statistics
- **Exam History**: Complete history of all your attempts with timestamps
- **PSM I & PSM II Analytics**: Separate analysis for each certification level
  - Average score tracking
  - Best score achievements
  - Pass rate calculation (≥85%)
  - Trend analysis (improving/stable/declining)

### 📝 Exam Experience
- **Multiple Exam Types**: PSM I (Tests 1-5) and PSM II (Super 1-3, Tests 1-3)
- **Question Types**: Single choice and multiple choice questions
- **Instant Feedback**: Real-time answer validation with color indicators
- **Detailed Explanations**: Learn from mistakes with comprehensive explanations
- **Personal Notes**: Add notes to any question for future reference
- **Progress Tracking**: Visual progress bar and question navigator

### 🎨 Modern UI/UX
- **Dark Theme**: Easy on the eyes with teal/cyan accents
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Smooth Animations**: Professional transitions and hover effects
- **Glassmorphism**: Modern design with backdrop blur effects

### 💾 Data Persistence
- **LocalStorage**: All progress and notes saved automatically
- **No Backend Required**: Fully client-side application
- **Privacy First**: Your data never leaves your device

## 🚀 Live Demo

**[View Live Demo](https://YOUR_USERNAME.github.io/psm-exam-platform/)**

## 📸 Screenshots

### Dashboard
![Dashboard Overview](screenshots/dashboard.png)

### Exam Interface
![Exam Interface](screenshots/exam.png)

### Analytics
![Analytics](screenshots/analytics.png)

## 🛠️ Tech Stack

- **React 18**: Modern UI framework
- **Tailwind CSS**: Utility-first styling
- **Chart.js**: Data visualization (optional)
- **Vanilla JavaScript**: No build tools required
- **LocalStorage API**: Client-side data persistence

## 📦 Installation

### Option 1: GitHub Pages (Recommended)
1. Fork this repository
2. Enable GitHub Pages in Settings → Pages
3. Select `main` branch and `/` (root) folder
4. Access your site at `https://your-username.github.io/psm-exam-platform/`

### Option 2: Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/psm-exam-platform.git
   cd psm-exam-platform
   ```

2. Start a local server:
   ```bash
   # Using Python
   python3 -m http.server 8000

   # Using Node.js
   npx http-server -p 8000
   ```

3. Open in browser:
   ```
   http://localhost:8000
   ```

### Option 3: Direct File Access
Simply open `index.html` in your browser (may have limitations due to CORS)

## 📖 Usage Guide

### Taking an Exam
1. Navigate to the dashboard
2. Select a PSM I or PSM II exam
3. Answer all questions
4. Click "Nộp bài" (Submit) to see results
5. Review explanations and add personal notes

### Viewing Analytics
1. Complete multiple exam attempts
2. View your progress in the Analytics section
3. Track improvements over time
4. Identify weak areas for focused study

### Managing Data
- **Export Data**: Your data is stored in browser localStorage
- **Clear Data**: Use browser developer tools → Application → Local Storage
- **Backup**: Copy localStorage data for backup

## 🎯 Exam Content

### PSM I
- **5 Tests**: Covering all PSM I topics
- **30 questions each**: Mix of single and multiple choice
- **Topics**: Scrum framework, roles, events, artifacts, and values

### PSM II
- **6 Advanced Tests**: Super tests and regular tests
- **30 questions each**: Complex scenarios and deep understanding
- **Topics**: Advanced Scrum practices, leadership, and scaling

## 🔧 Customization

### Adding New Exams
Edit `data.js` to add new questions:

```javascript
const psm1Test6Questions = [
  {
    id: 1,
    question: "Your question here?",
    type: "single", // or "multiple"
    choices: [
      { key: "A", text: "Option A" },
      { key: "B", text: "Option B" },
    ],
    correctAnswers: ["A"],
    explanation: "Explanation here..."
  }
];
```

### Changing Theme Colors
Modify Tailwind classes in `PSMApplication.js`:
- Primary: `cyan-500`, `teal-500`
- Background: `gray-900`, `slate-900`
- Accents: Customize as needed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Scrum.org**: For PSM certification program
- **Tailwind CSS**: For the amazing utility-first CSS framework
- **React**: For the powerful UI library
- **Community**: For feedback and contributions

## 📞 Support

For questions or issues:
- Open an [Issue](https://github.com/YOUR_USERNAME/psm-exam-platform/issues)
- Email: your-email@example.com

## 🎖️ Certification Resources

- [Scrum.org PSM Certification](https://www.scrum.org/assessments/professional-scrum-master-i-certification)
- [Scrum Guide](https://scrumguides.org/)
- [PSM Study Resources](https://www.scrum.org/resources)

---

**Made with ❤️ for the Scrum community**

**Target Score: 85%+ | Good Luck! 🚀**
