JOB ALLOCATION USING GREEDY ALGORITHM
======================================

PROJECT OVERVIEW
This mini project allocates jobs to time slots to get the maximum possible
profit. Every job takes one time slot and must be completed on or before
its deadline.

FILES
-----
1. job_allocation.c  - Main C program using the greedy algorithm.
2. index.html        - Web project page.
3. style.css         - Website design.
4. script.js         - Browser demo of the same greedy logic.

HOW TO OPEN THE WEB PROJECT
---------------------------
1. Extract this ZIP file.
2. Open the project folder.
3. Double-click index.html.
4. The JobFlow dashboard opens in your browser.
5. Add jobs or click "Load sample".
6. Click "Run greedy allocation" to view the selected jobs and profit.

HOW TO RUN THE C PROGRAM
------------------------
Windows (GCC / MinGW):
1. Open Command Prompt in this project folder.
2. Compile:
       gcc job_allocation.c -o job_allocation
3. Run:
       job_allocation.exe

Linux / macOS:
       gcc job_allocation.c -o job_allocation
       ./job_allocation

SAMPLE INPUT
------------
Number of jobs: 5

Job ID: J1     Deadline: 2     Profit: 100
Job ID: J2     Deadline: 1     Profit: 19
Job ID: J3     Deadline: 2     Profit: 27
Job ID: J4     Deadline: 1     Profit: 25
Job ID: J5     Deadline: 3     Profit: 15

EXPECTED ALLOCATION
-------------------
Time Slot 1 -> Job J3 (Profit: 27)
Time Slot 2 -> Job J1 (Profit: 100)
Time Slot 3 -> Job J5 (Profit: 15)
Maximum Total Profit: 142

EASY ALGORITHM EXPLANATION
--------------------------
1. Read the job ID, deadline and profit.
2. Sort the jobs from highest profit to lowest profit.
3. Take the first job (highest profit).
4. Search for a free time slot from its deadline backwards.
5. If a free slot is found, allocate that job.
6. Repeat for all jobs.
7. Add the profits of allocated jobs and display the total.

IMPORTANT NOTE
--------------
The web page is an interactive visual demonstration. The actual C program
is job_allocation.c and can be compiled and run separately. Both use the
same greedy job scheduling rule.

This version assumes each job takes exactly one time slot.
