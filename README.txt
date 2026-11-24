Job Allocation System Using Greedy Algorithm

project Link:

📌 Project Overview

The Job Allocation System Using Greedy Algorithm** is a project developed using the C programming language to allocate jobs based on their deadlines and profits.

The main objective of this project is to maximize the total profit by selecting the most profitable jobs and assigning them to available time slots before their deadlines.

This project also includes a web-based interface developed using HTML, CSS, and JavaScript to demonstrate the job allocation process visually.

🎯 Objectives

- To understand and implement the Greedy Algorithm.
- To allocate jobs based on deadlines and profits.
- To maximize total profit.
- To understand job scheduling and time-slot allocation.
- To provide a simple and interactive website for visualizing the results.

🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| C Programming | Implementation of the Greedy Algorithm |
| HTML | Website structure |
| CSS | Website design and styling |
| JavaScript | Interactive job allocation |
| VS Code | Development environment |
| GCC Compiler | Compiling and executing C code |

🧠 Algorithm Used

Greedy Algorithm – Job Sequencing with Deadlines

The Greedy Algorithm makes the best possible choice at each step to achieve maximum profit.

Working Procedure

1. Get the job ID, deadline, and profit from the user.
2. Sort all jobs in descending order of profit.
3. Check the deadline of each job.
4. Search for the latest available time slot before its deadline.
5. Allocate the job if a free slot is available.
6. Skip the job if no suitable slot is available.
7. Calculate and display the total profit.


🌐 Website Features

- Add new jobs.
- Enter job ID, deadline, and profit.
- Remove existing jobs.
- Execute Greedy Algorithm allocation.
- Display allocated time slots.
- Display selected jobs and their profits.
- Calculate the maximum total profit.
- View the algorithm explanation and C source code.

📂 Project Structure

```text
Job_Allocation_Greedy_Project/
│
├── index.html
├── style.css
├── script.js
├── job_allocation.c
└── README.md
```

⚙️ How to Run the C Program

Step 1: Install GCC Compiler

Install GCC using MinGW-w64 or MSYS2.

Step 2: Open the Project Folder

Open the project folder in VS Code.

Step 3: Open the Terminal

Navigate to the folder containing `job_allocation.c`.

Step 4: Compile the C Program

```bash
gcc job_allocation.c -o job_allocation
```

### Step 5: Execute the Program

For Windows PowerShell:

```powershell
.\job_allocation.exe
```

The program will ask you to enter the number of jobs and their details.

🌍 How to Run the Website

1. Open the project folder.
2. Locate `index.html`.
3. Right-click and select Open with Chrome or another web browser.
4. Enter job details or use the sample jobs.
5. Click **Run Greedy Allocation**.
6. View the allocated jobs and maximum total profit.

No separate server or database is required for the basic website demonstration.

⏱️ Time Complexity

Let:

- n = Number of jobs.
- D = Maximum job deadline.

| Operation | Time Complexity |
|---|---|
| Sorting jobs | O(n²) |
| Job allocation | O(n × D) |
| Overall complexity | O(n² + nD) |

**Space Complexity:** O(n + D) for the job and time-slot arrays.

💡 Applications

- Employee task scheduling.
- Project task allocation.
- Deadline-based assignments.
- Resource scheduling.
- Production planning.

⚠️ Assumptions

- Each job requires exactly one time slot.
- Only one job can be scheduled in a time slot.
- A job must be completed on or before its deadline.
- Profit is earned only when a job is successfully scheduled.
- The algorithm considers jobs in descending order of profit.

🚀 Future Enhancements

- Employee skill-based job allocation.
- Priority-based scheduling.
- Database integration.
- Advanced scheduling algorithms.
- Job allocation reports and analytics.

