#include <stdio.h>

#define MAX 20

struct Job {
    char id[10];
    int deadline;
    int profit;
};

int main() {
    struct Job jobs[MAX], temp;
    int n, i, j, maxDeadline = 0;
    int slot[MAX] = {0};
    int totalProfit = 0;

    printf("====================================\n");
    printf("       JOB ALLOCATION SYSTEM\n");
    printf("        Greedy Algorithm\n");
    printf("====================================\n");

    printf("Enter number of jobs (1-%d): ", MAX);
    scanf("%d", &n);

    if (n < 1 || n > MAX) {
        printf("Invalid number of jobs. Please enter 1 to %d.\n", MAX);
        return 0;
    }

    for (i = 0; i < n; i++) {
        printf("\nEnter details for Job %d\n", i + 1);
        printf("Job ID: ");
        scanf("%s", jobs[i].id);
        printf("Deadline: ");
        scanf("%d", &jobs[i].deadline);
        printf("Profit: ");
        scanf("%d", &jobs[i].profit);

        if (jobs[i].deadline < 1 || jobs[i].profit < 0) {
            printf("Deadline must be positive and profit cannot be negative.\n");
            return 0;
        }

        if (jobs[i].deadline > maxDeadline)
            maxDeadline = jobs[i].deadline;
    }

    /* Step 1: Sort jobs by profit in descending order. */
    for (i = 0; i < n - 1; i++) {
        for (j = i + 1; j < n; j++) {
            if (jobs[i].profit < jobs[j].profit) {
                temp = jobs[i];
                jobs[i] = jobs[j];
                jobs[j] = temp;
            }
        }
    }

    /* Step 2: Put each job in the latest free slot before its deadline. */
    if (maxDeadline > MAX)
        maxDeadline = MAX;

    printf("\n----------- ALLOCATION RESULT -----------\n");
    printf("Selected jobs:\n");

    for (i = 0; i < n; i++) {
        int lastSlot = jobs[i].deadline;

        if (lastSlot > maxDeadline)
            lastSlot = maxDeadline;

        for (j = lastSlot - 1; j >= 0; j--) {
            if (slot[j] == 0) {
                slot[j] = i + 1; /* Store the position in sorted jobs. */
                totalProfit += jobs[i].profit;
                printf("Time Slot %d -> Job %s (Profit: %d)\n",
                       j + 1, jobs[i].id, jobs[i].profit);
                break;
            }
        }
    }

    printf("-----------------------------------------\n");
    printf("Maximum Total Profit: %d\n", totalProfit);
    printf("=========================================\n");

    return 0;
}
