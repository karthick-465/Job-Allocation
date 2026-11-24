const sampleJobs = [
  {id:"J1", deadline:2, profit:100},
  {id:"J2", deadline:1, profit:19},
  {id:"J3", deadline:2, profit:27},
  {id:"J4", deadline:1, profit:25},
  {id:"J5", deadline:3, profit:15}
];
let jobs = sampleJobs.map(job => ({...job}));

const rows = document.getElementById("jobRows");
const form = document.getElementById("jobForm");

function renderJobs() {
  rows.innerHTML = "";
  jobs.forEach((job, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${escapeText(job.id)}</td><td>${job.deadline}</td><td>${job.profit}</td>
      <td><button class="delete" data-index="${index}" aria-label="Delete ${escapeText(job.id)}">Remove</button></td>`;
    rows.appendChild(row);
  });
  document.getElementById("jobCount").textContent = jobs.length;
  rows.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", () => {
      jobs.splice(Number(button.dataset.index), 1);
      renderJobs();
      resetResult();
    });
  });
}

function escapeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}

function resetResult() {
  document.getElementById("emptyState").hidden = false;
  document.getElementById("resultArea").hidden = true;
  document.getElementById("selectedCount").textContent = "0";
  document.getElementById("totalProfit").textContent = "0";
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const id = document.getElementById("jobId").value.trim();
  const deadline = Number(document.getElementById("deadline").value);
  const profit = Number(document.getElementById("profit").value);
  if (!id || deadline < 1 || deadline > 20 || profit < 0 ||
      jobs.some(job => job.id.toLowerCase() === id.toLowerCase())) {
    alert("Enter a unique Job ID, deadline from 1 to 20, and a non-negative profit.");
    return;
  }
  jobs.push({id, deadline, profit});
  form.reset();
  renderJobs();
  resetResult();
});

document.getElementById("sampleBtn").addEventListener("click", () => {
  jobs = sampleJobs.map(job => ({...job}));
  renderJobs();
  resetResult();
});

document.getElementById("allocateBtn").addEventListener("click", () => {
  if (!jobs.length) {
    alert("Please add at least one job.");
    return;
  }

  // Greedy step 1: sort a copy of the jobs by highest profit first.
  const sorted = [...jobs].sort((a, b) => b.profit - a.profit);
  const maxDeadline = Math.min(20, Math.max(...jobs.map(job => job.deadline)));
  const slots = Array(maxDeadline).fill(null);
  const selected = [];

  // Greedy step 2: put each job in the latest free slot before its deadline.
  sorted.forEach(job => {
    for (let slot = Math.min(job.deadline, maxDeadline) - 1; slot >= 0; slot--) {
      if (slots[slot] === null) {
        slots[slot] = job;
        selected.push({ ...job, slot: slot + 1 });
        break;
      }
    }
  });

  // Show the result in time-slot order.
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = "";
  slots.forEach((job, index) => {
    const item = document.createElement("div");
    item.className = "slot" + (job ? "" : " free");
    item.innerHTML = `<small>TIME SLOT ${index + 1}</small><strong>${job ? escapeText(job.id) : "Free"}</strong>`;
    timeline.appendChild(item);
  });

  const selectedJobs = selected.sort((a, b) => a.slot - b.slot);
  document.getElementById("selectedJobs").innerHTML = selectedJobs.length
    ? selectedJobs.map(job => `<div class="selected-item"><span>${escapeText(job.id)} · Slot ${job.slot}</span><b>+${job.profit}</b></div>`).join("")
    : '<p class="muted">No jobs could be allocated.</p>';

  const total = selectedJobs.reduce((sum, job) => sum + job.profit, 0);
  document.getElementById("resultProfit").textContent = total;
  document.getElementById("selectedCount").textContent = selectedJobs.length;
  document.getElementById("totalProfit").textContent = total;
  document.getElementById("emptyState").hidden = true;
  document.getElementById("resultArea").hidden = false;
});

renderJobs();
