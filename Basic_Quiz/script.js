const questions = {
  programming: [
    { q: "Which of the following is a valid C data type?", a: ["char", "real", "decimal", "string"], c: 0 },
    { q: "Which operator is used to access structure members in C?", a: [".", "->", ":", "&"], c: 1 },
    { q: "What is the output of: printf(\"%d\", sizeof(char));", a: ["1", "2", "4", "8"], c: 0 },
    { q: "Which keyword is used for recursion in C?", a: ["rec", "call", "none", "function"], c: 2 },
    { q: "What is the extension of a C++ file?", a: [".c", ".java", ".cpp", ".py"], c: 2 },
    { q: "Which loop is guaranteed to execute at least once?", a: ["for", "while", "do-while", "none"], c: 2 },
    { q: "Which of the following is not a programming language?", a: ["Python", "Java", "HTML", "C++"], c: 2 },
    { q: "Which symbol is used to denote a pointer in C?", a: ["*", "&", "$", "#"], c: 0 },
    { q: "What is the value of '5' + 2 in JavaScript?", a: ["7", "52", "NaN", "Error"], c: 1 },
    { q: "What does DOM stand for?", a: ["Document Object Model", "Data Object Method", "Document Oriented Model", "None"], c: 0 }
  ],
  datastructures: [
    { q: "Which data structure uses LIFO?", a: ["Queue", "Stack", "Array", "Tree"], c: 1 },
    { q: "Binary tree has max how many children?", a: ["1", "2", "3", "n"], c: 1 },
    { q: "Which data structure is used in BFS?", a: ["Stack", "Queue", "Tree", "Heap"], c: 1 },
    { q: "What is the time complexity of binary search?", a: ["O(n)", "O(n^2)", "O(log n)", "O(1)"], c: 2 },
    { q: "Which of these is non-linear?", a: ["Array", "List", "Tree", "Queue"], c: 2 },
    { q: "Which traversal method uses Stack?", a: ["Inorder", "Preorder", "Postorder", "DFS"], c: 3 },
    { q: "Which data structure uses FIFO?", a: ["Queue", "Stack", "Graph", "Tree"], c: 0 },
    { q: "In a heap, the top element is always the ___ in a max heap.", a: ["minimum", "maximum", "random", "null"], c: 1 },
    { q: "Which structure is best for implementing recursion?", a: ["Queue", "Stack", "Array", "List"], c: 1 },
    { q: "Which is used for priority scheduling?", a: ["Stack", "Queue", "Priority Queue", "Deque"], c: 2 }
  ],
  networks: [
    { q: "What does HTTP stand for?", a: ["Hyper Text Transfer Protocol", "High Text Transfer Protocol", "Hyperlink Transfer Protocol", "Hyper Tool Transfer Protocol"], c: 0 },
    { q: "Which layer does IP operate at?", a: ["Data link", "Network", "Transport", "Application"], c: 1 },
    { q: "TCP is:", a: ["Connectionless", "Unreliable", "Connection-oriented", "None"], c: 2 },
    { q: "Which protocol uses 3-way handshake?", a: ["UDP", "FTP", "TCP", "SMTP"], c: 2 },
    { q: "DNS stands for", a: ["Domain Name System", "Direct Network Service", "Domain Network Service", "None"], c: 0 },
    { q: "Which device connects different networks?", a: ["Router", "Hub", "Switch", "Repeater"], c: 0 },
    { q: "Which protocol is used for email?", a: ["FTP", "SMTP", "SNMP", "DNS"], c: 1 },
    { q: "Which address is used by a router?", a: ["MAC", "IP", "Port", "Gateway"], c: 1 },
    { q: "ARP is used to resolve:", a: ["IP to MAC", "MAC to IP", "DNS", "None"], c: 0 },
    { q: "Which layer ensures error-free delivery?", a: ["Application", "Network", "Data Link", "Transport"], c: 3 }
  ],
  os: [
    { q: "OS manages ___", a: ["Hardware", "Software", "Both", "None"], c: 2 },
    { q: "Which is not a type of OS?", a: ["Batch", "Multitasking", "Time-sharing", "Free-sharing"], c: 3 },
    { q: "Which one is a real-time OS?", a: ["Windows", "Linux", "RTOS", "DOS"], c: 2 },
    { q: "Kernel is ___", a: ["Hardware", "Software", "Middleware", "None"], c: 1 },
    { q: "Paging is used in", a: ["Segmentation", "Virtual Memory", "Cache", "Interrupt"], c: 1 },
    { q: "Which scheduling algorithm is preemptive?", a: ["FCFS", "SJF", "Round Robin", "None"], c: 2 },
    { q: "Deadlock can occur when ___", a: ["Resources are shared", "No preemption", "Circular wait", "All of these"], c: 3 },
    { q: "Which memory is volatile?", a: ["ROM", "Hard Disk", "RAM", "Flash"], c: 2 },
    { q: "Which of these is not an OS?", a: ["Linux", "Windows", "Oracle", "DOS"], c: 2 },
    { q: "Interrupts are handled by", a: ["CPU", "RAM", "ROM", "Timer"], c: 0 }
  ],
  dbms: [
    { q: "DBMS stands for", a: ["Database Mgmt System", "Data Mgmt System", "Database Management System", "DataBase MS"], c: 2 },
    { q: "Which one is not a DBMS?", a: ["MySQL", "MongoDB", "Oracle", "C++"], c: 3 },
    { q: "Primary key is ___", a: ["duplicate", "unique", "nullable", "none"], c: 1 },
    { q: "Which SQL command is used to remove table?", a: ["DELETE", "DROP", "REMOVE", "ERASE"], c: 1 },
    { q: "Which is a NoSQL DB?", a: ["MySQL", "MongoDB", "Oracle", "SQL Server"], c: 1 },
    { q: "What is the use of 'JOIN' in SQL?", a: ["Combine rows", "Delete table", "Rename column", "None"], c: 0 },
    { q: "Which key is used to prevent duplicate records?", a: ["Primary", "Foreign", "Unique", "Composite"], c: 2 },
    { q: "Normalization is used to", a: ["Reduce redundancy", "Increase duplication", "Create views", "None"], c: 0 },
    { q: "Which language is used to query data?", a: ["DML", "DDL", "SQL", "DCL"], c: 2 },
    { q: "Which clause is used with GROUP BY?", a: ["HAVING", "WHERE", "ORDER", "JOIN"], c: 0 }
  ]
};


let currentQuestionIndex = 0, score = 0, correctCount = 0, incorrectCount = 0;
let currentCategory = 'programming';
let timer, timeLeft = 15;

function startQuiz() {
  currentCategory = document.getElementById("category").value;
  questions[currentCategory] = questions[currentCategory].sort(() => 0.5 - Math.random()); // shuffle
  currentQuestionIndex = 0;
  score = 0;
  correctCount = 0;
  incorrectCount = 0;
  document.getElementById("category-section").style.display = "none";
  document.getElementById("quiz-section").style.display = "block";
  document.getElementById("result-section").style.display = "none";
  document.getElementById("live-score").textContent = "Score: 0";
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  startTimer();
  const qObj = questions[currentCategory][currentQuestionIndex];
  document.getElementById("question").textContent = qObj.q;
  document.getElementById("question-count").textContent =
    `Question ${currentQuestionIndex + 1} of ${questions[currentCategory].length}`;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  qObj.a.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => checkAnswer(index, qObj.c);
    optionsContainer.appendChild(li);
  });

  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selected, correct) {
  clearInterval(timer);
  const options = document.querySelectorAll("#options li");
  options.forEach((li, index) => {
    li.onclick = null;
    if (index === correct) li.classList.add("correct");
    else if (index === selected) li.classList.add("incorrect");
  });

  if (selected === correct) {
    score++;
    correctCount++;
  } else {
    incorrectCount++;
  }

  document.getElementById("live-score").textContent = `Score: ${score}`;
  document.getElementById("next-btn").style.display = "inline-block";
}

function handleNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions[currentCategory].length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("result-section").style.display = "block";

  document.getElementById("score-display").textContent =
    `Your score: ${score} / ${questions[currentCategory].length}`;
  document.getElementById("correct-answers").textContent =
    `Correct: ${correctCount}`;
  document.getElementById("incorrect-answers").textContent =
    `Incorrect: ${incorrectCount}`;

  const highScoreKey = `highScore-${currentCategory}`;
  const prevHigh = localStorage.getItem(highScoreKey) || 0;
  if (score > prevHigh) {
    localStorage.setItem(highScoreKey, score);
  }
  document.getElementById("high-score-display").textContent =
    `High Score: ${localStorage.getItem(highScoreKey)}`;

  renderReview();
}

function renderReview() {
  const reviewContainer = document.getElementById("review-section");
  reviewContainer.innerHTML = "<h3>Review:</h3>";

  questions[currentCategory].forEach((q, i) => {
    const questionBlock = document.createElement("div");
    questionBlock.style.marginBottom = "10px";
    const correctAnswer = q.a[q.c];

    questionBlock.innerHTML = `
      <strong>Q${i + 1}:</strong> ${q.q}<br/>
      <em>Correct Answer:</em> <span style="color: #43a047;">${correctAnswer}</span>
    `;

    reviewContainer.appendChild(questionBlock);
  });
}

function restartQuiz() {
  clearInterval(timer);
  document.getElementById("category-section").style.display = "block";
  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("result-section").style.display = "none";
}

function startTimer() {
  const FULL_DASH_ARRAY = 125.6;
  const circle = document.querySelector('.progress-ring__circle');
  const timerText = document.getElementById("time");

  circle.setAttribute('stroke-dasharray', FULL_DASH_ARRAY);
  circle.setAttribute('stroke-dashoffset', '0');

  timerText.textContent = timeLeft;

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    const offset = FULL_DASH_ARRAY * (1 - timeLeft / 15);
    circle.setAttribute('stroke-dashoffset', offset);
    timerText.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer(-1, questions[currentCategory][currentQuestionIndex].c);
    }
  }, 1000);
}

function signup() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  if (!user || !pass) return alert("Please enter both fields.");
  localStorage.setItem(`user-${user}`, pass);
  alert("Signup successful! You can now login.");
}

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const storedPass = localStorage.getItem(`user-${user}`);
  if (storedPass === pass) {
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("quiz-app").style.display = "block";
  } else {
    alert("Invalid login. Try again or sign up.");
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
}
